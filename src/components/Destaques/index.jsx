import image from '../../assets/featured-img.png'

export function Destaques(){
  return(
      <div className="container flex flex-col-reverse items-center justify-between max-w-6xl gap-10 px-4 py-10 mx-auto md:flex-row">
        <div className="flex flex-col items-start gap-4 md:w-1/2">

          <h3 className="text-sm font-medium text-gray-400">Resort cao cấp bậc nhất</h3>

          <h2 className="text-2xl font-medium text-gray-600">NÂNG NIU TRẢI NGHIỆM NGHỈ DƯỠNG</h2>

          <p className="text-sm font-medium text-gray-400">Đôi nét về chúng tôi</p>

          <p className="text-sm font-medium text-gray-400">Somofarm Cửu Long là một trang trại hữu cơ nằm dọc theo dòng sông Cửu Long ở miền Nam Việt Nam. Được biết đến với việc sản xuất các loại rau, hoa quả và lúa mạch hữu cơ chất lượng cao, Somofarm Cửu Long không chỉ là một nơi cung cấp thực phẩm an toàn và lành mạnh cho người tiêu dùng mà còn là biểu tượng của sự chăm sóc môi trường và phát triển bền vững.</p>
          
          <p className="text-sm font-medium text-gray-400">Với quan điểm "tôn trọng thiên nhiên, yêu quý đời sống", Somofarm Cửu Long không ngừng nghiên cứu và áp dụng các phương pháp canh tác và chăm sóc động thực vật hiện đại nhằm tối ưu hóa sản lượng mà không gây hại cho môi trường.</p>

          <button 
            className="flex items-center justify-center gap-2 px-5 py-3 mt-3 font-bold bg-orange-500 rounded hover:bg-orange-600">
            About Us
            <svg
              className="w-5"
              fill="none" 
              stroke="currentColor" 
              stroke-width="1.5" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
            </svg>
          </button>
        </div>
        <div className='flex flex-col items-center w-auto'>
          <img src={image} alt="" />
          <div className='flex gap-3 mt-2'>
            <div className='w-4 h-4 bg-gray-300 rounded-full cursor-pointer'></div>
            <div className='w-4 h-4 bg-orange-500 rounded-full cursor-pointer'></div>
            <div className='w-4 h-4 bg-gray-300 rounded-full cursor-pointer'></div>
          </div>
        </div>
      </div>
  )
}