import facebook from '../../assets/icon-facebook.png'
import instagram from '../../assets/icon-instagram.png'

export function Footer(){
  return(
    <footer className="border border-gray-200">
      <div className="container max-w-6xl mx-auto px-4 py-8 flex items-center justify-between">
        <p className="text-2xl font-black text-gray-400">Logo</p>
        <div className='flex items-center gap-6'>
          <a href="#">
            <img src={facebook} alt="facebook" />
          </a>
          <a href="#">
            <img src={instagram} alt="Instagram" />
          </a>
        </div>
      </div>
    </footer>
  )
}