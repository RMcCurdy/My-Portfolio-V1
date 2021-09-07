import ReactRotatingText from 'react-rotating-text';

const Skills = () => {
    return (
        <div id='skills' className='content-container-not-welcome'>
            <div className='skills-content content-height'>
                {/* Skills content */}
                <div className='content-html-tag-font'>&lt;skills&gt;</div>
                <div className='skills-words'>
                    <div style={{ marginBottom: '2rem' }}>
                        My coding experience started in 2017 when I learned
                        Java. From there, I learned Python when I started my
                        first year at University. After that, I found my passion
                        to be in coding with JavaScript and the React framework
                        where I in turn also learned HTML and CSS.
                    </div>
                    I have experience using{' '}
                    <span style={{ color: 'hsl(13, 89%, 50%)' }}>
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
                                // 'Graphic Design',
                                // 'MS Office',
                            ]}
                        />
                    </span>
                </div>
                <div className='content-html-tag-font'>&lt;/skills&gt;</div>
            </div>
        </div>
    );
};

export default Skills;
