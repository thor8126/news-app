
import React from 'react';
import { useParams } from 'react-router-dom';

function ArticleDetail({ news }) {
  const { id } = useParams();
  const article = news.find((article) => article.id === id);

  if (!article) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{article.name}</h1>
      <p className="text-gray-700 mb-4">{article.description}</p>
    </div>
  );
}

export default ArticleDetail;
