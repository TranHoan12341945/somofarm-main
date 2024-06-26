import { HomeIcon, UserCircleIcon } from '@heroicons/react/24/outline';

const RoomCard = ({ imgUrl, name, amount, area, description, price, type }) => {
  return (
    <div className='max-w-xs w-1/4 h-fit rounded-3xl border border-black'>
      <img src={imgUrl} alt='Room' className='rounded-t-3xl' />
      <div className='h-fit px-2'>
        <p className='mt-5 text-[#1d3260] font-bold text-xl'>{name}</p>
        <div className='flex items-center gap-5 mt-5'>
          <div className='flex items-center gap-1'>
            <UserCircleIcon className='size-6' />
            <p className='text-[#8b9855] text-base'>{amount} khách</p>
          </div>
          <div className='flex items-center gap-1'>
            <HomeIcon className='size-6' />
            <p className='text-[#8b9855] text-base'>{area} mét vuông</p>
          </div>
        </div>
        <p className='mt-5 text-base text-[#616161] min-h-20'>{description}</p>
        <div className='flex mt-5 gap-2 items-end justify-end'>
          <p className='text-[#1d3260] text-3xl'>{price}</p>
          <p className='text-[#8b9855]'>VND/ĐÊM</p>
        </div>
        <div className='my-5 flex justify-center'>
          {type === 'cancel' ? (
            <button className='h-10 w-2/3 bg-red-400 rounded-md text-white'>
              HỦY ĐẶT PHÒNG
            </button>
          ) : (
            <button className='h-10 w-2/3 bg-yellow-400 rounded-md'>
              ĐẶT PHÒNG
            </button>
          )}
        </div>
        {type !== 'detail' && (
          <div>
            <div className='flex justify-center'>
              <hr className='w-4/5 border-none h-px bg-black' />
            </div>
            {type === 'cancel' ? (
              <div className='my-5 flex items-center gap-3 flex-col'>
                <button className='h-10 w-2/3 rounded-md border-black border'>
                  Chi tiết phòng
                </button>
                <button className='h-10 w-2/3 rounded-md border-black border'>
                  Chi tiết người đặt
                </button>
              </div>
            ) : (
              <div className='my-5 flex justify-center'>
                <button className='h-10 w-2/3 rounded-md border-black border'>
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
