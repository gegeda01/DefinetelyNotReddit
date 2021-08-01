const cleanText = (text: string): string => {
  if (!text) return text;
  return text.replace(/[\\\n]+/g, ' ').replace('"', '"');
};

export { cleanText };
