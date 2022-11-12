export const withTry = async (fn: () => Promise<any>) => {
  try {
    const data = await fn();
    return data;
  } catch (e) {
    //   TODO: capture error
    return e;
  }
};
