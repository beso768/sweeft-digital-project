import { useEffect } from 'react';

export default function useObservable(element, setPage) {
  useEffect(() => {
    if (element) {
      let observer = new IntersectionObserver(
        entries => {
          if (entries[0].isIntersecting) {
            setPage(curr => curr + 1);
          }
        },
        { threshold: 1 }
      );
      observer.observe(element);
    }
  }, [element]);
}
