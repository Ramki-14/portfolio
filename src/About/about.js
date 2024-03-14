import './about.css'
import Aboutimg from './ram.png'
import { useEffect, useState} from 'react';
import AOS from 'aos';
import { BsSendFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { IoCall } from "react-icons/io5";
import { IoIosMail, IoIosSchool } from "react-icons/io";
import img1 from "./html5.png" 
import ProgressBar from '@ramonak/react-progress-bar';
import { GrCertificate } from "react-icons/gr";
import CertificateOne from "./css-and-html.png"
import img2 from "./css-logo.png"
import img3 from "./javascript-logo.png"
import CertificateTwo from "./javascript.png"
import img4 from "./react-logo-1.png"
import img5 from "./git-logo.png"
import CertificateThree from "./git.png";
import CertificateFour from "./react.jpeg"
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import img6 from "./png-bootstrap.png";
import { FaKeyboard, FaAngleDoubleRight } from "react-icons/fa";
import { SiAdobephotoshop } from "react-icons/si";
import { VscEyeClosed } from "react-icons/vsc";


export default function About() {

        const [showbtn, setshowbtn]= useState(true);
        const [showbtnOne, setshowbtnOne]= useState(true);

        const [showbtnTwo, setshowbtnTwo]= useState(true);
        const [showbtnThree, setshowbtnThree]= useState(true);
        const [showbtnFour, setshowbtnFour]= useState(true);



  useEffect(()=>{
AOS.init({duration:'2000'});
  },[])


 const Showbutton = ()=>{
        setshowbtn(false)
  }
  const ShowbuttonOne = ()=>{
        setshowbtnOne(false)
  }
  const ShowbuttonTwo = ()=>{
        setshowbtnTwo(false)
  }
   const ShowbuttonThree = ()=>{
        setshowbtnThree(false)
  }
   const ShowbuttonFour = ()=>{
        setshowbtnFour(false)
  }

  const Cancelbutton = ()=>{
        setshowbtn(true)
  }
  const CancelbuttonOne = ()=>{
        setshowbtnOne(true)
  }
  const CancelbuttonTwo = ()=>{
        setshowbtnTwo(true)
  }
  const CancelbuttonThree = ()=>{
        setshowbtnThree(true)
  }
  const CancelbuttonFour = ()=>{
        setshowbtnFour(true)
  }
return(
        <>
        <div className="about-contant" id='About'>
                <h1 className='about-header '> ABOUT ME</h1>
 <div className='about-me'>
<div className='About-img-box'>
<img src={Aboutimg} className='About-Img' alt='About Image' />
</div>
<div className='about-Profile'>
        <p className='about-para'>
        Being crazy about programming, looking for a suitable career to utilize
         my skills and abilities to provide an effective contribution to the organization.
          And also to establish a strong professional career
         for myself and to obtain a challenging position that
          enables me to become a recognized person.
        </p>
        <div className='detaile'>
        <div className='my-details'>
        
        <p className='fw-bold'><CgProfile /> Name  &nbsp; &nbsp;<strong>:</strong></p>
        <p className=' vertical-align-middle'> Ramki S</p>
        </div>
        <div className='my-details'>
        
        <p className='fw-bold'><IoCall />  Phone  &nbsp; <strong>:</strong></p>
        <p className=' vertical-align-middle'> 8838502535</p>
        </div>
        <div className='my-details'>
        
        <p className='fw-bold'><IoIosMail /> E-Mail <strong>:</strong></p>
        <p className=' vertical-align-middle'> ramkiram2017@gmail.com</p>
        </div>

        </div>
        <buton className="cv-btn"><Link to='/contact' className=' About-btn'>Contact Me <BsSendFill /></Link></buton>
</div>
 </div>
 <div className='About-edu'>
<h1 className='text-center my-5 About-edu-header' data-aos="fade-right" data-aos-anchor-placement='top - bottom'>
        Education &amp; Experience
</h1>
<div className='Edu-Exp'>
        <div className='Education'>
      <div className='Edu-header' data-aos="fade-left" data-aos-anchor-placement='top - bottom'>  <p className='icon'><IoIosSchool /></p>
<p className='name'> EDUCATION </p>
</div>
<div className='edu-school' data-aos="fade-right" data-aos-anchor-placement='bottom-bottom'>
        <p><strong>HIGHER SECONDARY</strong></p>
        <p>AL-AMEEN HR SEC SCHOOL</p>
        <p>Somasipadi pudhur,</p>
        <p>Tiruvannamalai 606611</p>
        <p>2015-2017</p>
</div>
<div className='edu-school edu-school-2' data-aos="fade-left" data-aos-anchor-placement='bottom-bottom'>
        <p><strong>THIRUVALLUVAR UNIVERSITY</strong></p>
        <p>Bachelor Of Computer Science</p>
        <p>Goverment arts & Science Collage</p>
        <p>Tiruvannamalai 606601</p>
        <p>2017-2020</p>
</div>
<div className='edu-school edu-school-3' data-aos="fade-right" data-aos-anchor-placement='bottom-bottom'>
        <p><strong>LOGIN360 IT &amp; SOFTWARE TRAINING INSTITURE</strong></p>
        <p>Front End Developer</p>
        <p><strong>LANGUAGE :</strong>HTML, CSS, JS, Bootstrap</p>
        <p><strong>FRAME WORK : </strong> React JS</p>
        <p>5th Main Rd, Vijaya Nagar, Velachery</p>
        <p>Chennai, Tamil nadu </p>
        <p>2023</p>
</div>
      
        </div>
        <div className='Education'>
        <div className='Edu-header' data-aos="fade-left" data-aos-anchor-placement='top - bottom'>
                  <p className='icon'><IoIosSchool /></p>
<p className='name'> EXPERIENCE </p>
</div>
<div className='edu-school' data-aos="fade-right" data-aos-anchor-placement='top - center' >
<p><strong>ARTSIFY</strong>( E Commerce)</p>
<p>Social Media Handler & Product Listing</p>
<p><strong>DURATION : </strong> 6-Months </p>
<p>Thiruvannamalai, Sankarapuram, Pudhur</p>
<p>Tamil Nadu 605801</p>
<a href="https://www.artsify.in" > www.artsify.in</a>
</div>
<div className='edu-school edu-school-2' data-aos="fade-left" data-aos-anchor-placement='bottom-bottom'>
        <p><strong>FREELANCING PROJECT</strong></p>
        <p>Design Static Website For Statue Shop</p>
        <p className="text-center"><strong>Technology Using : </strong> HTML, CSS, JS, Bootstrap </p>
        <p><strong> Designing Software : </strong> Photoshop</p>
<a href="https://www.bronzecreative.in" > www.bronzecreative.in</a>
        
</div>

        </div>
</div>
<div className='my-skills mt-5'  data-aos="fade-right" data-aos-anchor-placement='top-bottom'>
<h1 className='about-skill about-header ' ><span>MY</span> SKILLS</h1>
</div>
<div className='skill-box'>
<div className='tec-skill'>
<h3 data-aos="fade-right" data-aos-anchor-placement='top-bottom' >Technical Skills</h3>


<div className='tec-skill-list'>
<div className='html-box' data-aos="fade-right" data-aos-anchor-placement='top-bottom'>
        <div className='d-flex gap-3'>
<img src={img1} className='html-img' />
<p>HTML</p></div>
<ProgressBar completed={80} maxCompleted={100}
 height='8px'
 width='80%'
//  className='bar-size'
//  barContainerClassName='progress-bar-border'
  bgColor='var(--contant)' 
  labelAlignment='outside' 
  labelColor='var(--color)'
   animateOnRender={true} />
   <div className='d-flex gap-2'>
   <button className='certificat' onClick={Showbutton}> View Certification  <GrCertificate /></button>
<button className={`cancel certificat ${showbtn === true ? 'hidediv': 'showdiv'  }`} onClick={Cancelbutton}>Close  <VscEyeClosed /></button>
</div>
</div>
<div className='view-box'>
<img  src={CertificateOne} className={`certificate-1 ${showbtn === true ? 'hidediv': 'showdiv'  }`}  />
</div>
</div>
     
     {/* 2nd skill */}

     <div className='tec-skill-list'>
<div className='html-box' data-aos="fade-right" data-aos-anchor-placement='top-bottom'>
<div className='d-flex gap-3'>
<img src={img2} className='html-img' />
<p>CSS</p></div>
<ProgressBar completed={85} maxCompleted={100}
 height='8px'
 width='80%'
//  className='bar-size'
//  barContainerClassName='progress-bar-border'
  bgColor='var(--contant)' 
  labelAlignment='outside' 
  labelColor='var(--color)'
   animateOnRender={true} />
   <div className='d-flex gap-2'>

   <button className='certificat' onClick={ShowbuttonOne}> View Certification  <GrCertificate /></button>
<button className={`cancel certificat ${showbtnOne === true ? 'hidediv': 'showdiv'  }`} onClick={CancelbuttonOne}>Close   <VscEyeClosed /></button>
</div>
</div>
<div className='view-box'>
<img  src={CertificateOne} className={`certificate-1 ${showbtnOne === true ? 'hidediv': 'showdiv'  }`}  />
</div>
</div>
   
     {/* 3rd skill */}

     <div className='tec-skill-list'>
<div className='html-box' data-aos="fade-right" data-aos-anchor-placement='top-bottom'>
<div className='d-flex gap-3'>
<img src={img3} className='html-img' />
<p>JAVA SCRIPT</p></div>
<ProgressBar completed={75} maxCompleted={100}
 height='8px'
 width='80%'
//  className='bar-size'
//  barContainerClassName='progress-bar-border'
  bgColor='var(--contant)' 
  labelAlignment='outside' 
  labelColor='var(--color)'
   animateOnRender={true} />
   <div className='d-flex gap-2'>

   <button className='certificat' onClick={ShowbuttonTwo}> View Certification  <GrCertificate /></button>
<button className={`cancel certificat ${showbtnTwo === true ? 'hidediv': 'showdiv'  }`} onClick={CancelbuttonTwo}> Close   <VscEyeClosed /></button>
</div></div>
<div className='view-box'>
<img  src={CertificateTwo} className={`certificate-1 ${showbtnTwo === true ? 'hidediv': 'showdiv'  }`}  />
</div>
</div>

{/* 4th skill */}

<div className='tec-skill-list'>
<div className='html-box' data-aos="fade-right" data-aos-anchor-placement='top-bottom'>
<div className='d-flex gap-3'>
<img src={img4} className='html-img' />
<p>REACT JS</p></div>
<ProgressBar completed={70} maxCompleted={100}
 height='8px'
 width='80%'
//  className='bar-size'
//  barContainerClassName='progress-bar-border'
  bgColor='var(--contant)' 
  labelAlignment='outside' 
  labelColor='var(--color)'
   animateOnRender={true} />
   <div className='d-flex gap-2'>
   <button className='certificat' onClick={ShowbuttonThree}> View Certification  <GrCertificate /></button>
<button className={`cancel certificat ${showbtnThree === true ? 'hidediv': 'showdiv'  }`} onClick={CancelbuttonThree}> Close   <VscEyeClosed /></button>
</div></div>
<div className='view-box'>
<img  src={CertificateFour} className={`certificate-1 ${showbtnThree === true ? 'hidediv': 'showdiv'  }`}  />
</div>
</div>

{/* 5th skill */}

<div className='tec-skill-list'>
<div className='html-box' data-aos="fade-right" data-aos-anchor-placement='top-bottom'>
<div className='d-flex gap-3'>
<img src={img5} className='html-img' />
<p>GIT & GITHUB</p></div>
<ProgressBar completed={60} maxCompleted={100}
 height='8px'
 width='80%'
//  className='bar-size'
//  barContainerClassName='progress-bar-border'
  bgColor='var(--contant)' 
  labelAlignment='outside' 
  labelColor='var(--color)'
   animateOnRender={true} />
   <div className='d-flex gap-2'>
   <button className='certificat' onClick={ShowbuttonFour}> View Certification  <GrCertificate /></button>
<button className={`cancel certificat ${showbtnFour === true ? 'hidediv': 'showdiv'  }`} onClick={CancelbuttonFour}> Close   <VscEyeClosed /></button>
</div></div>
<div className='view-box'>
<img  src={CertificateThree} className={`certificate-1 ${showbtnFour === true ? 'hidediv': 'showdiv'  }`}  />
</div>
</div>

        </div>

{/* professional skills */}


        <div className='pro-skill'>
<h3 data-aos="fade-left" data-aos-anchor-placement='top-bottom'> Professional Skills</h3>
<div className='pro-box'> 
<div className='pro-box-1'>
        <div  data-aos="zoom-in-right" data-aos-anchor-placement='bottom-bottom'  style={{width:'100px', height:'100px'}}>
        <CircularProgressbarWithChildren value={75} strokeWidth={8} styles={buildStyles({
                textColor:"var(--color)",
                pathColor:"var(--contant)",         })}>
<div style={{fontSize:'20px', }}>
        <strong>75%</strong>
</div>
        </CircularProgressbarWithChildren>
        <p className='mt-3 text-center'><strong>Creativity</strong></p>
         </div>

         <div  data-aos="zoom-in-left" data-aos-anchor-placement='bottom-bottom'  style={{width:'100px', height:'100px'}}>
        <CircularProgressbarWithChildren value={65} strokeWidth={8} styles={buildStyles({
                textColor:"var(--color)",
                pathColor:"var(--contant)",         })}>
<div style={{fontSize:'20px', }}>
        <strong>65%</strong>
</div>
        </CircularProgressbarWithChildren>
        <p className='mt-3 text-center'><strong>communication</strong></p>
         </div> 
      
</div>

{/* profestional box two */}

<div className='pro-box-1'>
        <div  data-aos="zoom-in-right" data-aos-anchor-placement='bottom-bottom'  style={{width:'100px', height:'100px'}}>
        <CircularProgressbarWithChildren value={80} strokeWidth={8} styles={buildStyles({
                textColor:"var(--color)",
                pathColor:"var(--contant)",         })}>
<div style={{fontSize:'20px', }}>
        <strong>80%</strong>
</div>
        </CircularProgressbarWithChildren>
        <p className='mt-3 text-center'><strong>Problem Solving</strong></p>
         </div>

         <div  data-aos="zoom-in-left" data-aos-anchor-placement='bottom-bottom'  style={{width:'100px', height:'100px'}}>
        <CircularProgressbarWithChildren value={85} strokeWidth={8} styles={buildStyles({
                textColor:"var(--color)",
                pathColor:"var(--contant)",         })}>
<div style={{fontSize:'20px', }}>
        <strong>85%</strong>
</div>
        </CircularProgressbarWithChildren>
        <p className='mt-3 text-center'><strong>Team Work</strong></p>
         </div> 
      
</div>

</div>


<h3 className='mt-5' data-aos="fade-left" data-aos-anchor-placement='top-bottom'> Additional Skills</h3>
<div className='additional-skill-box' > 
<div className='add-skill'  data-aos="fade-right" data-aos-anchor-placement='top-bottom'>
<img src={img6} className='html-img' />
<p>BOOTSTRAP</p> 
</div>

<div className='add-skill'  data-aos="fade-left" data-aos-anchor-placement='top-bottom'>
<FaKeyboard  className='fs-4'/>
<p>TYPING JUNIOR</p> 
</div>

<div className='add-skill'  data-aos="fade-right" data-aos-anchor-placement='top-bottom'>
<SiAdobephotoshop className='fs-4'/>
<p>PHOTOSHOP (Basics)</p> 
</div>
</div>

</div>

   
</div>

 </div>
 
 <div className='next-page' data-aos="fade-right" data-aos-anchor-placement='top-bottom'>
<div className='about-btn'><a>
<Link to="/Project">Project Page <FaAngleDoubleRight /></Link>
</a></div></div> 
 
 
 
        </div>
    
        </>
    )    
    }
