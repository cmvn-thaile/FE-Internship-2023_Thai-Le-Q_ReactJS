import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Index as Home } from './app/pages/home';
import { Index as Cart } from './app/pages/cart';
import Layout from './Layout';
import { ModalContext } from './shared/context/modalContext';

function App() {
  const [isShowModal, setIsShowModal] = React.useState(false);

  return (
    <ModalContext.Provider value={{ isShowModal, setIsShowModal }}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </ModalContext.Provider>
  );
}

export default App;
