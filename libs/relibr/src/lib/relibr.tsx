import styles from './relibr.module.css';

/* eslint-disable-next-line */
export interface RelibrProps {}

export function Relibr(props: RelibrProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Relibr!</h1>
    </div>
  );
}

export default Relibr;
