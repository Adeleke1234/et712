import React from 'react';
import ReactDOM from 'react-dom/client';

// import all images
import avataruser1 from './images/david.png'
import avataruser2 from './images/lekes.png'
import avataruser3 from './images/matter.png'

// import JS files
import User_feedback from './user_feedback';
import './index.css'
import User from './comments'

const App = function(){
  return(
    <>
    <h1 style={{textAlign:"center"}}>ADELEKE ATUNBI</h1>
    <section className='container'>

      {/* user 1 */}
      <User_feedback username="David"><User image={avataruser1} date="11/12/24" msg="I am David"/></User_feedback>
      
      {/* user 2 */}
      <User_feedback username="Lekes"><User image={avataruser2} date="10/31/24" msg="I need more sleep"/></User_feedback>
      
      {/* user 3 */}
      <User_feedback username="Matter"><User image={avataruser3} date="12/05/24" msg="GREAT JOB"/></User_feedback>
     
     
     </section>
     </>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

