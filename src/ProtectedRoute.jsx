import { Navigate, useLocation } from 'react-router-dom';
import useAuth from './useAuth';
import PropTypes from 'prop-types';

export default function ProtectedRoute({ children }) {
  const { token } = useAuth();
  const location = useLocation();

  if (!token) {
    return <Navigate to={`/login${location.pathname}`} replace />;
  }

  return children;
}

ProtectedRoute.propTypes = {
  children: PropTypes.any,
};
