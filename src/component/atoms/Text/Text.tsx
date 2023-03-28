import React from 'react';

interface TextProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const Text = ({ children, style, ...props }: TextProps) => {
  return (
    <div style={style} {...props}>
      {children}
    </div>
  );
};

export default Text;
