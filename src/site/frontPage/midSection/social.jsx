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
      <a href="linkedin.com/company/hacksecureofficial">
        <i className="fab fa-linkedin" style={iconStyleOthers}></i>
      </a>

      {/* youtube */}
      <a href=" https://www.youtube.com/@hacksecureofficial">
        <i className="fab fa-youtube" style={iconStyleOthers}></i>
      </a>

      {/* twitter */}
      <a href="https://x.com/hacksecure_ ">
        <i className="fab fa-twitter" style={iconStyleOthers}></i>
      </a>

      {/* discord */}
      <a href="discord.gg/kysX4T6SwA">
        <i className="fab fa-discord" style={iconStyleOthers}></i>
      </a>

      {/* whatsapp */}
      <a href=" https://chat.whatsapp.com/KBfLSuYb6xP3Ki5yXMe0N9">
        <i className="fab fa-whatsapp" style={iconStyleOthers}></i>
      </a>
      {/* gmail section */}
      <a href="https://mail.google.com/mail/?view=cm&fs=1&to=hacksecure.official@gmail.com&su=Hello&body=Hi%20there!">
        <i className="fa fa-envelope" style={iconStyleOthers}></i>
      </a>

    </div>
  );
};

export default SocialLinks;
