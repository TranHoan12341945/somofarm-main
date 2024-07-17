import { HomeIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

const RoomCard = ({
  id,
  imgUrl,
  name,
  typeName,
  area,
  description,
  price,
  pageType,
  dates,
}) => {
  const navigate = useNavigate();

  const handleNavigate = (route) => {
    navigate(route);
  };

  const formatDate = (date) => {
    const [year, month, day] = date.split('-');

    return `${day}/${month}/${year}`;
  };

  return (
    <div className='max-w-xs w-1/4 h-fit rounded-3xl border border-black'>
      {imgUrl && <img src={imgUrl} alt='Room' className='rounded-t-3xl' />}
      <div className='h-fit px-2'>
        <p className='mt-5 text-[#1d3260] font-bold text-xl h-12'>{name}</p>
        <div className='flex items-center gap-5 mt-5'>
          <div className='flex items-center gap-1'>
            <UserCircleIcon className='size-6' />
            <p className='text-[#8b9855] text-base'>Kiểu {typeName}</p>
          </div>
          <div className='flex items-center gap-1'>
            <HomeIcon className='size-6' />
            <p className='text-[#8b9855] text-base'>{area}</p>
          </div>
        </div>
        <p className='mt-5 text-base text-[#616161] line-clamp-3 overflow-ellipsis min-h-20 h-20 leading-7'>
          {description}
        </p>
        {price && (
          <div className='flex mt-5 gap-2 items-end justify-end'>
            <p className='text-[#1d3260] text-3xl'>{price}</p>
            <p className='text-[#8b9855]'>VND/ĐÊM</p>
          </div>
        )}
        {dates && (
          <p className='mt-2 text-base text-[#616161] text-end leading-7'>
            Ngày {formatDate(dates)}
          </p>
        )}
        <div className='my-5 flex justify-center'>
          {pageType === 'cancel' && (
            <button className='h-10 w-2/3 bg-red-400 rounded-md text-white'>
              HỦY ĐẶT PHÒNG
            </button>
          )}
          {pageType === 'detail' && (
            <button
              className='h-10 w-2/3 bg-yellow-400 rounded-md text-black'
              onClick={() => {
                handleNavigate(`/booking?roomID=${id}`);
              }}
            >
              ĐẶT PHÒNG
            </button>
          )}
        </div>
        {pageType !== 'detail' && (
          <div>
            {pageType !== undefined && (
              <div className='flex justify-center'>
                <hr className='w-4/5 border-none h-px bg-black' />
              </div>
            )}
            {pageType === 'cancel' ? (
              <div className='my-5 flex items-center gap-3 flex-col'>
                <button
                  className='h-10 w-2/3 rounded-md border-black border'
                  onClick={() => {
                    if (price) {
                      handleNavigate(`/room-detail/${id}?roomPrice=${price}`);
                    } else {
                      handleNavigate(`/room-detail/${id}`);
                    }
                  }}
                >
                  Chi tiết phòng
                </button>
                <button className='h-10 w-2/3 rounded-md border-black border'>
                  Chi tiết người đặt
                </button>
              </div>
            ) : (
              <div className='my-5 flex justify-center'>
                <button
                  className='h-10 w-2/3 rounded-md border-black border'
                  onClick={() => {
                    if (price) {
                      handleNavigate(`/room-detail/${id}?roomPrice=${price}`);
                    } else {
                      handleNavigate(`/room-detail/${id}`);
                    }
                  }}
                >
                  Chi tiết phòng
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default RoomCard;
