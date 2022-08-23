import { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = "19992895c1984228934bf8c7dd43649e";

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const { data } = await axios.get(
        `https://newsapi.org/v2/everything?q=war&from=2022-08-23&pageSize=10&lang="en"&apiKey=${API_KEY}`
      );
      setNews(data.articles);
    };
    fetchNews();
  }, []);

  return (
    <>
      {news.map((article) => {
        const content = article.content.split("[")[0];

        return (
          <article id={article.url + article.title}>
            <h3>{article.title}</h3>
            {article.author && <div>{article.author}</div>}
            <div className="content">
              {article.urlToImage && (
                <img
                  src={article.urlToImage}
                  alt={article.title}
                  width={200}
                  loading="lazy"
                  style={{ marginRight: "10px" }}
                />
              )}
              {content}
            </div>
          </article>
        );
      })}
    </>
  );
};

export default News;
