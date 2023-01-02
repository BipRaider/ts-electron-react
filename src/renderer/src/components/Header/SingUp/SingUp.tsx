import React, { useState, Suspense } from 'react';
import NavButton from '../../common/NavButton/NavButton';

import DrawerSinUp from './DrawerSinUp/DrawerSinUp';

//Lazy components

/**
 * Component for user sing up.
 */
const SinIn: React.FC = (): JSX.Element => {
  const [visible, setVisible] = useState(false);

  const showDrawer: () => void = (): void => {
    setVisible(true);
  };

  const onClose: () => void = (): void => {
    setVisible(false);
  };

  return (
    <>
      <NavButton onToggle={showDrawer}>Sing Up</NavButton>
      {visible && (
        <Suspense>
          <DrawerSinUp onClose={onClose} onVisible={visible} />
        </Suspense>
      )}
    </>
  );
};

export default SinIn;
