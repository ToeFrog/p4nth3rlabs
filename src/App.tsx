import React, { useReducer, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Socket from "./socket";
import AppContext, { AppState } from "./AppContext";
import AppReducer from "./AppReducer";
import MessageQueue from "./components/chat";
import Alerts from "./components/alerts";
import Overlay from "./components/overlay";
import Webcam from "./components/webcam";
import Giveaway from "./components/giveaway";
import { GlobalStyle } from "./styles";
import { WebSocketPacket } from "p4nth3rb0t-types";

interface AppProps {
  uri: string | undefined;
}

function App(props: AppProps) {
  const { uri } = props;

  useEffect(() => {
    let socket: Socket;
    if (uri && uri.length > 0) {
      socket = new Socket(uri, {
        reconnect: true,
      });

      socket.onPacket((event: WebSocketPacket) => {
        dispatch(event);
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
