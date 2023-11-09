import { Link } from 'react-router-dom';
import {
  AiOutlineCloseCircle,
  AiOutlineHome,
  AiOutlineShop,
} from 'react-icons/ai';
import PropTypes from 'prop-types';

export default function Sidebar({ isSidebarOpen, onClick }) {
  return (
    isSidebarOpen && (
      <aside>
        <div
          onClick={onClick}
          className="fixed inset-0 bg-black opacity-50"
        ></div>
        <div className=" fixed h-full w-[280px] bg-primary p-3">
          <div className="flex justify-end text-4xl">
            <button>
              <AiOutlineCloseCircle
                onClick={onClick}
                className="hover:text-tertiary"
              />
            </button>
          </div>
          <div className="flex flex-col gap-3 pt-2">
            <div className="group">
              <Link
                to="/"
                className="flex items-center justify-start gap-3 text-xl group-hover:text-tertiary"
              >
                <AiOutlineHome /> Home
              </Link>
            </div>
            <div className="group">
              <Link
                to="shop"
                className="flex items-center justify-start gap-3 text-xl group-hover:text-tertiary"
              >
                <AiOutlineShop className="hover:text-tertiary" /> Shop
              </Link>
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
