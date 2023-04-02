import React from 'react';
import styled from 'styled-components';

import { Navigation } from '@/component/organisms';
import { Layout } from '@/component/molecules';
import { Text } from '@/component/atoms';

const Article = () => {
  return (
    <Layout>
      <Layout.Header>
        <Navigation />
      </Layout.Header>
      <Layout.Body>
        <div>hello</div>
      </Layout.Body>
      <Layout.Footer />
    </Layout>
  );
};

export default Article;
