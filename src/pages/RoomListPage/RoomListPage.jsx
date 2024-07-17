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
        <div className='mx-24 border border-gray-500 rounded-xl flex justify-center items-center h-12 bg-white'>
          <MagnifyingGlassIcon className='size-6 px-4 h-full w-16' />
          <input
            type='text'
            placeholder='Nhập loại phòng bạn cần tìm'
            className='w-full h-full outline-none px-4 rounded-e-xl text-lg'
          />
        </div>
        <div className='flex mx-24 justify-between'>
          <div className='flex justify-between items-center border border-gray-500 rounded-xl h-12 w-full bg-white'>
            <input
              type='date'
              className='w-[45%] h-full outline-none px-4 rounded-s-xl'
              value={dateFrom}
              onChange={(e) => {
                setDateFrom(e.target.value);
              }}
            />
            <hr className='w-px h-4/5 bg-gray-500' />
            <input
              type='date'
              className='w-[45%] h-full outline-none px-4 rounded-e-xl'
              value={dateTo}
              onChange={(e) => {
                setDateTo(e.target.value);
              }}
            />
          </div>
          {/* <div className='flex items-center h-12 w-1/3 border border-gray-500 rounded-xl bg-white'>
            <select
              className='w-full h-full rounded-xl outline-none px-2'
              defaultValue={0}
            >
              <option value={0}>Lựa chọn kiểu phòng</option>
              <option value={2}>2 người</option>
              <option value={4}>4 người</option>
            </select>
          </div> */}
        </div>
        <div className='flex justify-center'>
          <button
            className='h-12 bg-blue-400 w-1/5 text-white text-xl rounded-xl mt-4'
            onClick={() => {
              getRoomList();
            }}
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
