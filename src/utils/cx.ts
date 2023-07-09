export const cx = (...args: (string | undefined | boolean)[]) =>
  args
    .flat()
    .filter(x => x !== null && x !== undefined && typeof x !== 'boolean')
    .join(' ');
