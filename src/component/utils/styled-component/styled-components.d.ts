import 'styled-components';

import { Colors } from '@/component/utils/color';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Colors;
  }
}
