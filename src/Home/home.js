import './home.css'
import { FaDownload } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import profile from "./portfolio.png"
import Resume from "./resume.pdf"
import { FaAngleDoubleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Home() {
// Home
return(
    <>
    <section className='Home' id='home'>
    <div className='Home-sci'>
<a href='#'><FaXTwitter /></a>
<a href='https://github.com/Ramki-14' target='blank'><FaGithub /></a>
<a href='https://www.linkedin.com/in/ramki-ram-019256279?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='blank'><FaLinkedinIn /></a>

    </div>
<div className="Home-contant">
            <h1>Hi, I'M Ramki</h1>
<h3>Frontend Developer</h3>
<p>A passionate Front End React.js Developer based in Chennai, TamilNadu.</p>
{/* <p>Being crazy about programming, looking for a suitable career to utilize my skills and abilities to privide an effective contribution to the organization.
 And also to establish a strong prifessional career for myself and to obtain a challenging position that enables 
 me to become a reconized person.</p> */}
 <a href={Resume} download="Ramki-Resume" className='cv-btn'>Download CV <FaDownload className='text-dark' /></a>
    </div>
    <div className='Home-img'>
<div className='animation-circle'>
<span></span>
<span></span>
    <div className='pro-img'>
        <img src={profile} alt='Profile' />
    </div>
</div>
    </div>
</section>
<div className='next-page'>
<div className='about-btn'><a>
<Link to="/about">About Page <FaAngleDoubleRight /></Link>
</a></div></div>
    </>
)    
}