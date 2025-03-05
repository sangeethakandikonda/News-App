import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {  
    const { category: urlCategory } = useParams();
    const [articles, setArticles] = useState([]);

    useEffect(() => {

        const newsCategory = urlCategory || category || "general";
        const API_URL = `https://newsapi.org/v2/top-headlines?country=us&category=${newsCategory}&apiKey=${import.meta.env.VITE_API_KEY}`;

        fetch(API_URL)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                if (data.articles) {
                    setArticles(data.articles);
                } else {
                    console.error("No articles found in API response", data);
                }
            })
            .catch((error) => console.error("Error fetching news:", error));
    }, [urlCategory, category]);  

    return (
        <div>
            <h2 className="text-center">
                Latest <span className="badge bg-danger">News</span>
            </h2>
            {articles.length > 0 ? (
                articles.map((news, index) => (
                    <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
                ))
            ) : (
                <p className="text-center">No news available</p>
            )}
        </div>
    );
};

export default NewsBoard;
