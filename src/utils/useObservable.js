import { useRef, useEffect } from "react";

export default function useObservable(element, setPage) {
  const observer = useRef(
    new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        console.log(first);
        if (first.isIntersecting) {
          setPage((current) => current + 1);
        }
      },
      { threshold: 1 }
    )
  );
  useEffect(() => {
    const currentElement = element;
    const currentObserver = observer.current;

    if (currentElement) {
      currentObserver.observe(currentElement);
    }
    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [element]);
}
