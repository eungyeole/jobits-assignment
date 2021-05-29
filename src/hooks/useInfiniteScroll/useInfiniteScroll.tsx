import { AxiosPromise } from "axios";
import { LegacyRef, useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
/*export function useInfiniteScroll(distance) : [number, any, LegacyRef<HTMLDivElement>] {
  const scrollContainerRef = useRef<HTMLDivElement>();
  const loaderRef = useRef();
  const [page, setPage] = useState(0);

  useLayoutEffect(() => {
    const loaderNode = loaderRef.current;
    const scrollContainerNode = scrollContainerRef.current;
    if (!scrollContainerNode || !loaderNode) return;

    const options = {
      root: scrollContainerNode,
      rootMargin: `0px 0px ${distance}px 0px`,
    };

    let previousY;
    let previousRatio = 0;

    const listener = entries => {
      entries.forEach(
        ({ isIntersecting, intersectionRatio, boundingClientRect = {} }) => {
          const temp : any = boundingClientRect
          const { y } = temp;
          if (
            isIntersecting &&
            intersectionRatio >= previousRatio &&
            (!previousY || y < previousY)
          ) {
            setPage(page => page + 1);
          }
          previousY = y;
          previousRatio = intersectionRatio;
        },
      );
    };

    const observer = new IntersectionObserver(listener, options);
    observer.observe(loaderNode);

    return () => observer.disconnect();
  }, [distance]);

  return [page, loaderRef, scrollContainerRef];
}*/

export function useInfiniteScroll(){
  const [isFetching, setIsFetching] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const intersectionCallbackFunc = entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        console.log(entry.intersectionRatio)
        if (entry.intersectionRatio >= 0.1) {
          
        }
      }
      else{
        console.log('test2')
      }
    })
  }
  useEffect(()=>{
    const scrollObserver = new IntersectionObserver(intersectionCallbackFunc,{
      root: null,
      rootMargin : `0px`,
      threshold: 1
    })
    scrollObserver.observe(scrollRef.current)
    return () => scrollObserver?.disconnect();
  },[scrollRef])
  
  // useEffect(()=>{
  //   test.observe(scrollRef.current)
  //   return () => test && test.disconnect();
  // },[scrollRef]) 
  return [scrollRef]
}