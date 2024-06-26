import {
  Bars2Icon,
  BuildingOfficeIcon,
  CakeIcon,
  CloudIcon,
  EyeIcon,
  FilmIcon,
  FireIcon,
  HandRaisedIcon,
  HomeModernIcon,
  InboxStackIcon,
  MagnifyingGlassIcon,
  MoonIcon,
  MusicalNoteIcon,
  RocketLaunchIcon,
  TableCellsIcon,
  TvIcon,
} from '@heroicons/react/24/solid';
import RoomCard from '../../components/RoomCard/RoomCard';

const roomInfo = {
  id: 1,
  imgUrl: '/img/home-decor-1.jpeg',
  name: 'Phòng Vương Quốc Đỏ',
  amount: 2,
  area: 52,
  description:
    'Tái hiện vùng quê Mang Thít thanh bình với kiến trúc chủ đạo mang phong cách độc đáo...',
  price: 1000000,
};

const otherRoomInfo = [
  {
    id: 1,
    imgUrl: '/img/home-decor-1.jpeg',
    name: 'Phòng Vương Quốc Đỏ',
    amount: 2,
    area: 52,
    description:
      'Tái hiện vùng quê Mang Thít thanh bình với kiến trúc chủ đạo mang phong cách độc đáo...',
    price: 1000000,
  },
  {
    id: 2,
    imgUrl: '/img/home-decor-2.jpeg',
    name: 'Phòng Dấu ấn Mang Thít',
    amount: 2,
    area: 26,
    description:
      'Tô điểm không gian bằng những sản vật đặc trưng mang đậm nét văn hóa quê nhà...',
    price: 700000,
  },
  {
    id: 3,
    imgUrl: '/img/home-decor-3.jpeg',
    name: 'Lều trại dã ngoại Glamping',
    amount: 4,
    area: '25-30',
    description:
      'Nằm ven mặt hồ trung tâm, không gian lều trại mở vô cùng lãng mạn và tiện nghi...',
    price: 500000,
  },
];

