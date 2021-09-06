import './styles/styles.css';
import Logo from './img/mylogo1024.png';
import Welcome from './components/Welcome';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

function App() {
    return (
        <>
            <Sidebar />
            <div className='portfolio-background'>
                <div>
                    <img
                        className='portfolio-logo-absolute logo-fade-in'
                        src={Logo}
                        alt='RM logo'
                    />
                </div>
                <Welcome />
                <Projects />
                <Skills />
                <About />
                <Contact />
            </div>

            <Footer />
        </>
    );
}

export default App;
