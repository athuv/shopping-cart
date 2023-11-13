import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem('authToken') || null);
  const navigate = useNavigate();

  const login = (authToken, previousPage) => {
    setToken(authToken);
    localStorage.setItem('authToken', authToken);
    navigate(previousPage, { replace: true });
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem('authToken');
    navigate('/', { replace: true });
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

AuthProvider.propTypes = {
  children: PropTypes.any,
};
