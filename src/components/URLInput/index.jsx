import { useRef } from 'react';
import styles from './URLInput.module.css';

export default function URLInput({ onEnterURL }) {
  const inputRef = useRef();

  return (
    <>
      <input
        ref={inputRef}
        type='url'
        className={styles.URLInput}
        placeholder='Enter RSS feed url here...'
      />
      <button onClick={() => onEnterURL(inputRef.current.value)}>
        Load RSS
      </button>
    </>
  );
}
