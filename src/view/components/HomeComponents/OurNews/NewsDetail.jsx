import React from 'react';
import { useParams } from 'react-router-dom';
import { newsData } from './OurNews';

const NewsDetail = () => {
    const { id } = useParams();
    const newsItem = newsData.find((item) => item.id === parseInt(id));

    if (!newsItem) {
        return <div>News not found!</div>;
    }

    return (
        <div className="news-detail-container container my-5 w-75">
            <h2 className='heading-font text-center'>{newsItem.title}</h2>
            <img src={newsItem.image} alt={newsItem.title} className="w-100 my-4" />
            <p className=''>{newsItem.description}</p>
        </div>

    );
};

export default NewsDetail;
