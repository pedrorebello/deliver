import './styles.css';
import { ReactComponent as MainImage } from './main.svg';
import Footer from '../Footer';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
    <div className="home-container">
      <div className="home-content">
        <div className="home-actions">
          <h1 className="home-title">
            Make your order, <br/> 
            we deliver at <br/> 
            your doorstep!!!
          </h1>
          <h3 className="home-subtitle">
            Choose your order and you will <br/> 
            receive it in a few minutes!
          </h3>
          <Link className="home-btn-order" to="/orders">
            ORDER HERE
          </Link>
        </div>
        <div className="home-image">
          <MainImage />
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default Home;
