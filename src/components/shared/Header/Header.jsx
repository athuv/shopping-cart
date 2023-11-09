import { AiOutlineMenu, AiOutlineShoppingCart } from 'react-icons/ai';

export default function Header() {
  return (
    <header className="flex h-[8vh] items-center bg-secondary px-[5vw]">
      <nav className="flex w-full items-center justify-between text-white">
        <button>
          <AiOutlineMenu className="fill-tertiary text-[8vw]" />
        </button>
        <div className="pt-[7px] font-logoFont text-[8vw]">OdinShop</div>
        <button>
          <AiOutlineShoppingCart className="text-[8vw]" />
        </button>
      </nav>
    </header>
  );
}
