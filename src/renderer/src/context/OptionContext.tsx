import React, { Context, useEffect, useState } from 'react';

type mode = 'alternate' | 'right';

interface iOptionContext {
  setWidth?: React.Dispatch<React.SetStateAction<number>>;
  setHeight?: React.Dispatch<React.SetStateAction<number>>;
  width: number;
  widthDraw: string;
  modeProject?: mode;
  height: number;
}

const OptionsContext: Context<iOptionContext> = React.createContext({
  width: 0,
  widthDraw: 'calc(100% - 150px)',
  height: 0,
});

export const useOptions = (): iOptionContext => React.useContext(OptionsContext);

interface Props {
  children?: React.ReactNode | React.ReactNode[];
}

export const OptionsProvider: React.FC<Props> = ({ children }): JSX.Element => {
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [widthDraw, setWidthDraw] = useState<string>('calc(100% - 150px)');

  const [modeProject, setModeProject] = useState<'alternate' | 'right'>('alternate');

  useEffect((): void => {
    if (width >= 748.1) {
      if (widthDraw === 'calc(100%)') setWidthDraw('calc(100% - 150px)');
    }
    if (width <= 748) {
      if (widthDraw === 'calc(100% - 150px)') setWidthDraw('calc(100%)');
    }

    if (modeProject === 'alternate' && width < 900) return setModeProject('right');
    if (modeProject === 'right' && width > 900.1) return setModeProject('alternate');
  }, [width, height]);

  return (
    <OptionsContext.Provider
      value={{
        width,
        setWidth,
        height,
        setHeight,
        modeProject,
        widthDraw,
      }}
    >
      {children}
    </OptionsContext.Provider>
  );
};
