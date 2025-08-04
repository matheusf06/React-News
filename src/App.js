import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import Header from './components/Header';
import NewsCard from './components/NewsCard';
import ScrollToTopButton from './components/ScrollToTopButton';

export default function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1); // Estado para controlar a página
  const [hasMore, setHasMore] = useState(true); // Estado para saber se há mais artigos para carregar

  useEffect(() => {
    const fetchNews = async () => {
      // Começa o carregamento apenas para novas páginas
      if (page > 1) setLoading(true);

      try {
        const apiKey = process.env.REACT_APP_NEWS_API_KEY;
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=tesla&sortBy=publishedAt&pageSize=12&page=${page}&apiKey=${apiKey}`
        );
        
        // Adiciona os novos artigos à lista existente
        setArticles(prevArticles => [...prevArticles, ...response.data.articles]);
        
        // Verifica se o total de resultados foi alcançado
        if (articles.length + response.data.articles.length >= response.data.totalResults) {
          setHasMore(false);
        }

      } catch (err) {
        setError('Ocorreu um erro ao buscar as notícias. Verifique a chave da API e a conexão.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [page]); // O efeito é re-executado sempre que a 'page' muda

  return (
    <div className="App">
      <Header />
      <main className="content-container">
        {error && <p className="error-message">{error}</p>}
        
        <div className="news-grid">
          {articles.map((article, index) => (
            // Usar uma combinação de url e title para a key é mais robusto
            <NewsCard key={`${article.url}-${index}`} article={article} />
          ))}
        </div>
        
        {loading && <p className="status-message">Carregando notícias...</p>}
        
        {!loading && hasMore && (
          <div className="load-more-container">
            <button onClick={() => setPage(prevPage => prevPage + 1)} className="load-more-button">
              Carregar Mais
            </button>
          </div>
        )}
        
        {!loading && !hasMore && articles.length > 0 && (
          <p className="status-message">Você chegou ao fim das notícias.</p>
        )}

      </main>
      <ScrollToTopButton />
    </div>
  );
}