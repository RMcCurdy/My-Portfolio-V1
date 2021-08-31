const About = () => {
    return (
        <div id='about' className='content-container-not-welcome'>
            <div className='about-content content-height'>
                {/* About header */}
                <div className='content-html-tag-font'>&lt;about&gt;</div>
                {/* About content */}
                <div className='about-words'>
                    I'm a University Student studying at the University of
                    Calgary. I'm pursuing a BSc in Computer Science with a
                    concentration in Software Engineering. I have a passion for
                    Full-Stack Web Development and plan on pursuing this after I
                    complete my degree.
                </div>
                <div className='content-html-tag-font'>&lt;/about&gt;</div>
            </div>
        </div>
    );
};

export default About;
