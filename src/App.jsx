import { Route, Routes } from 'react-router-dom'
import './App.scss'
import { useDarkMode } from '@rbnd/react-dark-mode';
import { useEffect } from 'react';
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'
import CheckoutPage from './pages/CheckoutPage'
import FavoritePage from './pages/FavoritePage'
import CatalogPage from './pages/CatalogPage'
import ErrorPage from './pages/ErrorPage'
import ContactsPage from './pages/ContactsPage'
import DeliveryPage from './pages/DeliveryPage'
import AboutPage from './pages/AboutPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import ProfilePage from './pages/ProfilePage'
import OrderPage from './pages/OrderPage'
import SearchPage from './pages/SearchPage'
import ResetPassword from './pages/ResetPassword'

function App() {

  const { mode } = useDarkMode();

  useEffect(() => {
    const root = window.document.documentElement;
    if (mode === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [mode]);

  return (
    <>
      <Routes>
        <Route path='/' element={ <HomePage/> } />
        <Route path='/product' element={ <ProductPage/> } />
        <Route path='/cart' element={ <CartPage/> } />
        <Route path='/checkout' element={ <CheckoutPage/> } />
        <Route path='/favorite' element={ <FavoritePage/> } />
        <Route path='/catalog' element={ <CatalogPage/> } />
        <Route path='/error' element={ <ErrorPage/> } />
        <Route path='/contact' element={ <ContactsPage/> } />
        <Route path='/delivery' element={ <DeliveryPage/> } />
        <Route path='/about' element={ <AboutPage/> } />
        <Route path='/policy' element={ <PrivacyPolicyPage/> } />
        <Route path='/profile' element={ <ProfilePage/> } />
        <Route path='/order' element={ <OrderPage/> } />
        <Route path='/search' element={ <SearchPage/> } />
        <Route path='/reset' element={ <ResetPassword/> } />
      </Routes>
    </>
  )
}

export default App
