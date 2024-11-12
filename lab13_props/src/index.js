import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import User from './comments'
// import all images
import avataruser1 from './images/david.png'
import avataruser2 from './images/lekes.png'
import avataruser3 from './images/matter.png'
const App = function(){
  return(
    <>
    <h1 style={{textAlign:"center"}}>ADELEKE ATUNBI</h1>
     <section className='container'>
      <User image={avataruser1} name="David" date="11/12/24" msg="I am David"/>
      <User image={avataruser2} name="Lekes" date="10/31/24" msg="I need more sleep"/>
      <User image={avataruser3} name="Matter" date="10/16/24" msg="GREAT JOB!"/>
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

