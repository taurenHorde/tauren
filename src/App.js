import { Routes, Route, Router, useLocation } from 'react-router-dom'
import './App.css';
import PortfolioWrap from './component/Portfolio';
import ProfileWrap from './component/Profile';
import ProjectpageWrap from './component/ProjectPage';
import { useEffect } from 'react';

function App() {

  return (

    <div className="App">
      <div className='containWrap'>
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={<>
              <PortfolioWrap />
              <ProfileWrap />
            </>} />
          <Route
            path="/@project/:id"
            element={<>
              <ProjectpageWrap />
            </>} />
        </Routes>
      </div>
      <div className='footer'>
        <div className='footerWarp'>
          <div className='footerTitle'>
            <h6>도유현의 포트폴리오</h6>
          </div>
          <div className='footercontent'>
            <p>010-5650-8323</p>
            <p>dyh910@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}


function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null;
}

export default App;
