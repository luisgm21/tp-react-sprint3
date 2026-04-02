import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import CartModal from '../components/featureMovies/CartModal'
import { NAV_LINKS } from '../router/navigationConfig'
import { useAppContext } from '../context/AppContext'

const MainLayout = () => {
  const { cartItems, isCartOpen, openCart, closeCart, removeFromCart } = useAppContext()

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-100">
      <Navbar
        links={NAV_LINKS}
        cartCount={cartItems.length}
        onOpenCart={openCart}
      />
      <main className="flex-1 p-5">
        <Outlet />
      </main>
      <Footer />
      <CartModal
        isOpen={isCartOpen}
        items={cartItems}
        onClose={closeCart}
        onRemoveItem={removeFromCart}
      />
    </div>
  )
}

export default MainLayout