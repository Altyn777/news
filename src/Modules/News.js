import { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = "19992895c1984228934bf8c7dd43649e";

const News = () => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(false);
  console.log(error);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const { data } = await axios.get(
          `https://newsapi.org/v2/everything?q=technology&from=2022-08-25&pageSize=10&lang="en"&apiKey=${API_KEY}`
        );
        setNews(data.articles);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchNews();
  }, []);

  return error ? (
    <span className="text-danger m-3">{error}</span>
  ) : (
    <>
      {news.map((article) => {
        const content = article.content.split("[")[0];

        return (
          <article
            id={article.url + article.title}
            className="card card-body bg-success border-success bg-opacity-25 m-3 p-3"
          >
            <h3 className="card-title">{article.title}</h3>
            {article.author && (
              <div className="card-subtitle">{article.author}</div>
            )}
            <div className="text-muted">
              {article.publishedAt.split("T")[0]}
            </div>
            <div className="d-flex">
              {article.urlToImage && (
                <img
                  src={article.urlToImage}
                  alt={article.title}
                  width={200}
                  loading="lazy"
                />
              )}
              <div className="card-text mx-3">{content}</div>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default News;
