import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Home';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/instagram" render={() => window.location.assign("https://www.instagram.com/jc_aka_jonathan")}/>
      <Route exact path="/facebook" render={() => window.location.assign("https://www.facebook.com/jc_aka_jonathan")}/>
      <Route exact path="/twitter" render={() => window.location.assign("https://www.twitter.com/jc_aka_jonathan")}/>
      <Route exact path="/youtube" render={() => window.location.assign("https://www.youtube.com/channel/UC8LbWhRatemS-LBINZgU-6Q")}/>
      <Route exact path="/spotify" render={() => window.location.assign("https://open.spotify.com/artist/2tpI9V9v6nG6Gy6C3lwljb?si=l3DWhsR5R4-Jlu9Zx74i1w")}/>
      <Route exact path="/apple-music" render={() => window.location.assign("https://music.apple.com/us/artist/jonathan-crawford/1128644948")}/>
      <Route exact path="/medium" render={() => window.location.assign("https://medium.com/@jc_aka_jonathan")}/>
      <Route exact path="/mixcloud" render={() => window.location.assign("https://www.mixcloud.com/jc_aka_jonathan/")}/>
    </Switch>
  </BrowserRouter>
);



export default App;
