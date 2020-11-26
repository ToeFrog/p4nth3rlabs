// Taken from p4nth3rball!
// Create a queue that waits `delay` milliseconds
// before handling the next item
export default function AlertQueue(delay = 0) {
  // This is where we'll track items to work on
  let locked = false;
  const items: (() => void)[] = [];

  const setLockTimer = () => {
    locked = true; // immediately locks queue
    setTimeout((_) => {
      locked = false; // unlocks when complete
      // eslint-disable-next-line no-use-before-define
      attempt(); // attempts to run again when available
    }, delay);
  };

  // We'll call this whenever we want to run
  // the first item in our queue
  const attempt = () => {
    if (items.length > 0 && locked === false) {
      setLockTimer();
      const fn = items.shift();

      if (fn) {
        fn();
      }
    }
  };

  return {
    push(fn: () => void) {
      // prevent bad times with a helpful message
      if (typeof fn !== 'function') {
        throw new Error('Must pass "queue.push" a function!');
      }

      items.push(fn); // add work to the queue
      attempt(); // immediately attempt to run it
    },
  };
}
