export const makeKey = (...parts: (string | number)[]) =>
  parts
    .filter(Boolean)
    .map(p => String(p).trim().toLowerCase().replace(/\s+/g, '-'))
    .join('-');
