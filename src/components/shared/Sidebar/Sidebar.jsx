import { NavLink } from 'react-router-dom';
import { useAuth } from '../../../AuthProvider';
import {
  AiOutlineCloseCircle,
  AiOutlineHome,
  AiOutlineShop,
  AiOutlineShoppingCart,
  AiOutlineLogin,
  AiOutlineLogout,
} from 'react-icons/ai';
import PropTypes from 'prop-types';

export default function Sidebar({ isSidebarOpen, onClick }) {
  const { token, logout } = useAuth();

  return (
    isSidebarOpen && (
      <aside>
        <div
          onClick={onClick}
          className="fixed inset-0 bg-black opacity-50"
        ></div>
        <div className="fixed top-0 h-full w-[280px] bg-primary p-3">
          <div className="flex items-center justify-end text-center text-4xl">
            <NavLink
              className="w-full self-center text-center font-logoFont text-xl"
              to="/"
              onClick={onClick}
            >
              OdinShop
            </NavLink>
            <button>
              <AiOutlineCloseCircle
                onClick={onClick}
                className="hover:text-tertiary"
              />
            </button>
          </div>
          <div className="flex flex-col gap-3 pt-2">
            <div className="group">
              {token ? (
                <NavLink
                  to="#"
                  onClick={() => {
                    onClick();
                    logout();
                  }}
                  className={({ isActive }) =>
                    `flex items-center justify-start gap-3 text-xl ${
                      isActive ? 'text-tertiary' : ''
                    } group-hover:text-tertiary`
                  }
                >
                  <AiOutlineLogout /> Logout
                </NavLink>
              ) : (
                <NavLink
                  to="login"
                  onClick={onClick}
                  className={({ isActive }) =>
                    `flex items-center justify-start gap-3 text-xl ${
                      isActive ? 'text-tertiary' : ''
                    } group-hover:text-tertiary`
                  }
                >
                  <AiOutlineLogin /> Login / Signup
                </NavLink>
              )}
            </div>
            <div className="group">
              <NavLink
                to="cart"
                onClick={onClick}
                className={({ isActive }) =>
                  `flex items-center justify-start gap-3 text-xl ${
                    isActive ? 'text-tertiary' : ''
                  } group-hover:text-tertiary`
                }
              >
                <AiOutlineShoppingCart /> Cart
              </NavLink>
            </div>
            <div className="group">
              <NavLink
                to="/"
                onClick={onClick}
                className={({ isActive }) =>
                  `flex items-center justify-start gap-3 text-xl ${
                    isActive ? 'text-tertiary' : ''
                  } group-hover:text-tertiary`
                }
              >
                <AiOutlineHome /> Home
              </NavLink>
            </div>
            <div className="group">
              <NavLink
                to="shop"
                onClick={onClick}
                className={({ isActive }) =>
                  `flex items-center justify-start gap-3 text-xl ${
                    isActive ? 'text-tertiary' : ''
                  } group-hover:text-tertiary`
                }
              >
                <AiOutlineShop className="hover:text-tertiary" /> Shop
              </NavLink>
            </div>
          </div>
        </div>
      </aside>
    )
  );
}

Sidebar.propTypes = {
  isSidebarOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
