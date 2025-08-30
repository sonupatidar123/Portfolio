import './Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll';
function Hero() {
    return (
        <div id="Home" className="Hero">
           <div  className="profile"><img src="src\assets\profile.png" alt="profile_image" /></div> 
            <h1><span>I'am sonu patidar</span>,frontend developer based in india.</h1>
            <p>I am a passionate Frontend Developer from Mandsaur with strong skills in building responsive, user-friendly, and modern web applications.</p>
            <div className="Hero-action">
                <div className="Hero-connect"><AnchorLink className="anchor-link" offset={50} href="#Contact">Connect with me</AnchorLink></div>
                <div className="Hero-resume">my Resume </div>
            </div>
        </div>
    )
}
export default Hero;