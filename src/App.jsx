import { useEffect, useState } from 'react';
import Parser from 'rss-parser';
import NewsList from './components/NewsList';

const RSS_URL = 'https://vnexpress.net/rss/tin-moi-nhat.rss';
const parser = new Parser();

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    (async () => {
      const feed = await parser.parseURL(
        `${process.env.REACT_APP_CORS_PROXY}${RSS_URL}`
      );
      console.log(feed);
      const DEFAULT_THUMBNAIL = feed.image.url;
      setItems(
        feed.items.map(item => {
          const imgURL =
            new DOMParser()
              .parseFromString(item.content, 'text/html')
              .querySelector('img')?.src ?? DEFAULT_THUMBNAIL;
          return {
            source: feed.description,
            title: item.title,
            link: item.link,
            pubDate: item.pubDate,
            description: item.contentSnippet,
            thumbnail: imgURL,
          };
        })
      );
    })();
  }, []);

  return (
    <div className='App'>
      <NewsList items={items} />
    </div>
  );
}

export default App;
