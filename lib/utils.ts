export const slugify = (str: string): string => {
  return str.toLowerCase().replace(/[^a-zA-Z\d:]/g, "-");
};
