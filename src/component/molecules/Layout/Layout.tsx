import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 100%;
`;

const StyledHeader = styled.div`
  width: 100%;
  padding: 0 10%;
  margin: auto;
  background-color: ${({ theme }) => theme.colors.darkBlue};
`;

const StyledBody = styled.div`
  width: 80%;
  margin: 5rem auto;
`;

const StyledFooter = styled.div`
  background-color: ${({ theme }) => theme.colors.darkBlue};
  width: 100%;
  height: 20rem;
`;

const Header = (props: React.PropsWithChildren) => {
  return <StyledHeader {...props} />;
};

const Body = (props: React.PropsWithChildren) => {
  return <StyledBody {...props} />;
};

const Footer = (props: React.PropsWithChildren) => {
  return <StyledFooter {...props} />;
};

const Layout = (props: React.PropsWithChildren) => {
  return (
    <StyledDiv>
      <div {...props} />
    </StyledDiv>
  );
};

Layout.Header = Header;
Layout.Body = Body;
Layout.Footer = Footer;

export default Layout;
