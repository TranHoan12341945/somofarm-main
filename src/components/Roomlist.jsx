import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import hotel1 from '../assets/hotel-1.jpeg';
import hotel2 from '../assets/hotel-2.jpeg';
import hotel3 from '../assets/hotel-3.jpeg';
import hotel4 from '../assets/hotel-4.jpeg';

const RoomList = () => {
  // Data cho các phòng
  const rooms = [
    { id: 1, name: 'Phòng vip 1', location: 'Kalyani Nagar, Pune | 3.3 kms từ trung tâm thành phố', price: '18,900', status: 'Available', imageUrl: hotel1 },
    { id: 2, name: 'Phòng vip 2', location: '500 meters từ Công viên Infotech Rajiv Gandhi', price: '25,300', status: 'Available', imageUrl: hotel2 },
    { id: 3, name: 'Phòng vip hơn', location: '5.4 km từ trung tâm', price: '11,300', status: 'Available', imageUrl: hotel3 },
    { id: 4, name: 'Phòng vip hơn nữa', location: 'Weikfield IT City Infopark | 7.1 km từ trung tâm', price: '10,200', status: 'Occupied', imageUrl: hotel4 },
  ];

  const [selectedRoom, setSelectedRoom] = useState(null);
  const [userData, setUserData] = useState({ name: '', email: '', date: '', guests: '', roomType: '' });

  const handleBook = (room) => {
    setSelectedRoom(room);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Đặt phòng cho ${selectedRoom.name} đã được gửi!\nTên: ${userData.name}\nEmail: ${userData.email}`);
    setSelectedRoom(null);
    setUserData({ name: '', email: '', date: '', guests: '', roomType: '' });
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-5">Danh Sách Phòng</h1>
      <div className="flex flex-col space-y-5">
        {rooms.map(room => (
          <div key={room.id} className="border p-5 rounded shadow flex">
            <img src={room.imageUrl} alt={room.name} className="w-48 h-48 object-cover rounded mr-5" />
            <div className="flex-grow">
              <h2 className="text-xl font-semibold mt-3">{room.name}</h2>
              <p className="text-gray-600">{room.location}</p>
              <p className="text-yellow-900 font-bold mt-2">₫ {room.price}</p>
              <button
                className="mt-3 px-16 py-2 font-medium text-yellow-900 bg-yellow-400 rounded sm:px-3"
                onClick={() => handleBook(room)}
              >
                Đặt Ngay
              </button>
            </div>
          </div>
        ))}
      </div>

      <button
        className="mt-10 px-16 py-2 font-medium text-white bg-blue-500 rounded sm:px-3"
        onClick={() => window.location.href = '/'}
      >
        Về Trang Chủ
      </button>

      {selectedRoom && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded shadow-lg w-full max-w-md max-h-screen overflow-auto">
            <h2 className="text-2xl mb-4">{selectedRoom.name}</h2>
            <img src={selectedRoom.imageUrl} alt={selectedRoom.name} className="w-full h-48 object-cover rounded mb-4" />
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Tên</label>
                <input
                  type="text"
                  name="name"
                  value={userData.name}
                  onChange={handleInputChange}
                  className="mt-1 p-2 w-full border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={userData.email}
                  onChange={handleInputChange}
                  className="mt-1 p-2 w-full border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Ngày</label>
                <input
                  type="date"
                  name="date"
                  value={userData.date}
                  onChange={handleInputChange}
                  className="mt-1 p-2 w-full border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Số Lượng Khách</label>
                <input
                  type="number"
                  name="guests"
                  value={userData.guests}
                  onChange={handleInputChange}
                  className="mt-1 p-2 w-full border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Loại Phòng</label>
                <select
                  name="roomType"
                  value={userData.roomType}
                  onChange={handleInputChange}
                  className="mt-1 p-2 w-full border rounded"
                  required
                >
                  <option value="" disabled>Chọn loại phòng</option>
                  <option value="single">Phòng đơn</option>
                  <option value="double">Phòng đôi</option>
                  <option value="suite">Phòng suite</option>
                </select>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="mr-4 px-4 py-2 bg-gray-500 text-white rounded"
                  onClick={() => setSelectedRoom(null)}
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-yellow-400 text-yellow-900 rounded"
                >
                  Xác Nhận Đặt Phòng
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoomList;
