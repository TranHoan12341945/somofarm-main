import RoomCard from '../../components/RoomCard/RoomCard';

const roomlist = [
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

const CancelBookingPage = () => {
  return (
    <div className='w-full'>
      <img src='/img/home-decor-4.jpeg' alt='Room List' className='w-full' />
      <div className='flex justify-center flex-wrap gap-5 my-8'>
        {roomlist.map((room) => {
          return (
            <RoomCard
              key={room.id}
              imgUrl={room.imgUrl}
              name={room.name}
              amount={room.amount}
              area={room.area}
              description={room.description}
              price={room.price}
              type='cancel'
            />
          );
        })}
      </div>
    </div>
  );
};

export default CancelBookingPage;
