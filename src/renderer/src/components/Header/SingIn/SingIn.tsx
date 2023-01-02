import React, { useState, Suspense } from 'react';
import NavButton from '../../common/NavButton/NavButton';

import DrawerSinIn from './DrawerSinIn/DrawerSinIn';

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
      <NavButton onToggle={showDrawer}>Sing In</NavButton>
      {visible && (
        <Suspense>
          <DrawerSinIn onClose={onClose} onVisible={visible} />
        </Suspense>
      )}
    </>
  );
};

export default SinIn;
