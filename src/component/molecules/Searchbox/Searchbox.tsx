import React from 'react';

import { Icon, Text } from '@/component/atoms';

const Searchbox = () => {
  return (
    <div>
      <div>
        <Text>Search All News</Text>
      </div>
      <div>
        <Icon name="search" size={'2rem'} />
      </div>
    </div>
  );
};

export default Searchbox;
