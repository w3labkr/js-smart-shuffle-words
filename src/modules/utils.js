export const sleep = (ms) => {
  const wakeUpTime = Date.now() + ms;
  while (Date.now() < wakeUpTime) {}
};

export const delay = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const delayPromise = (ms) => {
  return (...args) =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(...args);
      }, ms);
    });
};
