import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

const BookingPage = () => {
    return (
      <div>
        <Header />
        <div className="container px-4 py-8 mx-auto">
          <div className="flex flex-col gap-8 md:flex-row">
            <div className="w-full p-6 bg-white rounded-lg shadow-lg md:w-2/3">
              <h2 className="mb-4 text-xl font-bold">Yêu cầu đặt phòng</h2>
              <div className="p-4 mb-4 bg-yellow-100 rounded-lg">
                <p className="font-bold">Quy định độ tuổi:</p>
                <p>Người lớn: trên 12 tuổi</p>
                <p>Trẻ em: từ 6 đến 12 tuổi</p>
                <p>Em bé: dưới 6 tuổi</p>
                <p className="mt-2 font-bold">Giá phòng tiêu chuẩn:</p>
                <p>- Tiêu chuẩn 14 người lớn + 6 trẻ em</p>
                <p>- Nhận tối đa 24 người (bao gồm trẻ em)</p>
                <p>- Phụ thu từ người thứ 21: <strong>250.000 VND/ người/ ngày</strong> (kể cả trẻ em)</p>
                <p className="mt-2 font-bold">Lưu ý khi đặt phòng:</p>
                <ul className="pl-6 list-disc">
                  <li>Không được sử dụng khăn trắng lau vết bẩn, đồ ăn, giày dép, chất thải… nếu hỏng, bẩn sẽ phải đền bù theo giá trị của đồ</li>
                  <li>Không được thay đổi bố trí đồ đạc, vật dụng trong biệt thự, nếu hỏng, mất đồ sẽ đền bù theo giá trị của đồ</li>
                  <li>Khách hàng không được sử dụng các chất kích thích, ma túy, hàng cấm, cờ bạc, các hành vi vi phạm pháp luật trong biệt thự</li>
                  <li>Khách tự dọn dẹp sau khi nấu nướng, ăn uống, nếu không dọn dẹp sẽ mất phí 500.000 - 2.000.000đ dọn rửa, 200.000đ rửa bếp nướng</li>
                  <li>Dịch vụ không bao gồm: minibar, than hoa, giặt là, rửa bát, rửa bếp nướng BBQ…</li>
                  <li>Không được mang thú nuôi vào villa</li>
                  <li>Nếu khách có nhu cầu thuê Setup tiệc nấu ăn tại Villa, Quý khách vui lòng đăng ký với Quản gia: Cung cấp thông tin người nấu ăn và yêu cầu cọc 1.000.000đ để đảm bảo vệ sinh và tài sản bếp của Villa. Nếu không chấp hành mọi phát sinh về vệ sinh và tài sản bếp trong quá trình khách ở, khách hàng hoàn toàn chịu trách nhiệm</li>
                </ul>
                <p className="mt-2 font-bold">Quy định cọc tài sản:</p>
                <p>Quý khách cần đặt cọc 5.000.000 VND trực tiếp khi check-in để đảm bảo cho đồ đạc nội thất trong villa. Nếu trong quá trình sử dụng, mọi đồ đạc nội thất trong villa được giữ nguyên trạng, không có hỏng hóc hay tổn hại gì, villa sẽ hoàn trả lại khoản tiền cọc này cho quý khách vào ngày check-out (sau khi đã trừ các chi phí sử dụng dịch vụ nếu phát sinh)</p>
              </div>
  
              <div className="mb-4">
                <h2 className="mb-2 text-xl font-bold">Thông tin liên hệ</h2>
                <form>
                  <div className="mb-4">
                    <label className="block mb-1 font-bold">Tên khách hàng</label>
                    <input type="text" name="customerName" required className="w-full p-2 border border-gray-300 rounded" />
                  </div>
                  <div className="mb-4">
                    <label className="block mb-1 font-bold">Số điện thoại</label>
                    <input type="text" name="phoneNumber" required className="w-full p-2 border border-gray-300 rounded" />
                  </div>
                  <div className="mb-4">
                    <label className="block mb-1 font-bold">Email</label>
                    <input type="email" name="email" required className="w-full p-2 border border-gray-300 rounded" />
                  </div>
                  <div className="mb-4">
                    <label className="block mb-1 font-bold">Yêu cầu đặc biệt?</label>
                    <textarea name="specialRequest" className="w-full p-2 border border-gray-300 rounded"></textarea>
                  </div>
                  <h2 className="mb-2 text-xl font-bold">Chọn cách thanh toán</h2>
                  <div className="mb-4">
                    <input type="radio" name="paymentMethod" value="full" required className="mr-2" />
                    <label className="font-bold">Trả toàn bộ tiền phòng</label>
                    <p className="ml-6">Bạn sẽ thanh toán toàn bộ 13,000,000 đ hôm nay...</p>
                  </div>
                  <div className="mb-4">
                    <input type="radio" name="paymentMethod" value="partial" required className="mr-2" />
                    <label className="font-bold">Trả trước một phần tiền phòng</label>
                    <p className="ml-6">Bạn sẽ thanh toán trước một phần 6,500,000 đ hôm nay...</p>
                  </div>
                  <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700">Đặt ngay</button>
                </form>
              </div>
            </div>
  
            <div className="w-full p-6 bg-white rounded-lg shadow-lg md:w-1/3">
              <img src="path/to/your/image.png" alt="Villa" className="object-cover w-full h-48 mb-4 rounded-lg"/>
              <h3 className="text-lg font-bold">Benn 2 Villa, Hạ Long</h3>
              <p>6 phòng ngủ · 7 giường · 7 vệ sinh</p>
              <a href="#" className="text-blue-500 underline">Xem chi tiết căn</a>
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
              <button className="w-full px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-700">Đặt ngay</button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  export default BookingPage;