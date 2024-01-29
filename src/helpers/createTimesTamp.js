export const createTimesTamp = () => {
  return new Date().toISOString().slice(0, 10);
};