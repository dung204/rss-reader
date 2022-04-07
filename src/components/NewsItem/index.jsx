import styles from './NewsItem.module.css';

export default function NewsItem({ metadata, onWheel }) {
  return (
    <div className={styles.newsCard} onWheel={onWheel}>
      <a
        className={styles.newsThumbnail}
        href={metadata.link}
        target='_blank'
        rel='noreferrer'
      >
        <img src={metadata.thumbnail} alt='' />
        <button>Xem thêm</button>
      </a>
      <div className={styles.contentContainer}>
        <h2 className={styles.newsHeading}>
          <a
            href={metadata.link}
            title={metadata.title}
            target='_blank'
            rel='noreferrer'
          >
            {metadata.title}
          </a>
        </h2>
        <p className={styles.newsDescription}>{metadata.description}</p>
        <p className={styles.newsSource}>{metadata.source}</p>
      </div>
    </div>
  );
}
