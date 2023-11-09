import PropTypes from 'prop-types';

export default function Sidebar({ isSidebarOpen, onClick }) {
  return (
    isSidebarOpen && (
      <aside>
        <div
          onClick={onClick}
          className="fixed inset-0 bg-black opacity-50"
        ></div>
        <div className="fixed h-full w-2/5 bg-red-500">SIDEBAR</div>
      </aside>
    )
  );
}

Sidebar.propTypes = {
  isSidebarOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
