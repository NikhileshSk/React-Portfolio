
import './App.css';
import { Routes,Route } from 'react-router-dom';
import HomePage from './containers/HomePage/HomePage';
import AboutPage from './containers/AboutPage/AboutPage';
import SkillsPage from './containers/SkillsPage/SkillsPage';
import PortfolioPage from './containers/PortfolioPage/PortfolioPage';
import ContactPage from './containers/ContactPage/ContactPage';
import ResumePage from './containers/ResumePage/ResumePage';
import NavBar from './components/Navbar/NavBar';
;

function App() {
 
  return (
    <div className="App">
      {/* NavBar */}
      <NavBar/>
     
      

      {/* Main Page Contents */}
      <Routes>
        <Route index path='/' element={<HomePage/>} />
        <Route index path='/AboutPage' element={<AboutPage/>} />
        <Route index path='/SkillsPage' element={<SkillsPage/>} />
        <Route index path='/PortfolioPage' element={<PortfolioPage/>} />
        <Route index path='/ContactPage' element={<ContactPage/>} />
        <Route index path='/ResumePage' element={<ResumePage/>} />
      </Routes>


      
    </div>
    
  );
}

export default App;
