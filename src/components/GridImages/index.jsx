import hotel1 from '../../assets/hotel-1.jpeg';
import hotel2 from '../../assets/hotel-2.jpeg';
import hotel3 from '../../assets/hotel-3.jpeg';
import hotel4 from '../../assets/hotel-4.jpeg';
import shadow from '../../assets/image-shadow.png';

export function GridImages() {
  return(
    <div>
      <div className="container max-w-6xl px-4 py-10 mx-auto">
        <h3 className="mb-8 text-2xl font-semibold text-center" style={{ color: '#1d3260', fontFamily: 'Arial, sans-serif' }}>
          Các loại phòng điển hình
        </h3>
        <div className="grid max-h-screen grid-cols-1 grid-rows-4 gap-6 md:grid-cols-4 md:grid-rows-2 md:h-96">
          <div className="relative col-span-1 row-span-1 overflow-hidden rounded-lg md:col-span-2 md:row-span-2">
            <p className='absolute bottom-0 z-10 pb-4 pl-4 font-bold text-white'>Phòng Vương Quốc Đỏ</p>
            <img src={shadow} alt="sombra" className='absolute bottom-0 left-0 right-0 h-20' />
            <img src={hotel1} alt="hotel" className='object-cover w-full h-full overflow-hidden rounded-lg transform transition-transform duration-300 hover:scale-105' />
          </div>
          <div className="relative col-span-1 md:col-span-2">
            <p className='absolute bottom-0 z-10 pb-4 pl-4 font-bold text-white'>Phòng Dấu ấn Mang Thít</p>
            <img src={shadow} alt="sombra" className='absolute bottom-0 left-0 right-0 h-20' />
            <img src={hotel2} alt="hotel" className='object-cover w-full h-full overflow-hidden rounded-lg transform transition-transform duration-300 hover:scale-105' />
          </div>
          <div className='relative'>
            <p className='absolute bottom-0 z-10 pb-4 pl-4 font-bold text-white'>Phòng vip hơn</p>
            <img src={shadow} alt="sombra" className='absolute bottom-0 left-0 right-0 h-20' />
            <img src={hotel3} alt="hotel" className='object-cover w-full h-full overflow-hidden rounded-lg transform transition-transform duration-300 hover:scale-105' />
          </div>
          <div className='relative'>
            <p className='absolute bottom-0 z-10 pb-4 pl-4 font-bold text-white'>Lều trại dã ngoại Glamping</p>
            <img src={shadow} alt="sombra" className='absolute bottom-0 left-0 right-0 h-20' />
            <img src={hotel4} alt="hotel" className='object-cover w-full h-full overflow-hidden rounded-lg transform transition-transform duration-300 hover:scale-105' />
          </div>
        </div>
      </div>
    </div>
  );
}
