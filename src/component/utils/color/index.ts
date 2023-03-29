const colors = {
  darkBlue: '#00308F',
  skyBlue: '#2767c2',
  white: '#FFFFFF',
  black: '000000',
};

type ColorKey = keyof typeof colors;

type Colors = {
  [K in ColorKey]: string;
};

export { colors };
export type { Colors, ColorKey };
