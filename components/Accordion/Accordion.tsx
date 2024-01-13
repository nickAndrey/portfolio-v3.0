'use client';

import { MouseEvent, ReactNode, useEffect, useRef, useState } from 'react';
import AngleRight from '../icons/AngleRight';
import styles from './Accordion.module.scss';

type AccordionProps = {
  title: string;
  children: ReactNode;
  open?: boolean;
};

export default function Accordion({ title, children, open = false }: AccordionProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(open);

  const onToggle = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  useEffect(() => setIsOpen(open), [open]);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.height = isOpen ? `${contentRef.current.scrollHeight}px` : '0px';
    }
  }, [isOpen]);

  return (
    <div className={styles.details}>
      <div onClick={onToggle} className={styles.summary}>
        {title}
        <span className={[styles['icon-container'], isOpen ? styles.open : ''].join(' ')}>
          <AngleRight />
        </span>
      </div>

      <div ref={contentRef} style={{ transition: 'var(--transition)' }}>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
}
