import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../assets/feature-img.png';

export function Destaques() {
  return (
    <div id="destaques" className="w-full py-10 bg-light-green-100">
      <div className="container flex flex-col-reverse items-center justify-between max-w-6xl gap-10 px-4 mx-auto md:flex-row">
        <div className="flex flex-col justify-between h-full gap-4 md:w-1/2">
          <div className="flex flex-col flex-grow gap-4">
            <h3 className="text-sm font-medium text-gray-600">Resort cao cấp bậc nhất</h3>
            <h2 className="text-2xl font-medium" style={{ color: '#1d3260', fontFamily: 'Arial, sans-serif' }}>NÂNG NIU TRẢI NGHIỆM NGHỈ DƯỠNG</h2>
            <p className="text-sm font-medium text-gray-600">Đôi nét về chúng tôi</p>
            <p className="text-sm font-medium text-gray-600">
              Somofarm Cửu Long là một trang trại hữu cơ nằm dọc theo dòng sông Cửu Long ở miền Nam Việt Nam. Được biết đến với việc sản xuất các loại rau, hoa quả và lúa mạch hữu cơ chất lượng cao, Somofarm Cửu Long không chỉ là một nơi cung cấp thực phẩm an toàn và lành mạnh cho người tiêu dùng mà còn là biểu tượng của sự chăm sóc môi trường và phát triển bền vững.
            </p>
            <p className="text-sm font-medium text-gray-600">
              Với quan điểm "tôn trọng thiên nhiên, yêu quý đời sống", Somofarm Cửu Long không ngừng nghiên cứu và áp dụng các phương pháp canh tác và chăm sóc động thực vật hiện đại nhằm tối ưu hóa sản lượng mà không gây hại cho môi trường.
            </p>
          </div>
          <Link
            to="/about-us"
            className="flex items-center justify-center gap-2 px-5 py-3 mt-3 font-bold text-white bg-orange-500 rounded hover:bg-orange-600"
          >
            About Us
            <svg className="w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
            </svg>
          </Link>
        </div>
        <div className="flex flex-col items-center w-auto">
          <img src={image} alt="Feature" className="transition-transform duration-300 transform rounded-lg hover:scale-105" style={{ width: '90%', height: 'auto', maxHeight: '450px' }} />
        </div>
      </div>
    </div>
  );
}

export default Destaques;
