import { Menu2 } from "tabler-icons-react";
import useLayout from "../contexts/layout";

const MenuBurger = () => {
  const { toggleShowMenu } = useLayout();
  return (
    <button
      className="w-12 h-12 flex lg:hidden items-center justify-center "
      onClick={toggleShowMenu}
    >
      <Menu2 className=""></Menu2>
      <div className="fixed top-0 w-screen"></div>
    </button>
  );
};

export default MenuBurger;
