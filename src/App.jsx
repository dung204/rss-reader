import { useEffect, useState } from 'react';
import Parser from 'rss-parser';
import NewsList from './components/NewsList';
import URLInput from './components/URLInput';

const RSS_URL = 'http://rss.cnn.com/rss/edition.rss';
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
          const encodedHTML = item['content:encoded'] ?? item.content;
          const imgURL =
            new DOMParser()
              .parseFromString(encodedHTML, 'text/html')
              .querySelector('img')?.src ?? DEFAULT_THUMBNAIL;

          return {
            id: item.guid,
            source: feed.title,
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
      <URLInput />
      <NewsList items={items} />
    </div>
  );
}

export default App;
