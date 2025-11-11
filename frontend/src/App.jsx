// App.jsx
import { useEffect } from 'react'
import './App.css'
import Homepage from './components/Homepage';
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/login'
import Navbar from './pages/Navbar';
import { useUserStore } from './stores/useUserStore';
import Hero from './pages/Hero';
import { Toaster } from 'react-hot-toast';
import AddTask from './pages/AddTask';

export default function App() {
    const { checkAuth, user, isCheckingAuth } = useUserStore();
      const location = useLocation();
    useEffect(() => {
        console.log('App - Initial auth check');
        checkAuth();
    }, [checkAuth]);

    console.log('App render - user:', user);
    console.log('App render - isCheckingAuth:', isCheckingAuth);
     const hideNavbarPaths = ['/', '/signup'];

    if (isCheckingAuth) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div>Loading...</div>
            </div>
        );
    }

    return (
        <div>
     {!hideNavbarPaths.includes(location.pathname) && <Navbar />}
            <Routes>
                <Route path="/signup" element={!user ? <Signup /> : <Navigate to='/task' />} />
                  <Route path="/addTask" element={!user ? <Signup /> : <AddTask />} />
                <Route path="/" element={!user ? <Login /> : <Navigate to='/task' />} />
                <Route
                    path='/task'
                    element={user ? <Hero /> : <Navigate to='/' />}
                />
            </Routes>
            <Toaster />
        </div>
    );
}
