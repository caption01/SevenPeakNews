const colors = {
  darkBlue: '#00308F',
  skyBlue: '#1974D2',
  white: '#FFFFFF',
  black: '000000',
};

type ColorObjectKey = keyof typeof colors;

type Colors = {
  [K in ColorObjectKey]: string;
};

export { colors };
export type { Colors };
