import React from 'react'

import './styles/Subscribe.css'


const Subscribe = () => (
  <div id="subscribe">
    <div id="mc_embed_signup">
      <form action="https://jonathancrawford.us19.list-manage.com/subscribe/post?u=14d1c5eee82ed133405c8b273&amp;id=f902199287" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
      <div id="mc_embed_signup_scroll">
        <h2>Stay in touch!</h2>
        <input type="email" name="EMAIL" className="email" id="mce-EMAIL" placeholder="EMAIL ADDRESS" required/>
      {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
        <div style={{'position': 'absolute', 'left': '-5000px'}} aria-hidden="true">
          <input type="text" name="b_14d1c5eee82ed133405c8b273_f902199287" tabIndex="-1"/>
        </div>
        <div className="clear">
          <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="button"/>
        </div>
      </div>
      <p>jonathan@jonathancrawford.us</p>
      </form>

    </div>
  </div>
)


export default Subscribe
