'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './CodeDrawer.module.scss';

const mergeClasses = (...className: string[]) => className.join(' ');

const texts = ['React Developer', 'Next.js Developer', 'Freelancer'];

type CodeDrawerProps = {
  className?: string;
};

export default function CodeDrawer({ className }: CodeDrawerProps) {
  const textRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
      setKey((prevKey) => prevKey + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (textRef.current) {
      textRef.current.style.maxWidth = `${textRef.current.scrollWidth}px`;
    }
  }, [key]);

  return (
    <div className={mergeClasses(styles.container, className ?? '')}>
      <code>
        <div>{'<body>'}</div>
        <div>{'  <h1>'}</div>
        {'    '}
        <span className={styles['type-effect']} key={key} ref={textRef}>
          {texts[index]}
        </span>
        <div>{'  </h1>'}</div>
        <div>{'</body>'}</div>
      </code>
    </div>
  );
}
