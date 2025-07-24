import React from 'react';


const iconStyleOthers = {
  paddingRight: '7px',
  fontSize: '20px',
  color: 'rgb(207, 200, 200)',
  marginRight: '5px',
};

const SocialLinks = () => {
  return (
    <div>
        {/* linkedin */}
      <a href="https://www.linkedin.com/in/ramit-aggarwal-66a853280/">
        <i className="fab fa-linkedin" style={iconStyleOthers}></i>
      </a>

      {/* youtube */}
      <a href="https://www.youtube.com/@NetworkChuck">
        <i className="fab fa-youtube" style={iconStyleOthers}></i>
      </a>

      {/* twitter */}
      <a href="https://x.com/RAggarwal18528">
        <i className="fab fa-twitter" style={iconStyleOthers}></i>
      </a>

      {/* discord */}
      <a href="https://discord.gg">
        <i className="fab fa-discord" style={iconStyleOthers}></i>
      </a>

      {/* whatsapp */}
      <a href="https://chat.whatsapp.com">
        <i className="fab fa-whatsapp" style={iconStyleOthers}></i>
      </a>
      {/* gmail section */}
      <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ramit.aggarwal2000@gmail.com&su=Hello&body=Hi%20there!">
        <i className="fa fa-envelope" style={iconStyleOthers}></i>
      </a>

    </div>
  );
};

export default SocialLinks;
