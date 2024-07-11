import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

const PaymentPage = () => {
  return (
    <div>
      <Header />
      <div className="container px-4 py-8 mx-auto">
        <h1 className="mb-6 text-2xl font-bold">Thanh toán chuyển khoản</h1>
        <div className="p-2 mb-4 text-center bg-blue-100 rounded">
          Quý khách vui lòng không tắt trình duyệt cho đến khi nhận được kết quả giao dịch trên website. Xin cảm ơn!
        </div>
        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="flex-1 p-6 bg-white rounded-lg shadow-lg">
            <h2 className="mb-4 text-xl font-bold">Thông tin chuyển khoản</h2>
            <div className="flex flex-col md:flex-row md:gap-4">
              <div className="flex-1 mb-4 md:mb-0">
                <img src="path/to/qr-code-image.png" alt="QR Code" className="object-cover w-full h-48 mb-4 rounded-lg"/>
                <p>Bạn cần sử dụng một App ngân hàng để quét mã QR. Hoặc bạn có thể chuyển khoản với nội dung sau:</p>
              </div>
              <div className="flex-1">
                <h3 className="font-bold">Ngân hàng TMCP Ngoại thương Việt Nam (Vietcombank)</h3>
                <p>PGD Trung Hòa Nhân Chính</p>
                <div className="flex items-center justify-between mb-2">
                  <span>Số tài khoản</span>
                  <span className="font-bold">1019605496</span>
                  <button className="text-blue-500 underline">Sao chép</button>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span>Người hưởng thụ</span>
                  <span className="font-bold">NGUYEN QUANG TRUNG</span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span>Số tiền</span>
                  <span className="font-bold">6.500.000 đ</span>
                  <button className="text-blue-500 underline">Sao chép</button>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span>Nội dung</span>
                  <span className="p-1 font-bold bg-gray-100 rounded">JFHGKKF 0946974696</span>
                  <button className="text-blue-500 underline">Sao chép</button>
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Vui lòng chuyển khoản đúng với nội dung và số tiền bên trên, chuyển khoản sai nội dung hoặc số tiền có thể dẫn đến đơn hàng không được xử lý.
            </p>
          </div>
          <div className="w-full p-6 bg-white rounded-lg shadow-lg md:w-1/3">
            <h2 className="mb-4 text-xl font-bold">Mã đặt phòng: #JFHGKKF</h2>
            <img src="path/to/your/image.png" alt="Villa" className="object-cover w-full h-48 mb-4 rounded-lg"/>
            <h3 className="text-lg font-bold">Benn 2 Villa, Hạ Long</h3>
            <p>6 phòng ngủ · 7 giường · 7 vệ sinh</p>
            <a href="#" className="block mb-4 text-blue-500 underline">Xem chi tiết căn</a>
            <div className="mt-4">
              <div className="flex justify-between">
                <span className="font-bold">Thời gian lưu trú</span>
              </div>
              <div className="flex justify-between mt-2">
                <span>CN (14/07/2024)</span>
                <span>Thứ 2 (15/07/2024)</span>
              </div>
              <div className="flex justify-between mt-2">
                <span>Nhận phòng: 14:00</span>
                <span>Trả phòng: 12:00</span>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex justify-between">
                <span className="font-bold">Số lượng khách</span>
              </div>
              <div className="mt-2">
                <span>1 người lớn</span>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex justify-between">
                <span>Đêm 14/07/2024</span>
                <span>13.000.000 đ</span>
              </div>
              <div className="flex justify-between mt-2">
                <span>Tổng giá phòng</span>
                <span>13.000.000 đ</span>
              </div>
              <div className="flex justify-between mt-2 font-bold">
                <span>Bạn thanh toán</span>
                <span>6.500.000 đ</span>
              </div>
              <p className="mt-2 text-sm">Phần còn lại 6.500.000 đ sẽ được thanh toán vào lúc nhận phòng 14:00 14/07/2024.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PaymentPage;
