import React, { Suspense } from 'react';
import Loading from '../components/common/Loading';
import Home from '../components/Home/Home';

const HomePage: React.FC = (): JSX.Element => {
  return (
    <Suspense fallback={<Loading />}>
      <Home />
    </Suspense>
  );
};

export default HomePage;
