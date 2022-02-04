import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';

const Layout = () => (
  <div style={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
    <Header />
    <div style={{ flex: 1 }}>
      <Outlet />
    </div>
    <Footer />
  </div>
);

export default Layout;
