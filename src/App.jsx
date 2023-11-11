import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/shared/Header/Header';
import Footer from './components/shared/Footer/Footer';
import Sidebar from './components/shared/Sidebar/Sidebar';
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function handleMenuClick() {
    isSidebarOpen ? setIsSidebarOpen(false) : setIsSidebarOpen(true);
  }

  return (
    <>
      <Header onClick={handleMenuClick} />
      <main>
        <Sidebar isSidebarOpen={isSidebarOpen} onClick={handleMenuClick} />
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
