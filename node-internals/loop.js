// node myfile.js

const pendingTimers = [];
const pendingOSTasks = [];
const pendingOprations = [];

// New timers, tasks, oprations are recorded from myfile running
myfile.runContents();

function shouldContinue() {
  // Check one: Any pending setTimeout, setInterval, setImmediate?
  // Check two: Any pending os tasks?(like server listening to port)
  // Check three: Any pending long running oprations?(like fs module)

  return (
    pendingTimers.length || pendingOSTasks.length || pendingOprations.length
  );
}

// entire body executes in one 'tick'
while (shouldContinue()) {
  // 1) Node looks at pendingTimers and sees if any fuctions are
  // ready to be called. (setTimeout, setInterval)
  // 2) Node looks at pendingOSTasks and pendingOprations, and calls relevent callbacks.
  // 3) pause execution. continue when:
  //  - new pendingOSTasks is done.
  //  - new pendingOprations is done.
  //  - timer is about to complete.
  // 4) Node looks at pendingTimers. Call any setImmediate.
  // 5) Handle any close events.
}

// exit back to terminal
