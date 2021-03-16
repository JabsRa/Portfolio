import React from 'react';
import Cover from './components/Cover/cover';
import NavbarComponent from "./components/Navbar/navbar";
import Loading, { loadingListener } from "./components/loader";
import InfoSection from './components/InfoSection/index'
import { homeObjOne, homeObjTwo } from './components/InfoSection/Data';
import Contact from './components/contact'
import WorkExperience from './components/workExperience'
import Fade from 'react-reveal'

const App = () => {
  React.useEffect(() => {
    loadingListener()
  }, [])
  return (
    <>
      <Loading/>
      <NavbarComponent />
      <Cover />
      <Fade left>
      <InfoSection {...homeObjOne} />
      </Fade>
      <Fade right>
        <InfoSection {...homeObjTwo} />
        </Fade>
        <WorkExperience />
        <Contact />
    </>
  );
}

export default App;