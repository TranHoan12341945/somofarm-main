// BookingSuccessPage.js
import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

const BookingSuccessPage = () => {
  return (
    <div>
      <Header />
      <div className='container px-4 py-8 mx-auto'>
        <div className='p-6 bg-white rounded-lg shadow-lg'>
          <h2 className='mb-4 text-xl font-bold'>Đặt phòng thành công!</h2>
          <p className='mb-4'>Cảm ơn bạn đã đặt phòng tại villa của chúng tôi.</p>
          <p className='mb-4'>Chúng tôi sẽ liên hệ với bạn sớm nhất để xác nhận chi tiết đặt phòng.</p>
          <a href="/" className='px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700'>
            Quay lại trang chủ
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BookingSuccessPage;
