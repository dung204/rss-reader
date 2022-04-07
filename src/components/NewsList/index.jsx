import { useRef } from 'react';
import NewsItem from '../NewsItem';
import styles from './NewsList.module.css';

export default function NewsList({ items }) {
  const newsListRef = useRef();

  const handleWheel = e => {
    newsListRef.current.scrollTo({
      left: newsListRef.current.scrollLeft + (e.deltaY > 0 ? 350 : -350),
      behavior: 'smooth',
    });
  };

  return (
    <div ref={newsListRef} className={styles.newsList} onWheel={handleWheel}>
      {items.map(metadata => (
        <NewsItem key={metadata.id} metadata={metadata} onWheel={handleWheel} />
      ))}
    </div>
  );
}
