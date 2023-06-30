import React, { useEffect, useState } from 'react';
import ArticlesService from '../../services/ArticlesService';
import './ArticleComponent.scss';

export default function ArticleComponent(){

  const [articles, setArticles] = useState<Array<any>>([]);

  useEffect(()=>{
    ArticlesService.getAllArticles()
    .then((res) => {
      setArticles(res.data)
    })
  }, []);
  
  return (
    <div className='row'>
    {
      articles.map((article, index)=>(        
         <div className="cardContainer">
          <div className="card-body">
            <h5 className="card-title">Title not available</h5>
            {/* <h6 className="card-subtitle mb-2 text-body-secondary">Source: {article.mediaHouse}</h6> */}
            <p className="card-text">{article.articleSummary}</p>
            <h6 className="badgeCategory">{article.articleCategory}</h6>
            <h6 className="badgeSource">{article.mediaHouse}</h6><br/>
            <a href={article.articleURL} className="card-link" target='window'>{article.articleURL}</a>
          </div>
        </div>
      ))
    }
    </div>
  );

}

