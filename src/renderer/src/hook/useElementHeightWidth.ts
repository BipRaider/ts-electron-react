import { useState, useEffect, useRef, MutableRefObject } from 'react';

type IRefElementHeight = MutableRefObject<any>;
type TUseElementHeight = () => [ref: IRefElementHeight, height: number, width: number];

export const useElementHeightWidth: TUseElementHeight = (): [
  ref: IRefElementHeight,
  height: number,
  width: number,
] => {
  const [height, setHeight] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);

  const elemHeight: ResizeObserverCallback = (entries: ResizeObserverEntry[]): void => {
    const { height, width } = entries[0].contentRect;
    setHeight(height);
    setWidth(width);
  };

  const ref: IRefElementHeight = useRef();
  const observer: React.MutableRefObject<ResizeObserver> = useRef(new ResizeObserver(elemHeight));

  useEffect((): void => {
    if (ref.current) {
      observer.current.observe(ref.current);
    }
  }, [ref, observer]);

  return [ref, height, width];
};
