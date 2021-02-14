import type { ConstructedEmote } from '../types';
import sanitizeHtml from 'sanitize-html';
import { ChatMessageData } from 'p4nth3rb0t-types';

export const getTeamMemberIconUrl = (isTeamMember: boolean): string => {
  const teamMemberIconUrls = [
    'https://static-cdn.jtvnw.net/emoticons/v2/302880696/default/dark/3.0',
    'https://static-cdn.jtvnw.net/emoticons/v2/303132137/default/dark/3.0',
    'https://static-cdn.jtvnw.net/emoticons/v2/303132133/default/dark/3.0',
    'https://static-cdn.jtvnw.net/emoticons/v2/302880702/default/dark/3.0',
  ];

  return isTeamMember
    ? teamMemberIconUrls[Math.floor(Math.random() * teamMemberIconUrls.length)]
    : '';
};

export function processChat(chat_event: ChatMessageData) {
  let tempMessage: string = chat_event.message.replace(/<img/g, '<DEL');

  const emotes: any[] = [];

  // If the message has emotes, modify message to include img tags to the emote
  if (chat_event.emotes) {
    let emoteSet: ConstructedEmote[] = [];

    for (const emote of Object.keys(chat_event.emotes) as any) {
      const emoteLocations = chat_event.emotes[emote];
      emoteLocations.forEach((location: string) => {
        emoteSet.push(generateEmote(emote, location));
      });
    }

    // Order the emotes descending so we can iterate
    // through them with indexes
    emoteSet.sort((a, b) => {
      return b.end - a.end;
    });

    emoteSet.forEach((emote: ConstructedEmote) => {
      emotes.push(emote.emoteUrl);

      let emoteMessage = tempMessage.slice(0, emote.start);
      emoteMessage += emote.emoteImageTag;
      emoteMessage += tempMessage.slice(emote.end + 1, tempMessage.length);
      tempMessage = emoteMessage;
    });
  }

  tempMessage = sanitizeHtml(tempMessage, {
    allowedAttributes: {
      img: ['class', 'src'],
    },
    allowedTags: ['marquee', 'em', 'strong', 'b', 'i', 'code', 'strike', 'img'],
  });

  tempMessage = tempMessage.replace(/@(\w*)/gm, `<span class="tag">$&</span>`);

  return {
    message: tempMessage,
    emotes: emotes.map((m) => m.emoteImageTag as string),
    type: chat_event.type,
  };
}

export function generateEmote(emoteId: string, position: string): ConstructedEmote {
  const [start, end] = position.split('-').map(Number);

  //todo - if only emote - make 3.0

  return {
    emoteId,
    emoteImageTag: `<img class='emote' src='https://static-cdn.jtvnw.net/emoticons/v1/${emoteId}/1.0'/>`,
    emoteUrl: `https://static-cdn.jtvnw.net/emoticons/v1/${emoteId}/1.0`,
    start,
    end,
  };
}
