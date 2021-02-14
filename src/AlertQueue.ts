import { Dispatch, useContext, useEffect, useState } from 'react';
import AppContext, { AlertCompleteAction, AlertQueueEvent } from './AppContext';

export function useAlertQueue(dispatch: Dispatch<any>): AlertQueueEvent | null {
  const ctx = useContext(AppContext);
  const [currentAlert, setCurrentAlert] = useState<AlertQueueEvent | null>(null);

  useEffect(() => {
    if (ctx.state.alerts.length === 0) setCurrentAlert(null);
    else if (currentAlert?.id !== ctx.state.alerts[0].id) {
      setCurrentAlert(ctx.state.alerts[0]);
      setTimeout(() => dispatch({ event: 'alert_complete' } as AlertCompleteAction), 5000);
    }
  }, [ctx, dispatch, currentAlert]);

  return currentAlert;
}
