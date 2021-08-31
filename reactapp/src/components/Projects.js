import ReactPlayer from 'react-player';
import { Slide } from 'react-slideshow-image';
import GitHubIcon from '@material-ui/icons/GitHub';
import WebsiteIcon from '@material-ui/icons/Language';

import 'react-slideshow-image/dist/styles.css';

const slideImages = [
    'https://github.com/RMcCurdy/Bandwagon/raw/main/frontend/img/home-page-bandwagon.png',
    'https://github.com/RMcCurdy/Bandwagon/raw/main/frontend/img/landing-page-bandwagon.png',
    'https://github.com/RMcCurdy/Bandwagon/raw/main/reactapp/public/img/landingpage/games-homepage.png',
    'https://github.com/RMcCurdy/Bandwagon/raw/main/reactapp/public/img/landingpage/shop-homepage.png',
    'https://github.com/RMcCurdy/Bandwagon/raw/main/reactapp/public/img/landingpage/badges-homepage.png',
    'https://github.com/RMcCurdy/Bandwagon/raw/main/reactapp/public/img/landingpage/leaderboard-homepage.png',
];

const properties = {
    duration: 3500,
    transitionDuration: 1000,
    infinite: true,
};

const Projects = () => {
    return (
        <div id='projects' className='content-container-not-welcome'>
            <div className='projects-content'>
                <div className='content-html-tag-font'>&lt;projects&gt;</div>
                <div className='project-information-container project-bottom-margin'>
                    <div
                        className='project-title'
                        style={{ display: 'flex', alignItems: 'center' }}>
                        Bandwagon
                        <GitHubIcon
                            className='github-logo'
                            onClick={() =>
                                window.open(
                                    'https://github.com/RMcCurdy/Bandwagon',
                                    '_blank',
                                )
                            }
                            style={{
                                marginLeft: '1rem',
                                fontSize: '3rem',
                            }}
                        />
                    </div>
                    <div className='project-information'>
                        Project for Database Management class that utilizes NBA
                        Team's and Player Data to give accurate predictions for
                        the outcome of games. A web-based application using
                        ASP.NET Core 5 API, Entity Framework Core, SQLite
                        Database, and a React JS front end client.
                    </div>

                    <div>
                        <Slide easing='ease' {...properties}>
                            <div className='each-slide'>
                                <div
                                    style={{
                                        backgroundImage: `url(${slideImages[0]})`,
                                        backgroundSize: '50vw',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center',
                                    }}></div>
                            </div>
                            <div className='each-slide'>
                                <div
                                    style={{
                                        backgroundImage: `url(${slideImages[1]})`,
                                        backgroundSize: '50vw',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center',
                                    }}></div>
                            </div>
                            <div className='each-slide'>
                                <div
                                    style={{
                                        backgroundImage: `url(${slideImages[2]})`,
                                        backgroundSize: '50vw',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center',
                                    }}></div>
                            </div>
                            <div className='each-slide'>
                                <div
                                    style={{
                                        backgroundImage: `url(${slideImages[3]})`,
                                        backgroundSize: '35vw',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center',
                                    }}></div>
                            </div>
                            <div className='each-slide'>
                                <div
                                    style={{
                                        backgroundImage: `url(${slideImages[4]})`,
                                        backgroundSize: '50vw',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center',
                                    }}></div>
                            </div>
                            <div className='each-slide'>
                                <div
                                    style={{
                                        backgroundImage: `url(${slideImages[5]})`,
                                        backgroundSize: '45vw',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center',
                                    }}></div>
                            </div>
                        </Slide>
                    </div>
                    {/* https://github.com/RMcCurdy/Bandwagon */}
                </div>
                <div className='project-information-container project-bottom-margin'>
                    <div
                        className='project-title'
                        style={{ display: 'flex', alignItems: 'center' }}>
                        Skip The Books{' '}
                        <GitHubIcon
                            className='github-logo'
                            onClick={() =>
                                window.open(
                                    'https://github.com/RMcCurdy/CalgaryHacks2021',
                                    '_blank',
                                )
                            }
                            style={{
                                marginLeft: '1rem',
                                fontSize: '3rem',
                            }}
                        />
                        <WebsiteIcon
                            className='github-website-logo website-logo'
                            onClick={() =>
                                window.open(
                                    'https://duan-le.github.io/CalgaryHacks2021/',
                                    '_blank',
                                )
                            }
                            style={{
                                marginLeft: '1rem',
                                fontSize: '3.5rem',
                            }}
                        />
                    </div>
                    <div className='project-information'>
                        A web-based application that provides students utilities
                        for tracking their school schedule and ordering takeout.
                        Submission for CalgaryHacks 2021 Hackathon.
                    </div>

                    {/* https://duan-le.github.io/CalgaryHacks2021/ */}
                </div>
                <div
                    className='project-information-container project-bottom-margin'
                    style={{ display: 'flex' }}>
                    <div style={{ width: '260%' }}>
                        <div
                            className='project-title'
                            style={{ display: 'flex', alignItems: 'center' }}>
                            WaitLess{' '}
                            <GitHubIcon
                                className='github-logo'
                                onClick={() =>
                                    window.open(
                                        'https://github.com/RMcCurdy/TeamS_Project',
                                        '_blank',
                                    )
                                }
                                style={{
                                    marginLeft: '1rem',
                                    fontSize: '3rem',
                                }}
                            />
                            <WebsiteIcon
                                className='website-logo'
                                onClick={() =>
                                    window.open(
                                        'https://edmunds13.github.io/#',
                                        '_blank',
                                    )
                                }
                                style={{
                                    marginLeft: '1rem',
                                    fontSize: '3.5rem',
                                }}
                            />
                        </div>
                        <div className='project-information'>
                            A concept to improve the virtual academic advising
                            experience for students by refining a virtual line
                            up system.
                        </div>
                    </div>

                    <ReactPlayer
                        url={
                            'https://www.youtube.com/watch?v=492zDqviTfQ&t=15s'
                        }
                        playing
                        muted
                        loop
                    />

                    {/* https://edmunds13.github.io/# */}
                </div>
                <div className='project-information-container'>
                    <div
                        className='project-title'
                        style={{ display: 'flex', alignItems: 'center' }}>
                        Rob's Helper Bot{' '}
                        <GitHubIcon
                            className='github-logo'
                            onClick={() =>
                                window.open(
                                    'https://github.com/RMcCurdy/Discord-Bot',
                                    '_blank',
                                )
                            }
                            style={{
                                marginLeft: '1rem',
                                fontSize: '3rem',
                            }}
                        />
                    </div>
                    <div className='project-information'>
                        An AI that can perform a number of useful automated
                        tasks and bot commands on a Discord server.
                    </div>

                    {/* https://github.com/RMcCurdy/Discord-Bot */}
                </div>
                <div className='content-html-tag-font'>&lt;/projects&gt;</div>
            </div>
        </div>
    );
};

export default Projects;
