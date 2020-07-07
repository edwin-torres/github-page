import React from 'react';
 
import './App.css';

function About() {
  return (
    <div>
     <embed src={process.env.PUBLIC_URL + '/EdwinTorresNoInfo.pdf'} width="800px" height="1000px" />
     
    </div>
  );
}

export default About;