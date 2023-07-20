import styles from './relibr.module.css';

export interface RelibrProps {
  name: string;
  age: number;
  isItTrue: boolean;
}

export function Relibr(props: RelibrProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Relibr!</h1>
    </div>
  );
}

export default Relibr;
