import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Index as Home } from './app/pages/home';
import { Index as Cart } from './app/pages/cart';
import Layout from './Layout';
// import Error from './shared/components/Error';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/cart" element={<Cart />} />\
        {/* <Route path='/error' element= {<Error/>} /> */}
      </Route>
    </Routes>
  );
}

export default App;
