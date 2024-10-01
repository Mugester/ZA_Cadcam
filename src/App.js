import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HomePage from './Pages/Homepage';
import Footer from './Components/Footer';
import ContactUs from './Pages/ContactUs';
import AboutUs from './Pages/AboutUs';
import AboutDetail from './Pages/AboutDetail';
import Services from './Pages/Services';
import OrderNow from './Pages/OrderNow';
import ServicesDetail from './Pages/ServicesDetail';
import Precision from './Pages/WhyChooseUsDetail/Precission';
import Craftmanship from './Pages/WhyChooseUsDetail/Craftmanship';
import Innovation from './Pages/WhyChooseUsDetail/Innovation';
import Quality from './Pages/WhyChooseUsDetail/Quality';
import ElegentDiamond from './Pages/LatestDesignDetail/ElegentDiamond';
import CustomNecklace from './Pages/LatestDesignDetail/CustomNecklace';
import VintageBrooch from './Pages/LatestDesignDetail/VintageBrooch';
import ModernBracelet from './Pages/LatestDesignDetail/ModernBracelet';
import Design from './Pages/AboutDetailRoute/Design';
import Modeling from './Pages/AboutDetailRoute/Modeling';
import Production from './Pages/AboutDetailRoute/Production';
import CadCamJewl from './Pages/AboutDetailRoute/CadCamJewl';
import WhatsAppCTA from './Components/WhatsappCta';

const App = () => {
  const location = useLocation();

  const shouldShowFooter = () => {
    const path = location.pathname;
    return path !== '/aboutus' && path !== '/services';
  };

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/aboutus/detail' element={<AboutDetail />} />
        <Route path='/services' element={<Services />} />
        <Route path='/services/detail' element={<ServicesDetail />} />
        <Route path='/ordernow' element={<OrderNow />} />
        <Route path='/precission' element={<Precision />} />
        <Route path='/craftmanship' element={<Craftmanship />} />
        <Route path='/innovation' element={<Innovation />} />
        <Route path='/quality' element={<Quality />} />
        <Route path='/diamondproject' element={<ElegentDiamond />} />
        <Route path='/necklaceproject' element={<CustomNecklace />} />
        <Route path='/broochproject' element={<VintageBrooch />} />
        <Route path='/braceletproject' element={<ModernBracelet />} />
        <Route path='/design' element={<Design />} />
        <Route path='/3dmodeling' element={<Modeling />} />
        <Route path='/production' element={<Production/>} />
        <Route path='/cadcamjewellery' element={<CadCamJewl />} />
      </Routes>
        <WhatsAppCTA/>
      {shouldShowFooter() && <Footer />}
    </div>
  );
};

const WrappedApp = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default WrappedApp;
