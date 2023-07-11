import React from 'react'
import me  from '../../assets/sakthi photo.jpg';
import {FaAward}  from 'react-icons/fa';
import {AiFillFolder}  from 'react-icons/ai';
import {FaGraduationCap}  from 'react-icons/fa';

import './About.css';

const 
About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About me</h2>
      <div className='container_about_container'>
        <div className='abount_me'>
          <img src={me} alt=" " className="img-sak-about"/>
        </div>
     
        <div className='about_content'>
        <div className='about_card_one'>
       <div className='about_card_inner'>
          
          <article className='about_card'>
             <FaAward className='app-icons' />
               <h5>Experience</h5>
              <small>6 month of tech Experience in a startup  (Turbocomply)</small>

          </article>
         <article className='about_card'>
              <AiFillFolder className='app-icons'/>
             <h5>Project</h5>
             <small>Did more project in webdev, <br />dataanalysis using python, <br /> basic ml project</small>

          </article>
           <article className='about_card'>
              <FaGraduationCap className='app-icons'/>
              <h5>Bachelor of Engineering<br />(Electronics and Communication Engineering)</h5>
              <small>College:Mepco Schlenk Engineering College </small>

          </article>
           </div>
           <div className='paragrahsakthi'>
            <div className='paragrahsakthi_1'>
           <p>
             With my technical skillset and experience, I am good in 
              frontend <br /> and
             backend technologies, allowing me to create high-performance <br/> 
             web applications with a strong emphasis on code quality and robustness.

          </p>
          </div>
          <a href="#contact" className='btn-primary'>Let's Talk</a>
           </div>
        </div>
       </div>
   
      </div>
    </section>
  )
}

export default About


// import React from 'react'
// import me  from '../../assets/sakthi photo.jpg';
// import {FaAward}  from 'react-icons/fa';
// import {AiFillFolder}  from 'react-icons/ai';
// import {FaGraduationCap}  from 'react-icons/fa';

// import './About.css';

// const 
// About = () => {
//   return (
//     <section id='about'>
//       <h5 className='h5'>Get To Know</h5>
//       <h2>About me</h2>
//       <div className='container_about_container'>
//         <div className='abount_me'>
//           <img src={me} alt=" " className="img-sak-about"/>
//         </div>
     
//       <div className='about_content'>
//         <div className='about_card_one'>
//         <div className='about_card_inner'>
          
//           <article className='about_card'>
//               <FaAward className='app-icons' />
//               <h5>Experience</h5>
//               <small>6 month of tech Experience in a startup  (Turbocomply)</small>

//           </article>
//           <article className='about_card'>
//               <AiFillFolder className='app-icons'/>
//               <h5>Project</h5>
//               <small>Did more project in webdev, <br />dataanalysis using python, <br /> basic ml project</small>

//           </article>
//           <article className='about_card'>
//               <FaGraduationCap className='app-icons'/>
//               <h5>Bachelor of Engineering<br />(Electronics and Communication Engineering)</h5>
//               <small>College:Mepco Schlenk Engineering College </small>

//           </article>
//           </div>
//           <div>
//           <p>
//             With my technical skillset and experience, I am proficient in various <br/>
//              frontend and
//             backend technologies, allowing me to create high-performance <br/> 
//             web applications with a strong emphasis on code quality and robustness.
//           </p>
//           <a href="#contact" className='btn-primary'>Let's Talk</a>
//           </div>
//         </div>
//       </div>
//       </div>
//     </section>
//   )
// }

// export default About
