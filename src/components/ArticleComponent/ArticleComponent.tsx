import React, { FC } from 'react';
import './ArticleComponent.scss';

interface ArticleComponentProps {}

const ArticleComponent: FC<ArticleComponentProps> = (props) => (  
  <div className="cardContainer">
    <div className="card-body">
      <h5 className="card-title">Will US Slip in Recession in 2023?</h5>
      <h6 className="card-subtitle mb-2 text-body-secondary">Source: StringZ Solutions</h6>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" className="badge badge-primary">Primary</a><br/>
      <a href="#" className="card-link">https://stringzsolutions.com/324/23/234/234sd/ff/</a>
    </div>
  </div>
);

export default ArticleComponent;
