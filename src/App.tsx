import React from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';

import { Index as Home } from './app/pages/home';
import { Index as Cart } from './app/pages/cart';
import Layout from './Layout';
import { ModalContext } from './shared/context/modalContext';
import { useSelector } from 'react-redux';

function App() {
  const [isShowModal, setIsShowModal] = React.useState(false);
  const userData = useSelector(
    (state: { auth: { users: any } }) => state.auth.users
  );

  return (
    <ModalContext.Provider value={{ isShowModal, setIsShowModal }}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/cart"
            element={
              userData.length !== 0 ? <Cart /> : <Navigate to="/" replace />
            }
          />
        </Route>
      </Routes>
    </ModalContext.Provider>
  );
}

export default App;
