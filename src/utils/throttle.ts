export const throttle = <F extends (...args: any[]) => any>(
  func: F,
  ms = 250
) => {
  let isThrottled = false;
  let savedArgs: any[] | null;
  let savedThis: any;

  function wrapper(this: any, ...args: any[]) {
    if (isThrottled) {
      savedArgs = args;
      savedThis = this;
      return;
    }

    func.apply(this, args); // (1)

    isThrottled = true;

    setTimeout(() => {
      isThrottled = false; // (3)

      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }

  return wrapper;
};
