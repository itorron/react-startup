import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import DetailsView from '../screens/DetailsView/DetailsView';
import ListView from '../screens/ListView/ListView';

function NavigationStack() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ListView />} />
        <Route path="/detailsView" element={<DetailsView />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default NavigationStack;
