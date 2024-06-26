import React from 'react';
import facebook from '../../assets/icon-facebook.png';

export function Footer() {
  return (
    <footer className="bg-[#0A1128] text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="font-bold text-lg mb-4">GIỚI THIỆU</h2>
          <p>Somo Farm Cửu Long là mô hình nông trại kết hợp trải nghiệm sinh thái và tìm hiểu nét đẹp văn hóa của miền đồng bằng sông nước Cửu Long.</p>
        </div>
        <div>
          <h2 className="font-bold text-lg mb-4">LIÊN HỆ VỚI CHÚNG TÔI</h2>
          <p><strong>CÔNG TY CỔ PHẦN SOMO FARM CỬU LONG</strong></p>
          <p>MST: 1501124777</p>
          <p>Ngày cấp: 15/03/2021</p>
          <p>Nơi cấp: Tỉnh Vĩnh Long</p>
          <p>Địa chỉ: Khóm 3, thị trấn Cái Nhum, huyện Mang Thít, Vĩnh Long, Vietnam</p>
          <p>Điện thoại: 089 6164 555</p>
          <p>Email: somofarmcuulong@somogroup.vn</p>
          <div className='flex items-center gap-2 mt-4'>
            <a href="#"><img src={facebook} alt="facebook" className="w-8 h-8"/></a>
          </div>
        </div>
        <div>
          <h2 className="font-bold text-lg mb-4">GÓC CHIA SẺ</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">BÍ KÍP NẤU ĂN VỚI RƯỢU – CHÌA KHÓA CHO VỊ NGON TRỌN VẸN</a></li>
            <li><a href="#" className="hover:underline">TRẠI HÈ LÀ GÌ? TẠI SAO NÊN CHO CON THAM GIA TRẠI HÈ?</a></li>
            <li><a href="#" className="hover:underline">GÀ TRE HẤP HÈM RƯỢU CỬU LONG – HEO RỪNG QUAY SOMO FARM: BÙNG NỔ GIÁC QUAN VỚI HAI MÓN ĂN ĐẶC TRƯNG NHÀ SOMO FARM</a></li>
            <li><a href="#" className="hover:underline">SOMO FARM CỬU LONG CHÍNH THỨC NHẬN CHỨNG NHẬN SẢN PHẨM OCOP 4 SAO TỈNH VĨNH LONG</a></li>
            <li><a href="#" className="hover:underline">CHƯƠNG TRÌNH KHUYẾN MÃI HẤP DẪN DỊP LỄ 30/04 – 01/05 TẠI SOMO FARM</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
