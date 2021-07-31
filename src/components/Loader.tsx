import { Skeleton } from '@chakra-ui/react';
import React from 'react';

interface LoaderProps {
  loading?: boolean;
}

const Loader: React.FC<LoaderProps> = ({ loading }) => {
  return (
    <>
      <Skeleton
        startColor="blue.500"
        endColor="gray.700"
        h="1px"
        w="100vw"
        position="fixed"
        left="0"
        top="0"
        isLoaded={!loading}
        zIndex="1000"
      />
    </>
  );
};

export default Loader;
