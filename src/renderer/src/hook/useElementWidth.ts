import { useState, useEffect, useRef, MutableRefObject } from 'react';

type IRefElementWidth = MutableRefObject<any>;
type TUseElementWidth = () => [ref: IRefElementWidth, width: number];

export const useElementWidth: TUseElementWidth = (): [ref: IRefElementWidth, width: number] => {
  const [width, setWidth] = useState<number>(0);

  const elemWidth: ResizeObserverCallback = (entries: ResizeObserverEntry[]): void => {
    const { width } = entries[0].contentRect;
    setWidth(width);
  };

  const ref: IRefElementWidth = useRef();
  const observer: React.MutableRefObject<ResizeObserver> = useRef(new ResizeObserver(elemWidth));

  useEffect((): void => {
    if (ref.current) {
      observer.current.observe(ref.current);
    }
  }, [ref, observer]);

  return [ref, width];
};

export default useElementWidth;
