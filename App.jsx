import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Analytics from './pages/Analytics';
import Posts from './pages/Posts';
import Settings from './pages/Settings';

function App() {
  const [activePage, setActivePage] = useState('dashboard');

  // Simulate fetching data from an API
  useEffect(() => {
    console.log('Fetching data...');
  }, []);

  const renderPage = () => {
    switch (activePage) {
      case 'dashboard':
        return <Dashboard />;
      case 'analytics':
        return <Analytics />;
      case 'posts':
        return <Posts />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="app">
      <Navbar />
      <div className="container">
        <Sidebar setActivePage={setActivePage} />
        <main className="main-content">
          {renderPage()}
        </main>
      </div>
    </div>
  );
}

export default App;