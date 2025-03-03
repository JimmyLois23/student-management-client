import { useState } from "react";
import { Link } from "react-router-dom";
import ClickOutside from "../ClickOutside";

const DropdownUser = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const name = localStorage.getItem("name");
  const type = localStorage.getItem("type");

  return (
    <ClickOutside onClick={() => setDropdownOpen(false)} className="relative">
      <Link
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-4"
        to="#"
      >
        <span className="text-right lg:block">
          <span className="block text-sm font-medium text-black dark:text-white">
            Welcome - {name ? name : type}
          </span>
        </span>
      </Link>
    </ClickOutside>
  );
};

export default DropdownUser;
