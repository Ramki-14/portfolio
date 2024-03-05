import './project.css'
import { FaLink } from "react-icons/fa6";
import { useEffect} from 'react';
import AOS from 'aos';
import { Link } from 'react-router-dom';
import { FaAngleDoubleRight } from "react-icons/fa";



export default function Project() {


    useEffect(()=>{
        AOS.init({duration:'2000'});
          },[])
        

    return(
        <>
        <div className="project-content" id='Project'>
        
        <div className='my-skills' >
<h1 className='about-skill about-header project-header ' ><span>MY</span> PROJECTS</h1>
</div>
<div className='project-1'>
<iframe src='https://bronzecreative.in/' width='80%' height='300' style={{margin:'0px auto' }}>
</iframe>
<div >
<h1 style={{color:'var(--contant)'}}>STATIC WEBSITE (Freelancer) </h1>
<p className='description'> This is my first Freelanceing Project. I did Completed my work in less than 2 weeks With responsive media query    </p>
<p><strong>USING LANGUAGES : </strong> HTML, CSS, JAVASCRIPT</p>
<p><strong>FRAMEWORKS : </strong> Bootsrap</p>
<p><strong>TOOLS : </strong> VS Code, Photo Shop</p>
<a href='https://bronzecreative.in/' target=' blank'> <FaLink /> Visit Website</a>
</div>

</div>

{/* Project two */}

<div  className='project-2' data-aos="fade-left" >

<div className='project-2-details'>
<h3  style={{color:'var(--contant)'}}>BASICS EDUCATION WEBSITE </h3>
<p className='description'> This is my Showcase project in learning institute   </p>
<p><strong>USING LANGUAGES : </strong> HTML, CSS </p>
<p><strong>FRAMEWORKS : </strong> Bootsrap</p>
<p><strong>TOOLS : </strong> VS Code, Photo Shop</p>
<a href='https://ramki-14.github.io/Education/' target=' blank'> <FaLink /> Visit Website</a>
</div>
<iframe className=' .project-2-frame' src='https://ramki-14.github.io/Education/' width='90%' height='300' style={{margin:'0px auto' }}>
</iframe>
</div>

{/* project three */}

<div className='project-3'  data-aos="fade-right"  >
<iframe src='https://ramki-14.github.io/age-calculater/' width='80%' height='300' style={{margin:'0px auto' }}>
</iframe>
<div >
<h1  style={{color:'var(--contant)'}}> AGE CALCULATER </h1>
<p><strong>USING LANGUAGES : </strong> HTML, CSS, JAVASCRIPT</p>
<p><strong>FRAMEWORKS : </strong> Bootsrap</p>
<p><strong>TOOLS : </strong> VS Code </p>
<a href='https://ramki-14.github.io/age-calculater/' target=' blank'> <FaLink /> Visit Website</a>
</div>

</div>

<div className='next-page' data-aos="fade-right" data-aos-anchor-placement='top-bottom'>
<div className='about-btn'><a>
<Link to="/contact">Contact Page <FaAngleDoubleRight /></Link>
</a></div></div> 
        </div>

        </>
    )    
    }