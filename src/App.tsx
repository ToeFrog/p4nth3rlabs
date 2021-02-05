import React, { useReducer, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Socket from './socket';
import AppContext, { AppState } from './AppContext';
import AppReducer from './AppReducer';
import MessageQueue from './components/chat';
import Alerts from './components/alerts';
import Overlay from './components/overlay';
import Webcam from './components/webcam';
import Giveaway from './components/giveaway';
import { GlobalStyle } from './styles';
import {
  MainframeEvent,
  ChatWebsocketEvent,
  AlertWebsocketEvent,
  GiveawayEntryWebsocketEvent,
} from './types';

interface AppProps {
  uri: string | undefined;
}

function App(props: AppProps) {
  const { uri } = props;

  useEffect(() => {
    let socket: any;
    if (uri && uri.length > 0) {
      socket = new Socket(uri, {
        reconnect: true,
      });

      socket.on(MainframeEvent.chatmessage, (event: ChatWebsocketEvent) => {
        dispatch({
          type: 'addChatMessage',
          data: event.data,
        });
      });

      socket.on(MainframeEvent.raid, (event: AlertWebsocketEvent) => {
        const dataToPass: any = {
          type: MainframeEvent.raid,
          id: event.id,
          data: event.data,
        };

        dispatch({
          type: MainframeEvent.raid,
          data: dataToPass,
        });
      });

      socket.on(MainframeEvent.sub, (event: AlertWebsocketEvent) => {
        const dataToPass: any = {
          type: MainframeEvent.sub,
          id: event.id,
          data: event.data,
        };

        dispatch({
          type: MainframeEvent.sub,
          data: dataToPass,
        });
      });

      socket.on(MainframeEvent.cheer, (event: AlertWebsocketEvent) => {
        const dataToPass: any = {
          type: MainframeEvent.cheer,
          id: event.id,
          data: event.data,
        };

        dispatch({
          type: MainframeEvent.cheer,
          data: dataToPass,
        });
      });

      socket.on(MainframeEvent.follow, (event: AlertWebsocketEvent) => {
        const dataToPass: any = {
          type: MainframeEvent.follow,
          id: event.id,
          data: event.data,
        };

        dispatch({
          type: MainframeEvent.follow,
          data: dataToPass,
        });
      });

      socket.on(MainframeEvent.entergiveaway, (event: GiveawayEntryWebsocketEvent) => {
        const dataToPass: any = {
          type: MainframeEvent.entergiveaway,
          id: event.id,
          data: event.data,
        };

        dispatch({
          type: MainframeEvent.entergiveaway,
          data: dataToPass,
        });
      });

      socket.on(MainframeEvent.startgiveaway, (event: GiveawayEntryWebsocketEvent) => {
        const dataToPass: any = {
          type: MainframeEvent.startgiveaway,
          id: event.id,
          data: event.data,
        };

        dispatch({
          type: MainframeEvent.startgiveaway,
          data: dataToPass,
        });
      });

      socket.on(MainframeEvent.endgiveaway, (event: GiveawayEntryWebsocketEvent) => {
        const dataToPass: any = {
          type: MainframeEvent.endgiveaway,
          id: event.id,
          data: event.data,
        };

        dispatch({
          type: MainframeEvent.endgiveaway,
          data: dataToPass,
        });
      });

      socket.on(MainframeEvent.drawgiveaway, (event: GiveawayEntryWebsocketEvent) => {
        const dataToPass: any = {
          type: MainframeEvent.drawgiveaway,
          id: event.id,
          data: event.data,
        };

        dispatch({
          type: MainframeEvent.drawgiveaway,
          data: dataToPass,
        });
      });
    }
    return () => {
      // cleanup
      if (socket) {
        socket.disconnect();
      }
    };
  }, [uri]);

  const initialState: AppState = {
    chatMessages: [],
    alerts: [],
    giveawayEntries: [],
    giveawayInProgress: false,
    giveawayWinner: '',
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <GlobalStyle />

      <Router>
        <Switch>
          <Route path="/chat">
            <MessageQueue />
          </Route>
          <Route path="/alerts">
            <Alerts dispatch={dispatch} />
          </Route>
          <Route path="/overlay">
            <Overlay />
          </Route>
          <Route path="/webcam">
            <Webcam />
          </Route>
          <Route path="/giveaway">
            <Giveaway />
          </Route>
        </Switch>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
