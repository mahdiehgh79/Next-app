export default function classNames(...args: any[]) {
  return args.flat().filter(Boolean).join(" ");
}
