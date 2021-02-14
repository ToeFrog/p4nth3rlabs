/* eslint-disable object-curly-newline */
import { WebSocketPacket } from "p4nth3rb0t-types";
import type {
  SocketOptions,
  Callback,
  TrustedEventMap,
  TrustedEvent,
  TypedPacketCallback,
} from "./types";

const EVENT_CODES = {
  NORMAL_CLOSURE: 1000,
  ABNORMAL_CLOSURE: 1006,
};

export default class Socket {
  isSecure: boolean;

  reconn: boolean;

  connected: boolean;

  methods: TrustedEventMap;

  packetCallbacks = new Set<TypedPacketCallback>();

  connection: WebSocket;

  constructor(private uri: string, private opts: SocketOptions) {
    this.isSecure = /^(wss:\/\/)/.test(uri) || /^(https:\/\/)/.test(uri);
    this.reconn = opts.reconnect !== undefined ? opts.reconnect : true;

    this.connected = false;

    this.connection = new WebSocket(this.uri);
    this.createConnection();

    this.methods = {
      raw: new Set(),
      open: new Set(),
      close: new Set(),
      error: new Set(),
      sub: new Set(),
      teamMemberJoin: new Set(),
      raid: new Set(),
      cheer: new Set(),
      imageDrop: new Set(),
      specialUserJoin: new Set(),
      chatMessage: new Set(),
      follow: new Set(),
      startGiveaway: new Set(),
      endGiveaway: new Set(),
      drawGiveaway: new Set(),
      enterGiveaway: new Set(),
      dropUser: new Set(),
      weather: new Set(),
      dropEmotes: new Set(),
      weatherTrailEvent: new Set(),
      yeetUser: new Set(),
    };
  }

  createConnection() {
    this.connection = new WebSocket(this.uri);
    this.connection.onopen = (event: Event) => this.triggerOpen(event);
    this.connection.onerror = (event: Event) => this.triggerError(event);
    this.connection.onmessage = (messageEvent: MessageEvent) => this.parseIncoming(messageEvent);
    this.connection.onclose = (event: CloseEvent) => this.triggerClose(event);
    this.connected = true;
  }

  triggerOpen(event: Event) {
    this.methods.open.forEach((func) => {
      if (event.target === this.connection) {
        func(event);
      }
    });
  }

  triggerClose(event: CloseEvent) {
    this.connected = false;

    this.methods.close.forEach((func) => {
      if (event.target === this.connection) {
        func(event);
      }
    });

    if (
      // eslint-disable-next-line operator-linebreak
      event.target === this.connection &&
      // eslint-disable-next-line operator-linebreak
      !event.wasClean &&
      event.code === EVENT_CODES.ABNORMAL_CLOSURE
    ) {
      this.reconnect();
    }
  }

  triggerError(event: Event) {
    this.methods.error.forEach((func) => {
      if (event.target === this.connection) {
        func(event);
      }
    });
  }

  parseIncoming(event: MessageEvent) {
    const json: WebSocketPacket = JSON.parse(event.data);
    let evt: TrustedEvent | null = null;

    if (json && typeof json === "object" && typeof json.event === "string") {
      evt = json.event.toLowerCase() as TrustedEvent;
    }

    if (!evt) {
      return;
    }

    this.packetCallbacks.forEach((callback) => callback(json));

    let callbacks = this.methods[evt];

    if (!callbacks) {
      return;
    }

    callbacks.forEach((func) => {
      if (event.target === this.connection) {
        func(json);
      }
    });
  }

  on(event: TrustedEvent, callback: Callback) {
    this.methods[event].add(callback);
  }

  onPacket(callback: TypedPacketCallback) {
    this.packetCallbacks.add(callback);
  }

  reconnect() {
    if (this.connection.readyState === WebSocket.CLOSED) {
      if (this.reconn) {
        this.createConnection();
      }
    }
  }

  disconnect() {
    this.connection.close(EVENT_CODES.NORMAL_CLOSURE, "Disconnect");
  }
}
