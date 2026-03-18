import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import { NAV_LINKS } from '../router/navigationConfig'

const MainLayout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar links={NAV_LINKS} />
      <main className="flex-1 p-5">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout