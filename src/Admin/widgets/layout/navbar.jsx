import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  Navbar as MTNavbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  Input,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon, BellIcon, UserCircleIcon } from "@heroicons/react/24/outline";

export function Navbar({
  brandName = "SOMOFARM",
  routes,
  action = (
    <a
      href="https://www.creative-tim.com/product/material-tailwind-dashboard-react"
      target="_blank"
    >
      <Button variant="gradient" size="sm" fullWidth>
        free download
      </Button>
    </a>
  ),
}) {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {routes.map(({ name, path, icon }, index) => (
        <Typography
          key={`${name}-${path}-${index}`} // Ensure uniqueness by combining name, path, and index
          as="li"
          variant="small"
          color="blue-gray"
          className="capitalize"
        >
          <Link to={path} className="flex items-center gap-1 p-1 font-normal">
            {icon &&
              React.createElement(icon, {
                className: "w-[18px] h-[18px] opacity-50 mr-1",
              })}
            {name}
          </Link>
        </Typography>
      ))}
    </ul>
  );

  return (
    <MTNavbar className="p-3">
      <div className="container flex items-center justify-between mx-auto text-blue-gray-900">
        <Link to="/">
          <Typography
            variant="h6"
            className="mr-4 ml-2 cursor-pointer py-1.5 font-bold"
          >
            {brandName}
          </Typography>
        </Link>
        <div className="items-center flex-1 hidden gap-4 lg:flex">
          {navList}
          <Input type="search" placeholder="Search" className="mx-4 lg:inline-block" />
        </div>
        <div className="items-center hidden gap-2 lg:flex">
          <IconButton variant="text" size="sm">
            <BellIcon className="w-5 h-5" />
          </IconButton>
          <IconButton variant="text" size="sm">
            <UserCircleIcon className="w-5 h-5" />
          </IconButton>
        </div>
        <IconButton
          variant="text"
          size="sm"
          className="ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon strokeWidth={2} className="w-6 h-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="w-6 h-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className="container mx-auto">
          {navList}
          <div className="flex items-center gap-2 mt-4">
            <Input type="search" placeholder="Search" className="w-full" />
            <IconButton variant="text" size="sm">
              <BellIcon className="w-5 h-5" />
            </IconButton>
            <IconButton variant="text" size="sm">
              <UserCircleIcon className="w-5 h-5" />
            </IconButton>
          </div>
          {React.cloneElement(action, {
            className: "w-full block lg:hidden mt-4",
          })}
        </div>
      </Collapse>
    </MTNavbar>
  );
}

Navbar.propTypes = {
  brandName: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  action: PropTypes.node,
};

Navbar.displayName = "/src/widgets/layout/navbar.jsx";

export default Navbar;
