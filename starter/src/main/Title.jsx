import React from 'react';
import {Link} from 'react-router-dom';

const Title = () => {
  return (
    <div className="top-bar-title">
     <Link to="/"><h1>a STAR WARS Fansite</h1></Link>
    </div>
  );
}

export default Title;
