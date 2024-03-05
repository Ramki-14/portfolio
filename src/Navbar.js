import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";


import './Navbar.css';
import { BsSunFill } from "react-icons/bs";
import { LuMoon } from "react-icons/lu";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { GrProjects } from "react-icons/gr";
import { PiPhoneCallFill } from "react-icons/pi";

export default function Navigation() {
  
const [icon, seticon] = useState(true);
useEffect(()=>{
    const data = window.localStorage.getItem('seletTheme');
    if(data !== null)
        {seticon(JSON.parse(data))}
},[])
  
    useEffect(()=>{
       window.localStorage.setItem('seletTheme', JSON.stringify(icon)) 
if(icon=== true){
document.querySelector("body").setAttribute('class', "lightmode")
}
else{
document.querySelector("body").setAttribute('class', "darkmode")

}

    },[icon])
const Darkmode = ()=>{

    seticon(!icon)


}
const[btn, setbtn] = useState(true)
const btnchange = ()=>{
    setbtn(!btn)
    }
    const Hidebox = ()=>{
        setbtn(!btn)
    }
    
    
    
    return(
        <>        <div className='nav-head '>
           <div className= " Navbar-box">
           <div className='position-relative menu-box'>
            <div className='menubtn' onClick={btnchange}>
        { btn=== true ?  <GiHamburgerMenu /> : <RxCross2 />}
</div>
{btn ||
<div className='mobile-display' onClick={Hidebox}>
<a><Link to='/' className='mobile-screen-icon'><FaHome className='fs-1'  /> Home </Link></a>
<a><Link to='/about'  className='mobile-screen-icon'><CgProfile className='fs-1' /> About </Link></a>
<a><Link to='/project'  className='mobile-screen-icon'><GrProjects className='fs-1' /> Project </Link></a>
<a><Link to='/contact' className='mobile-screen-icon'><PiPhoneCallFill className='fs-1'/>Contact </Link></a>
</div>
}



</div>
<h1 className='logo'>{"{ram.}"}</h1>
<ul className='item-list'>
    <li className='items ' id='nav-home'><a ><Link to='/' > Home </Link></a></li>
    <li className='items' id='nav-about'><a><Link to='/about' > About </Link></a></li>
    <li className='items' id='nav-project'><a><Link to='/project' > Project</Link></a></li>
    <li className='items' id='nav-contact'><a><Link to='/contact' >Contact</Link></a></li>
</ul>
<div  className='Dark-mood' id='darkmodeid' onClick={Darkmode}  >
<div className={`icon ${icon === true ?'moveleft-icon' :'moveright-icon' }` } id='icon'>
{icon===true ? <BsSunFill />: <LuMoon />}
</div>

</div>
           </div> </div>
     
                  
                   </>
     
    
    )
   
}