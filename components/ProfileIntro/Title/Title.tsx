import styles from './Title.module.scss';

type TitleProps = {
  text: string;
};

export default function Title({ text }: TitleProps) {
  return <h2 className={styles.title}>{text}</h2>;
}
