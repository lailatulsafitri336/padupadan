import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Inspiration from './components/Inspiration';
import Custom from './components/Custom';
import { CustomizationalProvider } from './contexts/Customization';
import CameraPage from './components/CameraPage';
const App = () => {
  return (
    <div className='container'>
      <Router>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/Inspiration' component={Inspiration} exact />
          <Route path='/Custom' exact>
            <CustomizationalProvider>
              <Custom />
            </CustomizationalProvider>
          </Route>
          <Route path='/camera' component={CameraPage} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
