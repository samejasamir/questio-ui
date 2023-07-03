import './App.scss';
import ArticleComponent from './components/ArticleComponent/ArticleComponent';

export default function App() {
  return (
    <>
    {/* MOBILE */}
        <div className='bannerContainerMobile'>
          <div className='container'>
            <div className='row'>
              <div className='col text-center'>
                <div className='banner'>Quest.IO</div>
              </div>            
            </div>
            <div className='row'>
              <div className='col text-center'>
                <div className='disclaimer1'>
                  An experimental project to explore and demonstrate the usage of Artificial Intelligence in the finance vertical.
                </div>
                <br/>
                <div className='disclaimer2'>
                All information on this page is sourced form public sources (Internet) and <span className='disclaimer3'>none of the data and it's derivation is claimed to be accurate.</span>
                </div>
                <br/>
              </div>          
            </div>
          </div>
        </div>
    {/* DESKTOP */}
        <div className='bannerContainerDesktop'>    
          <div className='row'>
            <div className='col-auto'>
              <div className='banner'>Quest.IO</div>
            </div>
            <div className='col-auto'>
            <div className='disclaimerVerticalRule'></div>
            </div>
            <div className='col'>
              <div className='disclaimer1'>
                An experimental project to explore and demonstrate the usage of Artificial Intelligence in the finance vertical.
              </div>
              <div className='disclaimer2'>
                All information on this page is sourced form public sources (Internet) and <span className='disclaimer3'>none of the data and it's derivation is claimed to be accurate.</span>
              </div>
            </div>          
          </div>  
        </div>

        <div className='row'>
            <div className='col text-center bg-secondary-subtle'>
              <div>Module Too Long Didnt Read - Condensing Long Articles In Meaningful Short Summaries</div>
            </div>
        </div>

        <div className='articleContainer'>
          <ArticleComponent />
        </div>
    </>    
  );
}