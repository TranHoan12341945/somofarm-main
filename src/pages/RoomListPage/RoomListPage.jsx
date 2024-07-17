import { useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import RoomCard from '../../components/RoomCard/RoomCard';
import { axiosInstance } from '../../configs/axiosInstance';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

const RoomListPage = () => {
  const [roomList, setRoomList] = useState([]);
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');

  const getRoomList = async () => {
    const { data: roomData } = await axiosInstance.get('/rooms');

    if (dateTo === '' || dateFrom === '') {
      setRoomList(roomData);
    } else {
      const { data: roomFiltered } = await axiosInstance.get(
        `/dates/GetDatesByDateRange?dateFrom=${dateFrom}&dateTo=${dateTo}`
      );

      const processNewRoomList = roomFiltered.map((room) => {
        const newRoomList = roomData
          .filter((newRoom) => {
            return room.roomID === newRoom.roomID;
          })
          .map((newRoom) => {
            return {
              ...room,
              description: newRoom.description,
              typeName: newRoom.typeName,
              areaName: newRoom.areaName,
            };
          });

        return newRoomList;
      });
      console.log(processNewRoomList);

      setRoomList(processNewRoomList);
    }
  };

  useEffect(() => {
    getRoomList();
  }, [dateFrom, dateTo]);

  return (
    <div className='w-full relative'>
      <Header />
      <img src='/img/home-decor-4.jpeg' alt='Room List' className='w-full' />
      <div className='flex flex-col justify-center gap-4 absolute -translate-y-1/2 -translate-x-1/2 left-1/2 w-[1000px] h-80 rounded-3xl bg-gray-100 shadow-md'>
  {/* <div className='mx-24 border border-gray-500 rounded-xl flex justify-center items-center h-12 bg-white'> */}
    {/* <MagnifyingGlassIcon className='size-6 px-4 h-full w-16' /> */}
    {/* <input
      type='text'
      placeholder='Nhập loại phòng bạn cần tìm'
      className='w-full h-full outline-none px-4 rounded-e-xl text-lg'
    /> */}
  {/* </div> */}
  <div className='flex mx-24 justify-between'>
    <div className='flex flex-col w-[45%]'>
      <label className='px-4 pt-2 text-sm text-gray-700'>Ngày check-in</label>
      <input
        type='date'
        className='w-full h-full outline-none px-4 rounded-s-xl border border-gray-500'
        value={dateFrom}
        onChange={(e) => {
          setDateFrom(e.target.value);
        }}
      />
    </div>
    <hr className='w-px h-4/5 bg-gray-500 self-center' />
    <div className='flex flex-col w-[45%]'>
      <label className='px-4 pt-2 text-sm text-gray-700'>Ngày check-out</label>
      <input
        type='date'
        className='w-full h-full outline-none px-4 rounded-e-xl border border-gray-500'
        value={dateTo}
        onChange={(e) => {
          setDateTo(e.target.value);
        }}
      />
    </div>
  </div>
  <div className='flex justify-center'>
    <button
      className='h-12 bg-blue-400 w-1/5 text-white text-xl rounded-xl mt-4'
      onClick={getRoomList}
    >
      TÌM KIẾM
    </button>
  </div>
</div>

      <div className='flex justify-center flex-wrap gap-5 mb-8 my-52'>
        {dateTo === '' || dateFrom === ''
          ? roomList.map((room, index) => {
              return (
                <RoomCard
                  key={index}
                  id={room.roomID}
                  name={room.roomName}
                  typeName={room.typeName}
                  area={room.areaName}
                  description={room.description}
                />
              );
            })
          : roomList.map((room, index) => {
              return (
                <RoomCard
                  key={index}
                  id={room[0]?.roomID}
                  name={room[0]?.roomName}
                  typeName={room[0]?.typeName}
                  area={room[0]?.areaName}
                  description={room[0]?.description}
                  price={room[0]?.roomPrice}
                  dates={room[0]?.dates}
                />
              );
            })}
      </div>
      <Footer />
    </div>
  );
};

export default RoomListPage;
