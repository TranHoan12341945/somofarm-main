import {
  BuildingOfficeIcon,
  CakeIcon,
  HomeModernIcon,
} from '@heroicons/react/24/solid';
import RoomCard from '../../components/RoomCard/RoomCard';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { axiosInstance } from '../../configs/axiosInstance';

const otherRoomInfo = [
  // {
  //   id: 1,
  //   imgUrl: '/img/home-decor-1.jpeg',
  //   name: 'Phòng Vương Quốc Đỏ',
  //   amount: 2,
  //   area: 52,
  //   description:
  //     'Tái hiện vùng quê Mang Thít thanh bình với kiến trúc chủ đạo mang phong cách độc đáo...',
  //   price: 1000000,
  // },
  // {
  //   id: 2,
  //   imgUrl: '/img/home-decor-2.jpeg',
  //   name: 'Phòng Dấu ấn Mang Thít',
  //   amount: 2,
  //   area: 26,
  //   description:
  //     'Tô điểm không gian bằng những sản vật đặc trưng mang đậm nét văn hóa quê nhà...',
  //   price: 700000,
  // },
  // {
  //   id: 3,
  //   imgUrl: '/img/home-decor-3.jpeg',
  //   name: 'Lều trại dã ngoại Glamping',
  //   amount: 4,
  //   area: '25-30',
  //   description:
  //     'Nằm ven mặt hồ trung tâm, không gian lều trại mở vô cùng lãng mạn và tiện nghi...',
  //   price: 500000,
  // },
];

const DetailPage = () => {
  const params = useParams();
  const location = useLocation();
  const [roomInfo, setRoomInfo] = useState({});
  const [roomAmenities, setRoomAmenities] = useState([]);

  const search = location.search;
  const roomPrice = search.slice(11);

  const getRoomInfo = async (roomId) => {
    const { data } = await axiosInstance.get(`/rooms/${roomId}`);

    setRoomInfo(data);
  };

  const getRoomAmenities = async (roomId) => {
    const { data } = await axiosInstance.get(`/room-amenities/${roomId}`);

    setRoomAmenities(data.amenities);
  };

  const processAmenities = roomAmenities.flatMap((roomAmenity) => {
    return roomAmenity.amenityName.includes(',')
      ? roomAmenity.amenityName.split(',')
      : roomAmenity.amenityName;
  });

  useEffect(() => {
    getRoomInfo(params.id);
  }, []);

  useEffect(() => {
    getRoomAmenities(params.id);
  }, []);

  return (
    <div className='w-full'>
      <Header />
      {roomInfo?.imgUrl && (
        <img src={roomInfo.imgUrl} alt='Room Detail' className='w-full' />
      )}
      <div className='flex justify-center gap-8 my-8'>
        <div className='w-1/2'>
          <p className='mt-5 text-[#1d3260] font-bold text-xl'>
            {roomInfo?.roomName}
          </p>
          <div className='pl-4'>
            <p className='text-[#606060] text-lg my-5'>
              {roomInfo?.description}
            </p>
            <div>
              <p className='text-[#1d3260] font-bold text-xl'>
                Thông tin phòng
              </p>
              <div className='flex flex-wrap my-5'>
                <div className='flex gap-2 items-center w-1/3 h-10'>
                  <BuildingOfficeIcon className='size-6' />
                  <p className='text-[#8b9855] text-lg'>
                    Kiểu {roomInfo?.typeName}
                  </p>
                </div>
                <div className='flex gap-2 items-center w-1/3 h-10'>
                  <HomeModernIcon className='size-6' />
                  <p className='text-[#8b9855] text-lg'>{roomInfo?.areaName}</p>
                </div>
              </div>
            </div>
            <div>
              <p className='text-[#1d3260] font-bold text-xl'>
                Tiện nghi nội thất
              </p>
              <ul className='flex flex-wrap my-5'>
                {processAmenities.map((roomAmenity, index) => {
                  return (
                    <li key={index} className='flex items-center w-1/3 h-10'>
                      <p className='text-[#8b9855] text-lg'>{roomAmenity}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <RoomCard
          id={roomInfo?.roomID}
          name={roomInfo?.roomName}
          typeName={roomInfo?.typeName}
          area={roomInfo?.areaName}
          description={roomInfo?.description}
          price={roomPrice}
          pageType='detail'
        />
      </div>
      <div className='flex flex-col items-center'>
        <hr className='w-4/5 border-none h-px bg-black' />
        <p className='mt-5 text-[#1d3260] font-bold text-xl w-4/5'>
          Các loại phòng khác
        </p>
      </div>
      <div className='flex justify-center flex-wrap gap-5 my-8'>
        {otherRoomInfo.map((room) => {
          return (
            <RoomCard
              key={room.id}
              imgUrl={room.imgUrl}
              name={room.name}
              amount={room.amount}
              area={room.area}
              description={room.description}
              price={room.price}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default DetailPage;
