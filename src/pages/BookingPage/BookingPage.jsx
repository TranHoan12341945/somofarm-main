import React, { useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { axiosInstance } from '../../configs/axiosInstance';
import { useLocation, useNavigate } from 'react-router-dom';

const BookingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dateIn, setDateIn] = useState('');
  const [dateOut, setDateOut] = useState('');
  const [errors, setErrors] = useState({});

  const search = location.search;
  const roomID = search.slice(8);

  const validateForm = () => {
    const newErrors = {};
    if (!firstName) newErrors.firstName = 'Họ là bắt buộc';
    if (!lastName) newErrors.lastName = 'Tên là bắt buộc';
    if (!email) newErrors.email = 'Email là bắt buộc';
    if (!phoneNumber) newErrors.phoneNumber = 'Số điện thoại là bắt buộc';
    if (!dateIn) newErrors.dateIn = 'Ngày nhận phòng là bắt buộc';
    if (!dateOut) newErrors.dateOut = 'Ngày trả phòng là bắt buộc';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleBooking = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const postInfo = await axiosInstance.post('/bookings', {
        firstName,
        lastName,
        email,
        phone: phoneNumber,
        roomID,
        dateIn,
        dateOut,
      });
      console.log(postInfo);
      navigate('/booking-success');
    } catch (error) {
      console.error("Error booking the room:", error);
    }
  };

  return (
    <div>
      <Header />
      <div className='container px-4 py-8 mx-auto'>
        <div className='flex flex-col gap-8 md:flex-row'>
          <div className='w-full p-6 bg-white rounded-lg shadow-lg md:w-2/3'>
            <h2 className='mb-4 text-xl font-bold'>Yêu cầu đặt phòng</h2>
            <div className='p-4 mb-4 bg-yellow-100 rounded-lg'>
              <p className='font-bold'>Quy định độ tuổi:</p>
              <p>Người lớn: trên 12 tuổi</p>
              <p>Trẻ em: từ 6 đến 12 tuổi</p>
              <p>Em bé: dưới 6 tuổi</p>
              <p className='mt-2 font-bold'>Giá phòng tiêu chuẩn:</p>
              <p>- Tiêu chuẩn 14 người lớn + 6 trẻ em</p>
              <p>- Nhận tối đa 24 người (bao gồm trẻ em)</p>
              <p>
                - Phụ thu từ người thứ 21:{' '}
                <strong>250.000 VND/ người/ ngày</strong> (kể cả trẻ em)
              </p>
              <p className='mt-2 font-bold'>Lưu ý khi đặt phòng:</p>
              <ul className='pl-6 list-disc'>
                <li>
                  Không được sử dụng khăn trắng lau vết bẩn, đồ ăn, giày dép,
                  chất thải… nếu hỏng, bẩn sẽ phải đền bù theo giá trị của đồ
                </li>
                <li>
                  Không được thay đổi bố trí đồ đạc, vật dụng trong biệt thự,
                  nếu hỏng, mất đồ sẽ đền bù theo giá trị của đồ
                </li>
                <li>
                  Khách hàng không được sử dụng các chất kích thích, ma túy,
                  hàng cấm, cờ bạc, các hành vi vi phạm pháp luật trong biệt thự
                </li>
                <li>
                  Khách tự dọn dẹp sau khi nấu nướng, ăn uống, nếu không dọn dẹp
                  sẽ mất phí 500.000 - 2.000.000đ dọn rửa, 200.000đ rửa bếp
                  nướng
                </li>
                <li>
                  Dịch vụ không bao gồm: minibar, than hoa, giặt là, rửa bát,
                  rửa bếp nướng BBQ…
                </li>
                <li>Không được mang thú nuôi vào villa</li>
                <li>
                  Nếu khách có nhu cầu thuê Setup tiệc nấu ăn tại Villa, Quý
                  khách vui lòng đăng ký với Quản gia: Cung cấp thông tin người
                  nấu ăn và yêu cầu cọc 1.000.000đ để đảm bảo vệ sinh và tài sản
                  bếp của Villa. Nếu không chấp hành mọi phát sinh về vệ sinh và
                  tài sản bếp trong quá trình khách ở, khách hàng hoàn toàn chịu
                  trách nhiệm
                </li>
              </ul>
              <p className='mt-2 font-bold'>Quy định cọc tài sản:</p>
              <p>
                Quý khách cần đặt cọc 5.000.000 VND trực tiếp khi check-in để
                đảm bảo cho đồ đạc nội thất trong villa. Nếu trong quá trình sử
                dụng, mọi đồ đạc nội thất trong villa được giữ nguyên trạng,
                không có hỏng hóc hay tổn hại gì, villa sẽ hoàn trả lại khoản
                tiền cọc này cho quý khách vào ngày check-out (sau khi đã trừ
                các chi phí sử dụng dịch vụ nếu phát sinh)
              </p>
            </div>

            <div className='mb-4'>
              <h2 className='mb-2 text-xl font-bold'>Thông tin liên hệ</h2>
              <form>
                <div className='mb-4'>
                  <label className='block mb-1 font-bold' htmlFor='firstName'>
                    Họ
                  </label>
                  <input
                    type='text'
                    name='firstName'
                    value={firstName}
                    required
                    className='w-full p-2 border border-gray-300 rounded'
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                  />
                  {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
                </div>
                <div className='mb-4'>
                  <label className='block mb-1 font-bold' htmlFor='lastName'>
                    Tên
                  </label>
                  <input
                    type='text'
                    name='lastName'
                    value={lastName}
                    required
                    className='w-full p-2 border border-gray-300 rounded'
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                  />
                  {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
                </div>
                <div className='mb-4'>
                  <label className='block mb-1 font-bold' htmlFor='phoneNumber'>
                    Số điện thoại
                  </label>
                  <input
                    type='text'
                    name='phoneNumber'
                    value={phoneNumber}
                    required
                    className='w-full p-2 border border-gray-300 rounded'
                    onChange={(e) => {
                      setPhoneNumber(e.target.value);
                    }}
                  />
                  {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}
                </div>
                <div className='mb-4'>
                  <label className='block mb-1 font-bold' htmlFor='email'>
                    Email
                  </label>
                  <input
                    type='email'
                    name='email'
                    value={email}
                    required
                    className='w-full p-2 border border-gray-300 rounded'
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>
                <div className='mb-4'>
                  <label className='block mb-1 font-bold' htmlFor='dateIn'>
                    Ngày nhận phòng
                  </label>
                  <input
                    type='date'
                    name='dateIn'
                    value={dateIn}
                    required
                    className='w-full p-2 border border-gray-300 rounded'
                    onChange={(e) => {
                      setDateIn(e.target.value);
                    }}
                  />
                  {errors.dateIn && <p className="text-red-500 text-sm">{errors.dateIn}</p>}
                </div>
                <div className='mb-4'>
                  <label className='block mb-1 font-bold' htmlFor='dateOut'>
                    Ngày trả phòng
                  </label>
                  <input
                    type='date'
                    name='dateOut'
                    value={dateOut}
                    required
                    className='w-full p-2 border border-gray-300 rounded'
                    onChange={(e) => {
                      setDateOut(e.target.value);
                    }}
                  />
                  {errors.dateOut && <p className="text-red-500 text-sm">{errors.dateOut}</p>}
                </div>
                <h2 className='mb-2 text-xl font-bold'>Chọn cách thanh toán</h2>
                <div className='mb-4'>
                  <input
                    type='radio'
                    name='paymentMethod'
                    value='full'
                    required
                    className='mr-2'
                  />
                  <label className='font-bold'>Thanh toán trực tuyến</label>
                  {/* <p className='ml-6'>
                    Bạn sẽ thanh toán toàn bộ 13,000,000 đ hôm nay...
                  </p> */}
                </div>
                <div className='mb-4'>
                  <input
                    type='radio'
                    name='paymentMethod'
                    value='partial'
                    required
                    className='mr-2'
                  />
                  <label className='font-bold'>
                    Thanh toán sau khi trả phòng
                  </label>
                  {/* <p className='ml-6'>
                    Bạn sẽ thanh toán trước một phần 6,500,000 đ hôm nay...
                  </p> */}
                </div>
                <button
                  className='px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700'
                  onClick={handleBooking}
                >
                  Đặt ngay
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BookingPage;
