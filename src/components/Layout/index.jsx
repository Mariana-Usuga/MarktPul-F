import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';

const Layout = () => (
  <div>
    <Header />
    <Outlet />
    <Footer style={{ top: 95 }} />
  </div>
);

export default Layout;
