import './styles/styles.css';
import Logo from './img/mylogo.png';

function App() {
  return (
    <>
      <div className="portfolio-background">
        <img className="portfolio-logo-absolute" src={Logo} alt="RM logo"/>
        <div className="content-container">
            
        </div>
      </div>

      <div className="portfolio-footer-container">
        <footer> <small>Copyright &copy; 2021 | Robert McCurdy | All Rights Reserved</small> </footer> 
      </div>
    </>
  );
}

export default App;
