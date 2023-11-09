import { AiOutlineCloseCircle } from 'react-icons/ai';
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
            <AiOutlineCloseCircle
              onClick={onClick}
              className="hover:text-tertiary"
            />
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