const SearchRoomPage = () => {
  return (
    <div className='w-full h-screen relative'>
      <img
        src={roomInfo.imgUrl}
        alt='Room Detail'
        className='w-full h-1/3 overflow-y-hidden object-cover'
      />
      <div className='flex flex-col justify-center gap-4 absolute top-1/3 transform -translate-y-1/2 -translate-x-1/2 left-1/2 w-[1000px] h-80 rounded-3xl bg-gray-100 shadow-md'>
        <div className='mx-24 border border-gray-500 rounded-xl flex justify-center items-center h-12 bg-white'>
          <MagnifyingGlassIcon className='size-6 px-4 h-full w-16' />
          <input
            type='text'
            placeholder='Nhập loại phòng bạn cần tìm'
            className='w-full h-full outline-none px-4 rounded-e-xl text-lg'
          />
        </div>
        <div className='flex mx-24 justify-between'>
          <div className='flex justify-between items-center border border-gray-500 rounded-xl h-12 w-3/5 bg-white'>
            <input
              type='date'
              className='w-[45%] h-full outline-none px-4 rounded-s-xl'
            />
            <hr className='w-px h-4/5 bg-gray-500' />
            <input
              type='date'
              className='w-[45%] h-full outline-none px-4 rounded-e-xl'
            />
          </div>
          <div className='flex items-center h-12 w-1/3 border border-gray-500 rounded-xl bg-white'>
            <select
              className='w-full h-full rounded-xl outline-none px-2'
              defaultValue={0}
            >
              <option value={0}>Lựa chọn số người</option>
              <option value={2}>2 người</option>
              <option value={4}>4 người</option>
            </select>
          </div>
        </div>
        <div className='flex justify-center'>
          <button className='h-12 bg-blue-400 w-1/5 text-white text-xl rounded-xl mt-4'>
            TÌM KIẾM
          </button>
        </div>
      </div>
      <div className='flex flex-col items-center'>
        <p className='mt-48 mb-6 text-[#1d3260] font-bold text-xl w-4/5'>
          Lựa chọn phù hợp nhất với bạn
        </p>
        <hr className='w-4/5 border-none h-px bg-black' />
      </div>
      <div className='flex justify-center gap-8 my-8'>
        <div className='w-1/2'>
          <p className='mt-5 text-[#1d3260] font-bold text-xl'>
            {roomInfo.name}
          </p>
          <div className='pl-4'>
            <p className='text-[#606060] text-lg my-5'>
              Vương Quốc Đỏ – tên gọi đầy tự hào của vùng quê Mang Thít – nơi
              hàng nghìn lò nung gạch gốm khổng lồ mọc san sát nhau như những
              tòa lâu đài của một miền vương quốc. Lấy cảm hứng từ đây, phòng
              Vương Quốc Đỏ được thiết kế với diện tích lớn bao gồm cả phòng
              khách và phòng ngủ, bày trí theo tinh thần tái hiện lại một không
              gian nặng tình miền Tây. Mang hơi thở Indochina đậm nét, các đồ
              trang trí trong phòng được tô điểm từ gạch gốm – một dấu ấn đặc
              trưng nơi quê mẹ Mang Thít – Vĩnh Long. Bên cạnh đó, để tạo ra một
              trải nghiệm nghỉ dưỡng hoàn hảo, phòng Vương Quốc Đỏ đặt để những
              chấm phá đậm nét thiên nhiên bằng các bức tranh ghi lại vẻ đẹp của
              cảnh sắc quê nhà.
            </p>
            <div>
              <p className='text-[#1d3260] font-bold text-xl'>
                Thông tin phòng
              </p>
              <div className='flex flex-wrap my-5'>
                <div className='flex gap-2 items-center w-1/3 h-10'>
                  <MoonIcon className='size-6' />
                  <p className='text-[#8b9855] text-lg'>1 phòng ngủ</p>
                </div>
                <div className='flex gap-2 items-center w-1/3 h-10'>
                  <EyeIcon className='size-6' />
                  <p className='text-[#8b9855] text-lg'>View Hồ trung tâm</p>
                </div>
                <div className='flex gap-2 items-center w-1/3 h-10'>
                  <HomeModernIcon className='size-6' />
                  <p className='text-[#8b9855] text-lg'>Ban công</p>
                </div>
                <div className='flex gap-2 items-center w-1/3 h-10'>
                  <BuildingOfficeIcon className='size-6' />
                  <p className='text-[#8b9855] text-lg'>1 phòng khách</p>
                </div>
              </div>
            </div>
            <div>
              <p className='text-[#1d3260] font-bold text-xl'>
                Tiện nghi nội thất
              </p>
              <div className='flex flex-wrap my-5'>
                <div className='flex gap-2 items-center w-1/3 h-10'>
                  <MoonIcon className='size-6' />
                  <p className='text-[#8b9855] text-lg'>1 King Size Bed</p>
                </div>
                <div className='flex gap-2 items-center w-1/3 h-10'>
                  <InboxStackIcon className='size-6' />
                  <p className='text-[#8b9855] text-lg'>Tủ quần áo</p>
                </div>
                <div className='flex gap-2 items-center w-1/3 h-10'>
                  <HandRaisedIcon className='size-6' />
                  <p className='text-[#8b9855] text-lg'>Đồ dùng cá nhân</p>
                </div>
                <div className='flex gap-2 items-center w-1/3 h-10'>
                  <FilmIcon className='size-6' />
                  <p className='text-[#8b9855] text-lg'>Salon phòng khách</p>
                </div>
                <div className='flex gap-2 items-center w-1/3 h-10'>
                  <CloudIcon className='size-6' />
                  <p className='text-[#8b9855] text-lg'>Điều hòa không khí</p>
                </div>
                <div className='flex gap-2 items-center w-1/3 h-10'>
                  <FireIcon className='size-6' />
                  <p className='text-[#8b9855] text-lg'>Ấm đun nước</p>
                </div>
                <div className='flex gap-2 items-center w-1/3 h-10'>
                  <RocketLaunchIcon className='size-6' />
                  <p className='text-[#8b9855] text-lg'>Máy sấy tóc</p>
                </div>
                <div className='flex gap-2 items-center w-1/3 h-10'>
                  <TvIcon className='size-6' />
                  <p className='text-[#8b9855] text-lg'>Smart TV 50 Inch</p>
                </div>
                <div className='flex gap-2 items-center w-1/3 h-10'>
                  <Bars2Icon className='size-6' />
                  <p className='text-[#8b9855] text-lg'>Ga trải giường</p>
                </div>
                <div className='flex gap-2 items-center w-1/3 h-10'>
                  <MusicalNoteIcon className='size-6' />
                  <p className='text-[#8b9855] text-lg'>MiniBar</p>
                </div>
                <div className='flex gap-2 items-center w-1/3 h-10'>
                  <TableCellsIcon className='size-6' />
                  <p className='text-[#8b9855] text-lg'>Bàn làm việc</p>
                </div>
              </div>
              <p className='text-[#1d3260] font-bold text-xl'>
                Dịch vụ ăn uống
              </p>
              <div className='flex flex-wrap my-5'>
                <div className='flex gap-2 items-center w-1/2 h-10'>
                  <CakeIcon className='size-6' />
                  <p className='text-[#8b9855] text-lg'>
                    Buffet, à la carte hoặc phục vụ tại phòng
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <RoomCard
          imgUrl={roomInfo.imgUrl}
          name={roomInfo.name}
          amount={roomInfo.amount}
          area={roomInfo.area}
          description={roomInfo.description}
          price={roomInfo.price}
          type='detail'
        />
      </div>
      <div className='flex flex-col items-center'>
        <hr className='w-4/5 border-none h-px bg-black' />
        <p className='mt-5 text-[#1d3260] font-bold text-xl w-4/5'>
          Các lựa chọn có sẵn khác
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
    </div>
  );
};

export default SearchRoomPage;
