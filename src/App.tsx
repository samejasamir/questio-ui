import './App.scss';
import ArticleComponent from './components/ArticleComponent/ArticleComponent';

export default function App() {
  return (
    <>
        <div className='bannerContainer'>    
          <div className='row'>      
            <div className='col-auto'>
              <div className='banner'>Quest.IO</div>
            </div>
            <div className='col-auto'>
            <div className='disclaimerVerticalRule'></div>
            </div>
            <div className='col-auto'>
              <div className='disclaimer1'>
                An experimental project to explore and demonstrate the usage of Artificial Intelligence in the finance vertical.
              </div>
              <div className='disclaimer2'>
                All information on this page is on 'as-is' basis and <span className='disclaimer3'>none of the data and it's derivation is claimed to be accurate.</span>
              </div>
            </div>          
          </div>  
        </div>
        <div className='articleContainer'>
          <ArticleComponent />
        </div>      
    </>    
  );
}