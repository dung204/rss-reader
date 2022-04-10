import styles from './NoURLScreen.module.css';

export default function NoURLScreen() {
  return (
    <div className={styles.noURLScreen}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className={styles.rssIcon}
        viewBox='0 0 8 8'
      >
        <rect className={styles.rssButton} width='8' height='8' rx='1.5' />
        <circle
          className={styles.rssSymbol}
          style={{ '--exist-order': 0 }}
          cx='2'
          cy='6'
          r='1'
        />
        <path
          className={styles.rssSymbol}
          style={{ '--exist-order': 1 }}
          d='m 1,4 a 3,3 0 0 1 3,3 h 1 a 4,4 0 0 0 -4,-4 z'
        />
        <path
          style={{ '--exist-order': 2 }}
          className={styles.rssSymbol}
          d='m 1,2 a 5,5 0 0 1 5,5 h 1 a 6,6 0 0 0 -6,-6 z'
        />
      </svg>
      <h3>No feed loaded. Please enter your RSS feed URL</h3>
    </div>
  );
}
