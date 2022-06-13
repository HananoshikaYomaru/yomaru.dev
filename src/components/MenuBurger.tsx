import { Menu2 } from "tabler-icons-react";
import { XIcon } from "@heroicons/react/solid";

import useLayout from "../contexts/layout";

const MenuBurger = () => {
  const { toggleShowMenu, realShowMenu } = useLayout();
  return (
    <button
      className="w-12 h-12 flex lg:hidden items-center justify-center "
      onClick={toggleShowMenu}
    >
      {realShowMenu ? (
        <XIcon className="w-6 h-6"></XIcon>
      ) : (
        <Menu2 className=""></Menu2>
      )}
    </button>
  );
};

export default MenuBurger;
