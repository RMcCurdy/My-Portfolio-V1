import React from 'react';

const Projects = () => {
    return (
        <div className='content-container'>
            <div className='projects-content'>
                <div className='content-html-tag-font'>&lt;projects&gt;</div>
                <div className='project-information-container project-bottom-margin'>
                    <div className='project-title'>Bandwagon</div>
                    <div className='project-information'>A web-based application using ASP.NET Core 5 backend API, Entity Framework Core, a SQLite backend database, and a React JS front end client.</div>
                    <div className='project-link'>Visit Github Repo</div>
                    {/* https://github.com/RMcCurdy/Bandwagon */}
                </div>
                <div className='project-information-container project-bottom-margin'>
                    <div className='project-title'>Skip The Books</div>
                    <div className='project-information'>A web-based application that provides students utilities for tracking their school schedule and ordering takeout.</div>
                    <div className='project-link'>Visit Website</div>
                    {/* https://duan-le.github.io/CalgaryHacks2021/ */}
                </div>
                <div className='project-information-container project-bottom-margin'>
                    <div className='project-title'>WaitLess</div>
                    <div className='project-information'>A concept to improve the virtual academic advising experience for students by refining a virtual line up system.</div>
                    <div className='project-link'>Visit Website</div>
                    {/* https://edmunds13.github.io/# */}
                </div>
                <div className='project-information-container'>
                    <div className='project-title'>Rob's Helper Bot</div>
                    <div className='project-information'>An AI that can perform a number of useful automated tasks and bot commands on a Discord server.</div>
                    <div className='project-link'>Visit Github repo</div>
                    {/* https://github.com/RMcCurdy/Discord-Bot */}
                </div>
                <div className='content-html-tag-font'>&lt;/projects&gt;</div>
            </div>
        </div>
    );
};

export default Projects;
