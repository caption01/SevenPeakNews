import React from 'react';

import * as CSSType from '../../utils/csstype';
import { ColorKey } from '@/component/utils/color';

export interface IconProps {
  size: CSSType.Width;
  color: ColorKey;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export const SearchIcon = ({
  size,
  color,
  style,
  onClick,
  ...props
}: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 18"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      onClick={onClick}
      style={style}
      {...props}
    >
      <title>search-icon@2x</title>
      <defs>
        <path
          d="M15.9765628,14.4715628 L15.1865628,14.4715628 L14.9065628,14.2015628 C16.1065628,12.8015628 16.7265628,10.8915628 16.3865628,8.8615628 C15.9165628,6.0815628 13.5965628,3.8615628 10.7965628,3.5215628 C6.5665628,3.0015628 3.0065628,6.5615628 3.5265628,10.7915628 C3.8665628,13.5915628 6.0865628,15.9115628 8.8665628,16.3815628 C10.8965628,16.7215628 12.8065628,16.1015628 14.2065628,14.9015628 L14.4765628,15.1815628 L14.4765628,15.9715628 L18.7265628,20.2215628 C19.1365628,20.6315628 19.8065628,20.6315628 20.2165628,20.2215628 C20.6265628,19.8115628 20.6265628,19.1415628 20.2165628,18.7315628 L15.9765628,14.4715628 Z M9.9765628,14.4715628 C7.4865628,14.4715628 5.4765628,12.4615628 5.4765628,9.9715628 C5.4765628,7.4815628 7.4865628,5.4715628 9.9765628,5.4715628 C12.4665628,5.4715628 14.4765628,7.4815628 14.4765628,9.9715628 C14.4765628,12.4615628 12.4665628,14.4715628 9.9765628,14.4715628 Z"
          id="path-1"
        ></path>
      </defs>
      <g
        id="Test-screens"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g id="Home" transform="translate(-1219.000000, -94.000000)">
          <g id="Group-4" transform="translate(1180.000000, 91.000000)">
            <g
              id="action-/-search_24px"
              transform="translate(36.000000, 0.000000)"
            >
              <mask id="mask-2" fill="white">
                <use xlinkHref="#path-1"></use>
              </mask>
              <use fill={color} fill-rule="evenodd" xlinkHref="#path-1"></use>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export const Triangle = ({
  size,
  color,
  style,
  onClick,
  ...props
}: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
      style={style}
      onClick={onClick}
      {...props}
    >
      <path d="M24 22h-24l12-20z" />
    </svg>
  );
};
