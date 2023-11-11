import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import {
  AiOutlineMenu,
  AiOutlineShoppingCart,
  AiOutlineHome,
  AiOutlineShop,
} from 'react-icons/ai';

export default function Header({ onClick }) {
  return (
    <header className="flex h-[8vh] items-center bg-secondary px-6">
      <nav className="flex w-full items-center justify-between text-white">
        <button className="lg:hidden" onClick={onClick}>
          <AiOutlineMenu className="fill-tertiary text-4xl" />
        </button>
        <div className="pt-[7px] font-logoFont text-4xl">OdinShop</div>
        <div className="flex items-center justify-center gap-3">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-4xl ${
                isActive ? 'text-tertiary' : ''
              } hidden hover:text-tertiary lg:inline-block`
            }
          >
            <AiOutlineHome className="text-4xl" />
          </NavLink>
          <NavLink
            to="shop"
            className={({ isActive }) =>
              `text-4xl ${
                isActive ? 'text-tertiary' : ''
              } hidden hover:text-tertiary lg:inline-block`
            }
          >
            <AiOutlineShop className="text-4xl" />
          </NavLink>
          <NavLink
            to="cart"
            className={({ isActive }) =>
              `text-4xl ${
                isActive ? 'text-tertiary' : ''
              } hidden hover:text-tertiary lg:inline-block`
            }
          >
            <AiOutlineShoppingCart className="text-4xl" />
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

Header.propTypes = {
  onClick: PropTypes.func.isRequired,
};
