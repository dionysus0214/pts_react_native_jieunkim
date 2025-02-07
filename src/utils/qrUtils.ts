export const generateQrData = () => {
  const randomNum = Math.floor(Math.random() * 90 + 10);
  return `김지은_${randomNum}`;
};
