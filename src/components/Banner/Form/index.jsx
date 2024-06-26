export function Form() {
  return (
    <form className="flex flex-col items-center justify-center gap-6 py-10 sm:flex-row">
      <div className="flex flex-col items-center p-4 border border-gray-300 rounded-md sm:flex-row sm:gap-3 bg-gray-100">
        <label className="block mb-2 font-bold text-gray-800 sm:mb-0">Ngày nhận phòng</label>
        <select className="px-3 py-2 text-gray-800 border border-gray-300 rounded bg-white sm:px-3">
          <option value="">Chọn ngày</option>
          {Array.from({ length: 31 }, (_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
        <select className="px-3 py-2 text-gray-800 border border-gray-300 rounded bg-white sm:px-3">
          <option value="">Chọn tháng</option>
          {Array.from({ length: 12 }, (_, i) => (
            <option key={i + 1} value={i + 1}>
              Tháng {i + 1}
            </option>
          ))}
        </select>
        <select className="px-3 py-2 text-gray-800 border border-gray-300 rounded bg-white sm:px-3">
          <option value="">Chọn năm</option>
          {Array.from({ length: 77 }, (_, i) => (
            <option key={2024 + i} value={2024 + i}>
              {2024 + i}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col items-center p-4 border border-gray-300 rounded-md sm:flex-row sm:gap-3 bg-gray-100">
        <label className="block mb-2 font-bold text-gray-800 sm:mb-0">Ngày trả phòng</label>
        <select className="px-3 py-2 text-gray-800 border border-gray-300 rounded bg-white sm:px-3">
          <option value="">Chọn ngày</option>
          {Array.from({ length: 31 }, (_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
        <select className="px-3 py-2 text-gray-800 border border-gray-300 rounded bg-white sm:px-3">
          <option value="">Chọn tháng</option>
          {Array.from({ length: 12 }, (_, i) => (
            <option key={i + 1} value={i + 1}>
              Tháng {i + 1}
            </option>
          ))}
        </select>
        <select className="px-3 py-2 text-gray-800 border border-gray-300 rounded bg-white sm:px-3">
          <option value="">Chọn năm</option>
          {Array.from({ length: 77 }, (_, i) => (
            <option key={2024 + i} value={2024 + i}>
              {2024 + i}
            </option>
          ))}
        </select>
      </div>
      <button className="flex items-center px-5 py-2 font-medium text-white bg-yellow-600 rounded-md hover:bg-yellow-700 transition duration-300 ease-in-out">
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          ></path>
        </svg>
        Tìm phòng
      </button>
    </form>
  );
}