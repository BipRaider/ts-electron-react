import React, { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';

import About from '../components/About/About';
import Loading from '../components/common/Loading';
import { aboutOperations } from '../redux/about';

const AboutPage: React.FC = (): JSX.Element => {
  const dispatch: Dispatch<AnyAction> = useDispatch();

  useEffect((): void => {
    aboutOperations.getAbout(dispatch);
  });

  return (
    <Suspense fallback={<Loading />}>
      <About></About>
    </Suspense>
  );
};

export default AboutPage;
