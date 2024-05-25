export function Form() {
  return (
    <form className="flex flex-col items-center justify-center gap-6 py-10 sm:flex-row">
      <div className="flex flex-col items-center p-4 border border-gray-300 rounded-md sm:flex-row sm:gap-3">
        <label className="block mb-2 font-bold text-white sm:mb-0">Ngày nhận phòng</label>
        <select className="px-16 py-2 text-gray-500 border border-gray-300 rounded bg-gray-50 sm:px-3">
          <option value="">Chọn ngày</option>
          {Array.from({ length: 31 }, (_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
        <select className="px-16 py-2 text-gray-500 border border-gray-300 rounded bg-gray-50 sm:px-3">
          <option value="">Chọn tháng</option>
          {Array.from({ length: 12 }, (_, i) => (
            <option key={i + 1} value={i + 1}>
              Tháng {i + 1}
            </option>
          ))}
        </select>
        <select className="px-16 py-2 text-gray-500 border border-gray-300 rounded bg-gray-50 sm:px-3">
          <option value="">Chọn năm</option>
          {Array.from({ length: 100 }, (_, i) => (
            <option key={2023 - i} value={2023 - i}>
              {2023 - i}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col items-center p-4 border border-gray-300 rounded-md sm:flex-row sm:gap-3">
        <label className="block mb-2 font-bold text-white sm:mb-0">Ngày trả phòng</label>
        <select className="px-16 py-2 text-gray-500 border border-gray-300 rounded bg-gray-50 sm:px-3">
          <option value="">Chọn ngày</option>
          {Array.from({ length: 31 }, (_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
        <select className="px-16 py-2 text-gray-500 border border-gray-300 rounded bg-gray-50 sm:px-3">
          <option value="">Chọn tháng</option>
          {Array.from({ length: 12 }, (_, i) => (
            <option key={i + 1} value={i + 1}>
              Tháng {i + 1}
            </option>
          ))}
        </select>
        <select className="px-16 py-2 text-gray-500 border border-gray-300 rounded bg-gray-50 sm:px-3">
          <option value="">Chọn năm</option>
          {Array.from({ length: 100 }, (_, i) => (
            <option key={2023 - i} value={2023 - i}>
              {2023 - i}
            </option>
          ))}
        </select>
      </div>
      <button className="flex items-center px-16 py-2 font-medium text-yellow-900 bg-yellow-400 rounded sm:px-3">
        <svg
          className="w-4 h-4 mr-2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
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
