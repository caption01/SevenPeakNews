export function getSafeUndefind(val: any = undefined, defaultValue: any) {
  if (val === undefined) {
    return defaultValue;
  }

  return val;
}
