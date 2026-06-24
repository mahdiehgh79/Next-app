type ClassDictionary = Record<string, boolean | undefined | null>;

type ClassValue = string | false | null | undefined | ClassDictionary;

export default function classNames(...args: ClassValue[]): string {
  return args
    .flatMap((arg) => {
      if (!arg) return [];

      if (typeof arg === "string") {
        return [arg];
      }

      return Object.keys(arg).filter((key) => arg[key]);
    })
    .join(" ");
}
