import './styles/styles.css';
import Logo from './img/mylogo1024.png';
import Welcome from './components/Welcome.js';
import Projects from './components/Projects.js';
import Skills from './components/Skills.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Sidebar from './components/Sidebar.js';
// import HamburgerMenu from './components/HamburgerMenu';

function App() {
    return (
        <>
            <Sidebar />
            <div
                className='portfolio-background'
                style={{ paddingLeft: '4rem' }}>
                <div>
                    <img
                        className='portfolio-logo-absolute logo-fade-in'
                        src={Logo}
                        alt='RM logo'
                    />
                    {/* <Sidebar/> */}
                </div>
                <Welcome />
                <Projects />
                <Skills />
                <About />
                <Contact />
            </div>

            <div className='portfolio-footer-container'>
                <footer>
                    {' '}
                    <small>
                        Copyright &copy; 2021 | Robert McCurdy | All Rights
                        Reserved
                    </small>{' '}
                </footer>
            </div>
        </>
    );
}

export default App;
