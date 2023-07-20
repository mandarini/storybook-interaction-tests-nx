import styles from './relibv.module.css';

/* eslint-disable-next-line */
export interface RelibvProps {}

export function Relibv(props: RelibvProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Relibv!</h1>
    </div>
  );
}

export default Relibv;
