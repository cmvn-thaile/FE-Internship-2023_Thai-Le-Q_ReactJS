
import { Outlet } from 'react-router-dom';
import Header from './shared/components/Header';
import Footer from './shared/components/Footer';
import { useCart } from './shared/hook/useCart';

const Layout = () => {
  const { setCartData, handleQuantity, handleDeleteCart } =
    useCart();
  return (
    <>
      <Header/>
      <Outlet context={{ setCartData, handleQuantity, handleDeleteCart }}/>
      <Footer />
    </>
  );
};

export default Layout;
