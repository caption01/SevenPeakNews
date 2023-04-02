const colors = {
  darkBlue: '#00308F',
  skyBlue: '#2767c2',
  white: '#FFFFFF',
  black: '000000',
  red: '#ff0000',
  green: '#00ff00',
  yello: '#ffff00',
  lightBlue: '#00ffff',
  grey: '#D3D3D3',
};

type ColorKey = keyof typeof colors;

type Colors = {
  [K in ColorKey]: string;
};

export { colors };
export type { Colors, ColorKey };
