export function getSafeUndefind(val: any = undefined, defaultValue: any) {
  if (val === undefined) {
    return defaultValue;
  }

  return val;
}

export const pause = (ms = 1000) => new Promise((res) => setTimeout(res, ms));
