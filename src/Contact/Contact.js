import './Contact.css'
import { FaMapLocationDot, FaPhone } from "react-icons/fa6";
import { RiMailSendLine } from "react-icons/ri";
import { IoIosMail } from "react-icons/io";
import { useState } from 'react';
import { useEffect} from 'react';
import AOS from 'aos';


export default function Contact() {

    useEffect(()=>{
        AOS.init({duration:'2000'});
          },[])

const [Val, setValue] = useState("");


const ChangeVal = event =>{
    setValue(event.target.value)
}


    return(
        <>
        <div className="Contact-content" id='Contact'>
<h1 className='about-skill about-header ' > CONTACT <span>ME</span> </h1>
        <div className='contact-info'>
<div className='address-info'>
    <div className='address-box'  data-aos="fade-right">
<FaMapLocationDot className="iconsize" />
<div >
<h3>CURRENT ADDRESS  </h3>
 <p className='address-size' style={{width:'300px'}} >17/10, 1st Street, Sathya Nagar, 
    Ekkattuthangal,
    Chennai 6000032</p>

</div>
</div>

<div className='address-box'  data-aos="fade-right">
<FaPhone className="iconsize"/>
<div>
<h3> PHONE </h3>
 <p >+91 8838502535 <br />
 +91 9597107412
     </p>

</div>
</div>


<div className='address-box'  data-aos="fade-right" data-aos-anchor-placement='top-bottom'>
<IoIosMail className="iconsize" />
<div>
<h3> E-MAIL </h3>
 <p > ramkiram2017@gmail.com </p>

</div>
</div>


</div>
<div className='text-box'  data-aos="fade-left">
<textarea type='text' value={Val} onChange={ChangeVal} style={{width:'90%', height:'200px', border:'none', padding:'10px', borderRadius:'20px' }} placeholder='Contact for Mail'/>
<div className='next-page mt-4 mail-btn'>
{/* //  data-aos="fade-right" data-aos-anchor-placement='top-bottom' */}
<div className='about-btn' ><a href={`mailto:ramkiram2017@gmail.com?Subject=Feedback&Body=${Val}`}>
Send Mail <RiMailSendLine />
</a></div></div>
</div>

{/* */}
        </div>


        </div>
    
        </>
    )    
    }