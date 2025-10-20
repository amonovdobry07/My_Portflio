import Header from "./components/header/Header"
import Nav from "./components/nav/Nav"
import About from "./components/about/About"
import Experience from "./components/experience/Experience"
import Services from "./components/services/Services"
import Portfoli from "./components/portfolio/Portfolio"
import Testemonia from "./components/testemonia/Testemonia"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"
const App = () => {
  return (
    <>
      <Header/>  
      <Nav />    
      <About /> 
      <Experience /> 
      <Services /> 
      <Portfoli /> 
      <Testemonia /> 
      <Contact /> 
      <Footer /> 
    </>
  )
};

export default App;
