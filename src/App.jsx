import { useEffect, useState } from 'react';
import Parser from 'rss-parser';
import NewsList from './components/NewsList';
import URLInput from './components/URLInput';
import NoURLScreen from './components/NoURLScreen';
import LoadingURLScreen from './components/LoadingURLScreen';

const RSS_URL = 'http://rss.cnn.com/rss/edition.rss';
const parser = new Parser();

function App() {
  const [items, setItems] = useState([]);
  const [rssURL, setRssURL] = useState('');
  const handleURL = url => setRssURL(url);

  useEffect(() => {
    (async () => {
      if (!rssURL.trim()) return;

      const feed = await parser.parseURL(
        `${process.env.REACT_APP_CORS_PROXY}${rssURL.trim()}`
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
  }, [rssURL]);

  return (
    <div className='App'>
      <URLInput onEnterURL={handleURL} />
      {/* <NewsList items={items} /> */}
      {/* <NoURLScreen /> */}
      <LoadingURLScreen />
    </div>
  );
}

export default App;
