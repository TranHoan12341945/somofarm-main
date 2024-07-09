import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import image1 from '../../assets/image-1.png'; // Cập nhật đường dẫn hình ảnh theo thư mục của bạn
import image2 from '../../assets/image-2.jpg'; // Cập nhật đường dẫn hình ảnh theo thư mục của bạn
import image3 from '../../assets/image-3.jpg'; // Cập nhật đường dẫn hình ảnh theo thư mục của bạn
import image4 from '../../assets/image-4.jpg'; // Cập nhật đường dẫn hình ảnh theo thư mục của bạn


const AboutUsPage = () => {
    return (
      <div>
        <Header />
        <div className="container max-w-6xl px-4 py-10 mx-auto">
          <div className="mb-10">
            <img src={image1} alt="Somofarm Cuu Long" className="w-full rounded-lg" />
          </div>
          <section className="mb-10">
            <h2 className="mb-4 text-3xl font-bold" style={{ color: '#1d3260' }}>Về chúng tôi SOMOFARM CỬU LONG</h2>
            <p className="mb-4 text-lg">
              Somofarm Cửu Long là một trang trại hữu cơ nằm dọc theo dòng sông Cửu Long ở miền Nam Việt Nam.
              Được biết đến với việc sản xuất các loại rau, hoa quả và lúa mạch hữu cơ chất lượng cao, Somofarm
              Cửu Long không chỉ là một nơi cung cấp thực phẩm an toàn và lành mạnh cho người tiêu dùng mà còn
              là biểu tượng của sự chăm sóc môi trường và phát triển bền vững.
            </p>
            <p className="text-lg">
              Với quan điểm "tôn trọng thiên nhiên, yêu quý đời sống", Somofarm Cửu Long không ngừng nghiên cứu
              và áp dụng các phương pháp canh tác và chăm sóc động thực vật hiện đại nhằm tối ưu hóa sản lượng
              mà không gây hại cho môi trường.
            </p>
          </section>
          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-bold" style={{ color: '#1d3260' }}>Thành viên sáng lập và ban điều hành</h2>
            <p className="mb-4 text-lg">
              Somofarm Cửu Long là tâm huyết của ông Nguyễn Lâm Vĩnh Huy – Người sáng lập. Cùng với Hội đồng quản trị
              tập đoàn SomoGroup, đồng thời cũng là một người con sinh ra và lớn lên từ mảnh đất tình người Vĩnh Long.
              Sau nhiều năm gây dựng và phát triển sự nghiệp cá nhân, ông Huy quay trở lại xây dựng và cống hiến cho quê
              hương mình. Bên cạnh ông Huy, Somofarm Cửu Long còn được vận hành bởi những người cộng sự đáng quý.
            </p>
            <div className="flex justify-center">
              <img src={image2} alt="Thành viên sáng lập và ban điều hành" className="rounded-lg" />
            </div>
          </section>
          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-bold" style={{ color: '#1d3260' }}>Tầm nhìn</h2>
            <p className="text-lg">
              Somofarm Cửu Long định hướng trở thành biểu tượng du lịch trải nghiệm sinh thái miền Tây Nam Bộ với những
              nét văn hóa truyền thống được xây dựng công gìn giữ và lưu truyền.
            </p>
          </section>
          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-bold" style={{ color: '#1d3260' }}>Sứ mệnh</h2>
            <p className="mb-4 text-lg">
              Thừa hưởng những lợi thế đặc trưng của tỉnh Vĩnh Long nói riêng và của khu vực miền Tây Nam Bộ nói chung,
              Somofarm Cửu Long tự hào cung cấp cho du khách trong và ngoài nước cũng như người dân địa phương những trải
              nghiệm đáng nhớ về sự kết hợp tuyệt vời giữa hoạt động du lịch sinh thái, nuôi trồng hữu cơ và sản xuất rượu
              truyền thống.
            </p>
            <div className="flex justify-center">
              <img src={image3} alt="Sứ mệnh" className="rounded-lg" />
            </div>
          </section>
          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-bold" style={{ color: '#1d3260' }}>Giá trị cốt lõi</h2>
            <p className="text-lg">
              Trải nghiệm: Chúng tôi đặt trải nghiệm của quý khách hàng tại Somofarm Cửu Long lên hàng đầu, trong tất cả
              các nguyên tắc hành xử và chất lượng dịch vụ mà chúng tôi cung cấp.
            </p>
          </section>
          <section>
            <img src={image4} alt="Giá trị cốt lõi" className="rounded-lg" />
          </section>
        </div>
        <Footer />
      </div>
    );
  };
  
  export default AboutUsPage;
