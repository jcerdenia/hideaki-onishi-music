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
