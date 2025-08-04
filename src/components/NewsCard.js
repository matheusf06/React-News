import React from 'react';

// URL de uma imagem placeholder
const FALLBACK_IMAGE_URL = 'https://placehold.co/400x200.png?text=Imagem+Indispon%C3%ADvel';

function NewsCard({ article }) {
  const { urlToImage, title, description, url, source, publishedAt } = article;

  const formattedDate = new Date(publishedAt).toLocaleDateString('pt-BR', {
    day: 'numeric', month: 'long', year: 'numeric',
  });

  // Função para lidar com erro ao carregar a imagem
  const handleImageError = (e) => {
    e.target.onerror = null; // Previne loop infinito se o fallback também falhar
    e.target.src = FALLBACK_IMAGE_URL;
  };

  return (
    <div className="news-card">
      <img
        src={urlToImage || FALLBACK_IMAGE_URL}
        alt={title}
        className="news-image"
        onError={handleImageError}
      />
      <div className="news-content">
        <h2 className="news-title">{title}</h2>
        <p className="news-description">{description || "Descrição não disponível."}</p>
        <div className="news-footer">
          <a href={url} target="_blank" rel="noopener noreferrer" className="news-link">
            Leia mais
          </a>
          <p className="news-source">
            {source.name} - {formattedDate}
          </p>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;