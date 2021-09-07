import GitHubIcon from '@material-ui/icons/GitHub';
import WebsiteIcon from '@material-ui/icons/Language';
import YouTubeIcon from '@material-ui/icons/YouTube';

const Projects = () => {
    return (
        <div id='projects' className='content-container-not-welcome'>
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
                    Team's and Player Data to give accurate predictions for the
                    outcome of games. A web-based application using ASP.NET Core
                    5 API, Entity Framework Core, SQLite Database, and a React
                    JS front end client.
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
                    A web-based application that provides students utilities for
                    tracking their school schedule and ordering takeout.
                    Submission for CalgaryHacks 2021 Hackathon. This application
                    uses JavaScript, HTML, CSS, Bootstrap, and MongoDB.
                </div>

                {/* https://duan-le.github.io/CalgaryHacks2021/ */}
            </div>
            <div className='project-information-container project-bottom-margin'>
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
                    <YouTubeIcon
                        className='website-logo'
                        onClick={() =>
                            window.open(
                                'https://www.youtube.com/watch?v=492zDqviTfQ',
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
                    A mobile application concept to improve the virtual academic
                    advising experience for students by refining a virtual line
                    up system. User Research, Flow Analysis, Affinity Diagrams,
                    and a Cognitive Walkthrough were completed before designing
                    both a Low-Fidelity prototype and a High-Fidelity prototype.
                    Adobe XD was used to create the final demo.
                </div>
            </div>
            <div className='project-information-container project-bottom-margin'>
                <div
                    className='project-title'
                    style={{ display: 'flex', alignItems: 'center' }}>
                    NFT Creation
                    <WebsiteIcon
                        className='website-logo'
                        onClick={() =>
                            window.open('https://opensea.io/Rajon', '_blank')
                        }
                        style={{
                            marginLeft: '1rem',
                            fontSize: '3.5rem',
                        }}
                    />
                </div>
                <div className='project-information'>
                    A passion project to mint NFT's within the OpenSea
                    peer-to-peer marketplace. My goal was to learn about the NFT
                    space and do so by creating and selling my own NFT's.
                </div>
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
                    An AI that can perform a number of useful automated tasks
                    and bot commands on a Discord server. The Bot AI operates on
                    JavaScript and runs off a local machine.
                </div>

                {/* https://github.com/RMcCurdy/Discord-Bot */}
            </div>
            <div className='content-html-tag-font'>&lt;/projects&gt;</div>
        </div>
    );
};

export default Projects;
