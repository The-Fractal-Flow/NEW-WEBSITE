"use client";

import { useRef, useEffect, useState, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  animationClass?: string;
  hiddenClass?: string;
  delay?: number; // delay in ms
}

export function AnimateOnScroll({ children, className, animationClass = "animate-fade-in-up", hiddenClass="opacity-0", delay = 0 }: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
            observer.unobserve(element);
          }, delay);
        }
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={cn(className, 'duration-1000', isVisible ? animationClass : hiddenClass)}
    >
      {children}
    </div>
  );
}
