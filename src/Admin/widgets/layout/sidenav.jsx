import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { useMaterialTailwindController, setOpenSidenav } from "../../context";
import logoSomo from "../../../assets/img/logo.png";

export function Sidenav({ brandName = "Somofarm", routes }) {
  const [controller, dispatch] = useMaterialTailwindController();
  const { sidenavColor, sidenavType, openSidenav } = controller;
  const sidenavTypes = {
    dark: "bg-gradient-to-br from-gray-800 to-gray-900",
    white: "bg-white shadow-sm",
    transparent: "bg-transparent",
  };

  const validSidenavColor = [
    "white", "black", "blue-gray", "gray", "brown", "deep-orange", "orange", 
    "amber", "yellow", "lime", "light-green", "green", "teal", "cyan", 
    "light-blue", "blue", "indigo", "deep-purple", "purple", "pink", "red"
  ].includes(sidenavColor) ? sidenavColor : "blue-gray";

  return (
    <aside
      className={`${sidenavTypes[sidenavType]} ${
        openSidenav ? "translate-x-0" : "-translate-x-80"
      } fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0 border border-blue-gray-100`}
    >
      <div className="relative">
      <Link to="/" className="flex flex-col items-center px-8 py-6 text-center">
  <img src={logoSomo} alt="Somofarm Logo" className="w-48 h-auto mb-4" />
  <Typography
    variant="h6"
    color={sidenavType === "dark" ? "white" : "blue-gray"}
  >
    {brandName}
  </Typography>
</Link>
        <IconButton
          variant="text"
          color="white"
          size="sm"
          ripple={false}
          className="absolute top-0 right-0 grid rounded-tl-none rounded-br-none xl:hidden"
          onClick={() => setOpenSidenav(dispatch, false)}
        >
          <XMarkIcon strokeWidth={2.5} className="w-5 h-5 text-white" />
        </IconButton>
      </div>
      <div className="m-4">
        {routes.map(({ layout, title, pages }, key) => (
          <ul key={key} className="flex flex-col gap-1 mb-4">
            {title && (
              <li className="mx-3.5 mt-4 mb-2">
                <Typography
                  variant="small"
                  color={sidenavType === "dark" ? "white" : "blue-gray"}
                  className="font-black uppercase opacity-75"
                >
                  {title}
                </Typography>
              </li>
            )}
            {pages.map(({ icon, name, path }) => (
              <li key={name}>
                <NavLink 
                  to={`/${layout}${path}`}
                  className={({ isActive }) =>
                    isActive
                      ? "bg-blue-500 text-white"
                      : "text-blue-gray-700 hover:bg-blue-gray-50"
                  }
                >
                  <Button
                    variant="text"
                    color={sidenavType === "dark" ? "white" : "blue-gray"}
                    className="flex items-center gap-4 px-4 capitalize"
                    fullWidth
                  >
                    {icon}
                    <Typography
                      color="inherit"
                      className="font-medium capitalize"
                    >
                      {name}
                    </Typography>
                  </Button>
                </NavLink>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </aside>
  );
}

Sidenav.propTypes = {
  brandName: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Sidenav.displayName = "/src/widgets/layout/sidnave.jsx";

export default Sidenav;