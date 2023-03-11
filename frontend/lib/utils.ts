// Returns a "slug" version of a string,
// e.g. "Dr. Onishi's Musings" -> "dr-onishis-musings"
export const slugify = (str: string): string => {
  return str
    .toLowerCase()
    .replace(/[^a-zA-Z\d\s:]/g, "")
    .split(" ")
    .join("-");
};

// Returns a custom comparator for sorting objects by property.
// Use with sort(), e.g., sort(compareBy("prop"))
export const compareBy = (prop: string): ((a: any, b: any) => 1 | -1 | 0) => {
  return (objA: any, objB: any) => {
    const [a, b] = [objA, objB].map((obj) => {
      return typeof obj[prop] === "string"
        ? obj[prop].toLowerCase().replace(/\W/g, "")
        : obj[prop];
    });

    return a < b ? -1 : a > b ? 1 : 0;
  };
};

// Shorten up to given word count and remove HTML tags.
export const excerpt = (text: string, wordCount: number = 30): string => {
  // return text.slice(0, text.indexOf(". ") + 1).replace(/(<([^>]+)>)/gi, "");
  const words = text.replace(/(<([^>]+)>)/gi, "").split(" ");
  let shortenedWords = words.slice(0, wordCount).join(" ");

  if (words.length > wordCount) {
    shortenedWords += "...";
  }
  return shortenedWords;
};
