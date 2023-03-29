const colors = {
  darkBlue: '#00308F',
};

type ColorObjectKey = keyof typeof colors;

type Colors = {
  [K in ColorObjectKey]: string;
};

export { colors };
export type { Colors };
