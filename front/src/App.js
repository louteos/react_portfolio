import {SectionsContainer} from 'react-fullpage';
import Header from './component/header/Header';
import Intro from './component/intro/Intro';
import About from './component/about/About';
import Process from './component/process/Process';
import Project from './component/project/Project';
import Preinterview from './component/preinterview/PreInterview';
import Contact from './component/contact/Contact';


export default function MainPage() {
  let options = {
    anchors: ['#intro','#about', '#process', '#project', '#preinterview','#contact'],
    navigation: false,
    sectionClassName: 'section'
  };
  
  return (
    <>
    <Header></Header>
    <SectionsContainer {...options}>
      <Intro id="intro"></Intro>
      <About id="about"></About>
      <Process id="process"></Process>
      <Project id="project"></Project>
      <Preinterview id="preinterview"></Preinterview>
      <Contact id="contact"></Contact>
    </SectionsContainer>
    </>
  );
}