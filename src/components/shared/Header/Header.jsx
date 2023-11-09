import { AiOutlineMenu } from 'react-icons/ai';

export default function Header() {
  return (
    <header className="flex items-center px-[5vw] h-[8vh] bg-secondary">
      <nav className="flex items-center">
        <button>
          <AiOutlineMenu className="fill-tertiary text-[10vw]" />
        </button>
      </nav>
    </header>
  );
}
