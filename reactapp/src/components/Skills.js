import ReactRotatingText from 'react-rotating-text';

const Skills = () => {
    return (
        <div id='skills' className='content-container-not-welcome'>
            <div className='skills-content content-height'>
                {/* Skills content */}
                <div className='content-html-tag-font'>&lt;skills&gt;</div>
                <ReactRotatingText
                    items={[
                        'React',
                        'JavaScript',
                        'HTML',
                        'CSS',
                        'SQL',
                        'Python',
                        'Java',
                        'LaTeX',
                        'Graphic Design',
                        'MS Office',
                    ]}
                />
                {/* <p>React.js</p>
                <p>JavaScript</p>
                <p>HTML</p>
                <p>CSS</p> */}
                <div className='content-html-tag-font'>&lt;/skills&gt;</div>
            </div>
        </div>
    );
};

export default Skills;
