import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import axios from "axios";

function NewsList() {
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9);
  const cardHeight = 200;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/top-headlines/sources?apiKey=9c42440d595145f986d3701de15fee0d"
        );
        setNews(response.data.sources);
        console.log(response.data.sources);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = news.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentItems.map((article) => (
          <Link
            to={`/article/${article.id}`}
            key={article.id}
            className="text-decoration-none"
          >
            <div
              className="bg-white p-4 rounded h-full flex flex-col border border-gray-300 shadow-md hover:shadow-lg transition duration-300"
              style={{ height: `${cardHeight}px` }}
            >
              <h2 className="text-xl font-bold mb-2 flex-grow">
                {article.name}
              </h2>
              <p className="text-gray-700">{article.description}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex align-center justify-center mt-4">
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={news.length}
          currentPage={currentPage}
          paginate={paginate}
        />
      </div>
    </div>
  );
}

export default NewsList;
