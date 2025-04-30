function Header() {
  return (
    <header className="text-gray-700 border-b border-gray-200">
      <div className="container flex p-5 flex-col md:flex-row items-center">
        <a
          href="#"
          aria-label="Homepage" // <a> をロゴに使うなら aria-label を追加
          className="font-medium text-gray-900 mb-4 md:mb-0"
        >
          <h1 className="text-xl ml-3">Yosei Suzuki</h1>
        </a>
        <nav className="md:ml-auto text-base" aria-label="Main Navigation">
          <a
            href="#home"
            className="mr-5 hover:underline duration-300"
            aria-current="page"
          >
            Home
          </a>
          <a href="#portfolio" className="mr-5 hover:underline duration-300">
            Portfolio
          </a>
          <a href="#about" className="mr-5 hover:underline duration-300">
            About
          </a>
          <a href="#contact" className="hover:underline duration-300">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
