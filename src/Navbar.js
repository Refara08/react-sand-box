const Navbar = () => {
  const testClick = (e) => {
    console.log("testing ....");

    e.preventDefault();
  };

  return (
    <nav
      id="navbar"
      className="navbar font-poppins flex justify-between items-center p-4 w-[90%] mx-auto"
    >
      <a href="/" onClick={testClick}>
        <h1 className="font-semibold text-3xl">refara.code</h1>
      </a>
      <div className="links">
        <a href="/">About</a>
        <a href="/">Feature</a>
        <a href="/">Package</a>
      </div>
    </nav>
  );
};

export default Navbar;
