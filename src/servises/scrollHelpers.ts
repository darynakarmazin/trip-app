export const onNextClick = (
  containerRef: React.MutableRefObject<HTMLElement | null>
) => {
  if (containerRef.current) {
    (containerRef.current as HTMLElement).scrollLeft += 100;
  }
};

export const onPreviousClick = (
  containerRef: React.MutableRefObject<HTMLElement | null>
) => {
  if (containerRef.current) {
    (containerRef.current as HTMLElement).scrollLeft -= 100;
  }
};
