
import { useEffect, useState, useRef } from "react";

type IntersectionOptions = {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
};

export function useIntersectionObserver(
  options: IntersectionOptions = {
    threshold: 0.1,
    rootMargin: "0px",
    once: true,
  }
) {
  const ref = useRef<HTMLElement | null>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);

        if (options.once && entry.isIntersecting && ref.current) {
          observer.unobserve(ref.current);
        }
      },
      {
        threshold: options.threshold,
        rootMargin: options.rootMargin,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options.once, options.threshold, options.rootMargin]);

  return { ref, isIntersecting };
}
