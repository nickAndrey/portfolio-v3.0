'use client';

import { MouseEvent, ReactNode, useEffect, useState } from 'react';
import styles from './Accordion.module.scss';

type AccordionProps = {
  title: string;
  children: ReactNode;
  open?: boolean;
};

export default function Accordion({ title, children, open = false }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(open);

  const onToggle = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  useEffect(() => setIsOpen(open), [open]);

  return (
    <details open={isOpen} className={styles.details}>
      <summary onClick={onToggle} className={styles.summary}>
        {title}
        <span className={[styles.icon, isOpen ? styles.open : styles.close].join(' ')} />
      </summary>

      <div className={styles.content}>{children}</div>
    </details>
  );
}
