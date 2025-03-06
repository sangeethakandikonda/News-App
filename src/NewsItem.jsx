import React from "react";

const placeholderImage = "/img.jpg"; // ✅ Direct reference since it's in public/

const NewsItem = ({ title, description, src, url }) => {
    return (
        <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{ maxWidth: "345px" }}>
            <img 
                src={src && src !== "null" ? src : placeholderImage} 
                alt="News" 
                className="card-img-top" 
                style={{ height: "200px", width: "330px", objectFit: "cover" }} 
                onError={(e) => e.target.src = placeholderImage} // Fallback if API image fails
            />
            <div className="card-body">
                <h5 className="card-title">
                    {title ? title.slice(0, 50) : "No Title Available"}
                </h5>
                <p className="card-text">
                    {description ? description.slice(0, 90) : "No description available. Click below for more details."}
                </p>
                <a href={url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                    Read More
                </a>
            </div>
        </div>
    );
};

export default NewsItem;
