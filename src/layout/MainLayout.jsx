import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import { NAV_LINKS } from '../router/navigationConfig'

const MainLayout = () => {
  return (
    <>
      <Navbar links={NAV_LINKS} />
        <main style={{ padding: "20px" , minHeight:"80vh"}}>
            <Outlet />
        </main>
        <Footer />
    </>
  )
}

export default MainLayout