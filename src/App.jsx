import { Outlet } from 'react-router-dom';
import Header from './components/shared/Header/Header';
import Footer from './components/shared/Footer/Footer';
function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
