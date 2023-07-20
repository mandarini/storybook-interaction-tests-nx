import styles from './example.module.css';
export interface ExampleProps {
  name: string;
  age: number;
  isItTrue: boolean;
}

export function Example(props: ExampleProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Example!</h1>
    </div>
  );
}

export default Example;
