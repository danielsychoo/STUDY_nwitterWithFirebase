import React, { useEffect, useState } from 'react';
import { FIREBASE_AUTH } from 'config/firebase';
import { Switch, Route } from 'react-router-dom';
import { Navigation } from 'components';
import { Home, Auth, Profile, EditProfile } from 'routes';
import { useToggle } from 'hooks';

function App() {
  const { isOn, setIsOn } = useToggle();
  const [test, setTest] = useState(false);

  useEffect(() => {
    FIREBASE_AUTH.onAuthStateChanged(auth => {
      {
        auth ? setIsOn(true) : setIsOn(false);
        setTest(true);
      }
    });
  }, []);

  return (
    <div>
      {test ? (
        <>
          {isOn && <Navigation />}
          <Switch>
            <Route exact path="/" render={() => (isOn ? <Home /> : <Auth />)} />
            <Route path="/myProfile" component={Profile} />
            <Route path="/editProfile" component={EditProfile} />
          </Switch>
        </>
      ) : (
        <div>false</div>
      )}
    </div>
  );
}

export default App;
