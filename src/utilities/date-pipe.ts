// src/utils/datePipe.ts
export const datePipe = (
  value: string | Date,
  format: string = "mediumDate"
): string => {
  if (!value) return "";

  const date = value instanceof Date ? value : new Date(value);

  // Predefined Angular-like formats
  const predefined: Record<string, string> = {
    short: "M/d/yy, h:mm a",
    medium: "MMM d, y, h:mm:ss a",
    long: "MMMM d, y, h:mm:ss a z",
    fullDate: "EEEE, MMMM d, y",
    longDate: "MMMM d, y",
    mediumDate: "MMM d, y",
    shortDate: "M/d/yy",
    mediumTime: "h:mm:ss a",
    shortTime: "h:mm a",
  };

  // If user passed a predefined format
  if (predefined[format]) {
    return formatDate(date, predefined[format]);
  }

  // Otherwise treat as custom pattern e.g. dd/MM/yyyy
  return formatDate(date, format);
};

// Internal helper to parse patterns like dd/MM/yyyy
const formatDate = (date: Date, format: string): string => {
  const map: Record<string, string> = {
    yyyy: date.getFullYear().toString(),
    yy: date.getFullYear().toString().slice(-2),
    MMMM: date.toLocaleString("en-US", { month: "long" }),
    MMM: date.toLocaleString("en-US", { month: "short" }),
    MM: String(date.getMonth() + 1).padStart(2, "0"),
    M: String(date.getMonth() + 1),
    dd: String(date.getDate()).padStart(2, "0"),
    d: String(date.getDate()),
    EEEE: date.toLocaleString("en-US", { weekday: "long" }),
    EEE: date.toLocaleString("en-US", { weekday: "short" }),
    HH: String(date.getHours()).padStart(2, "0"),
    H: String(date.getHours()),
    hh: String(date.getHours() % 12 || 12).padStart(2, "0"),
    h: String(date.getHours() % 12 || 12),
    mm: String(date.getMinutes()).padStart(2, "0"),
    m: String(date.getMinutes()),
    ss: String(date.getSeconds()).padStart(2, "0"),
    s: String(date.getSeconds()),
    a: date.getHours() >= 12 ? "PM" : "AM",
  };

  return Object.keys(map).reduce(
    (acc, key) => acc.replace(new RegExp(key, "g"), map[key]),
    format
  );
};
