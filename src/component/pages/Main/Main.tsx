import React from 'react';
import styled from 'styled-components';

import { Navigation, NewsOverview } from '@/component/organisms';

const Layout = styled.div`
  width: 100%;
`;

const Main = () => {
  return (
    <Layout>
      <Navigation spaceX={80} />
      <NewsOverview />
    </Layout>
  );
};

export default Main;
