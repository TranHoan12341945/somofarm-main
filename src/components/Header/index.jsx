import { useState } from 'react';
import { Link } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';
import logoSomo from "../../assets/img/logo.png"; // Đường dẫn đúng với cấu trúc dự án của bạn

export function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="bg-white shadow-md">
      <header className="container flex items-center justify-between h-24 max-w-6xl px-4 mx-auto">
        <Link to="/">
          <img src={logoSomo} alt="Logo" className="h-16" />
        </Link>
        <nav className="flex-grow">
          <ul className="flex justify-end gap-6">
            <li className="relative group">
              <Link
                to="/"
                className="text-sm font-semibold text-gray-800 hover:text-green-600 transition duration-300"
              >
                TRANG CHỦ
              </Link>
              <span className="absolute left-0 bottom-0 w-0 h-1 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="relative group">
              <ScrollLink
                to="destaques"
                smooth={true}
                duration={500}
                className="text-sm font-semibold text-gray-800 hover:text-green-600 transition duration-300 cursor-pointer"
              >
                GIỚI THIỆU
              </ScrollLink>
              <span className="absolute left-0 bottom-0 w-0 h-1 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="relative group">
              <button
                onClick={toggleDropdown}
                className="text-sm font-semibold text-gray-800 hover:text-green-600 transition duration-300"
              >
                DỊCH VỤ <span className="ml-1">&#9662;</span>
              </button>
              {dropdownOpen && (
                <ul className="absolute left-0 w-40 p-2 mt-2 bg-white border border-gray-200 rounded shadow-lg">
                  <li>
                    <Link
                      to="/room-list"
                      className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                    >
                      Đặt phòng
                    </Link>
                  </li>
                  {/* <li>
                    <Link
                      to="/cancellation"
                      className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                    >
                      Hủy phòng
                    </Link>
                  </li> */}
                </ul>
              )}
              <span className="absolute left-0 bottom-0 w-0 h-1 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
            </li>
            {/* <li className="relative group">
              <Link
                to="/admin"
                className="text-sm font-semibold text-gray-800 hover:text-green-600 transition duration-300"
              >
                Admin
              </Link>
              <span className="absolute left-0 bottom-0 w-0 h-1 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="relative group">
              <Link
                to="/auth/sign-in"
                className="text-sm font-semibold text-gray-800 hover:text-green-600 transition duration-300"
              >
                Sign in
              </Link>
              <span className="absolute left-0 bottom-0 w-0 h-1 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
            </li> */}
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
