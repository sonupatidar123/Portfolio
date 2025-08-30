import './About.css';

const About=()=>{
    return(
        <div id="About" className="About">
            <div className="About-title">
                <h1>About me </h1>
                {/* <img src="" alt="" /> */}
            </div>
            <div className="About-sections">
                <div className="About-left">
                    <img src="src\assets\profile.png" alt="" />
                </div>
                <div className="About-right">
                    <div className="about-para">
                        <p> i'M profeesinate about frontend development</p>
                        <p>my passion for frontent development is not only </p>
                    </div>
                    <div className="About-skills">
                        <div className="about-skill"><p>HTML & CSS </p> <hr style={{width:'50%'}}/></div>
                        <div className="about-skill"><p>React.js</p> <hr style={{width:'60%'}}/></div>
                        <div className="about-skill"><p>javaScript </p> <hr style={{width:'70%'}}/></div>
                        <div className="about-skill"><p>python</p> <hr style={{width:'60%'}}/></div>
                    </div>
                    
                </div>
            </div>
            <div className="About-achievements">
                <div className="about-achivement">
                    <h1>10+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr />
                 <div className="about-achivement">
                    <h1>7.5+</h1>
                    <p>CGPA IN COLLEGE </p>
                </div>

            </div>
        </div>
    )
}
export default About;