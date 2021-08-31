import GithubLogo from '../img/githubLogo.png';
import WebsiteLogo from '../img/websiteLogo.png';

const Projects = () => {
    return (
        <div id='projects' className='content-container-not-welcome'>
            <div className='projects-content'>
                <div className='content-html-tag-font'>&lt;projects&gt;</div>
                <div className='project-information-container project-bottom-margin'>
                    <div className='project-title'>Bandwagon</div>
                    <div className='project-information'>
                        A web-based application using ASP.NET Core 5 API, Entity
                        Framework Core, SQLite Database, and a React JS front
                        end client.
                    </div>
                    <div className='project-link'>
                        <img
                            src={GithubLogo}
                            alt='Github Logo'
                            className='github-website-logo'
                            onClick={() =>
                                window.open(
                                    'https://github.com/RMcCurdy/Bandwagon',
                                    '_blank',
                                )
                            }
                        />
                    </div>
                    {/* https://github.com/RMcCurdy/Bandwagon */}
                </div>
                <div className='project-information-container project-bottom-margin'>
                    <div className='project-title'>Skip The Books</div>
                    <div className='project-information'>
                        A web-based application that provides students utilities
                        for tracking their school schedule and ordering takeout.
                        Submission for CalgaryHacks 2021 Hackathon.
                    </div>
                    <div className='project-link'>
                        <img
                            src={GithubLogo}
                            alt='Github Logo'
                            className='github-website-logo'
                            onClick={() =>
                                window.open(
                                    'https://github.com/RMcCurdy/CalgaryHacks2021',
                                    '_blank',
                                )
                            }
                        />
                        <img
                            src={WebsiteLogo}
                            alt='Website Logo'
                            className='github-website-logo'
                            onClick={() =>
                                window.open(
                                    'https://duan-le.github.io/CalgaryHacks2021/',
                                    '_blank',
                                )
                            }
                        />
                    </div>
                    {/* https://duan-le.github.io/CalgaryHacks2021/ */}
                </div>
                <div className='project-information-container project-bottom-margin'>
                    <div className='project-title'>WaitLess</div>
                    <div className='project-information'>
                        A concept to improve the virtual academic advising
                        experience for students by refining a virtual line up
                        system.
                    </div>
                    <div className='project-link'>
                        <img
                            src={GithubLogo}
                            alt='Github Logo'
                            className='github-website-logo'
                            onClick={() =>
                                window.open(
                                    'https://github.com/RMcCurdy/TeamS_Project',
                                    '_blank',
                                )
                            }
                        />
                        <img
                            src={WebsiteLogo}
                            alt='Website Logo'
                            className='github-website-logo'
                            onClick={() =>
                                window.open(
                                    'https://edmunds13.github.io/#',
                                    '_blank',
                                )
                            }
                        />
                    </div>
                    {/* https://edmunds13.github.io/# */}
                </div>
                <div className='project-information-container'>
                    <div className='project-title'>Rob's Helper Bot</div>
                    <div className='project-information'>
                        An AI that can perform a number of useful automated
                        tasks and bot commands on a Discord server.
                    </div>
                    <div className='project-link'>
                        <img
                            src={GithubLogo}
                            alt='Github Logo'
                            className='github-website-logo'
                            onClick={() =>
                                window.open(
                                    'https://github.com/RMcCurdy/Discord-Bot',
                                    '_blank',
                                )
                            }
                        />
                    </div>
                    {/* https://github.com/RMcCurdy/Discord-Bot */}
                </div>
                <div className='content-html-tag-font'>&lt;/projects&gt;</div>
            </div>
        </div>
    );
};

export default Projects;
