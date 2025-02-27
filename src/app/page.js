import { fetchNews } from '../utils/news';
import styles from '../styles/Home.module.css';

export default async function Home() {
  const news = await fetchNews();

  return (
    <div>
      <h1>Top Headlines in the US</h1>
      <div>
        {news.map((article, index) => (
          <div key={index} className={styles.newsCard}>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <p><strong>Author:</strong> {article.author || 'Unknown'}</p>
            {article.urlToImage && (
              <img src={article.urlToImage} alt={article.title} className={styles.newsImage} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}