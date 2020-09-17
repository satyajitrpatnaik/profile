import React from 'react';

import './styles.css';

function Home() {
  return (
    <div className="profile">
      <div>
        <img className="profile-image" 
          src={process.env.PUBLIC_URL + "/profile.jpg"} />
      </div>
      <div>summary with github and linkedin links</div>
    </div>
  )
}

export default Home
