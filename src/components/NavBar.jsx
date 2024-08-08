import MenuButton from "./Menu/MenuButton";

const NavBar = ({ onSectionChange, isMenuOpened, setIsMenuOpened }) => {
  return (
    <nav className="fixed top-0 left-0 z-20 w-full px-20 py-8">
      <div className="container flex items-center justify-between mx-auto">
        <div className="flex items-center">
          <img
            src="/src/assets/logo.png"
            alt="logo"
            className="h-8 cursor-pointer"
          />
        </div>
        <MenuButton
          onSectionChange={onSectionChange}
          isMenuOpened={isMenuOpened}
          setIsMenuOpened={setIsMenuOpened}
        />
      </div>
    </nav>
  );
};

export default NavBar;
