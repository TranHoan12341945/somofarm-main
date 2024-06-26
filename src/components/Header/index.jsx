import logoSomo from "../../assets/img/logo.png"; // Adjust the path according to your project structure

export function Header() {
  return (
    <div>
      <header className="container flex items-center justify-between h-24 max-w-6xl px-4 mx-auto">
        <a href="/">
          <img src={logoSomo} alt="Logo" className="h-12" />
        </a>

        <ul className="hidden gap-3 sm:flex">
          <li>
            <a
              href="#"
              className="text-sm text-gray-600 hover:text-gray-800 hover:underline"
            >
              Trang chủ
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-sm text-gray-600 hover:text-gray-800 hover:underline"
            >
              Về chúng tôi
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-sm text-gray-600 hover:text-gray-800 hover:underline"
            >
              Đặt phòng
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-sm text-gray-600 hover:text-gray-800 hover:underline"
            >
              Liên lạc
            </a>
          </li>
          <li>
            <a
              href="/dashboard/home"
              className="text-sm text-gray-600 hover:text-gray-800 hover:underline"
            >
              Admin
            </a>
          </li>
          <li>
            <a
              href="/auth/sign-in"
              className="text-sm text-gray-600 hover:text-gray-800 hover:underline"
            >
              Sign in
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
}
