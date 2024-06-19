import hotel1 from '../../assets/hotel-1.jpeg';
import hotel2 from '../../assets/hotel-2.jpeg';
import hotel3 from '../../assets/hotel-3.jpeg';
import hotel4 from '../../assets/hotel-4.jpeg';
import hotel5 from '../../assets/hotel-5.jpeg'; // Add more images as needed
import hotel6 from '../../assets/hotel-6.jpeg';
import hotel7 from '../../assets/hotel-7.jpeg';
import hotel8 from '../../assets/hotel-8.jpeg';
import hotel9 from '../../assets/hotel-9.jpeg';

export const roomsData = [
  {
    img: hotel1,
    name: 'Phòng vip 1',
    location: 'Kalyani Nagar, Pune | 3.3 kms từ trung tâm thành phố',
    price: '18,900',
    status: 'Available',
  },
  {
    img: hotel2,
    name: 'Phòng vip 2',
    location: '500 meters từ Công viên Infotech Rajiv Gandhi',
    price: '25,300',
    status: 'Available',
  },
  {
    img: hotel3,
    name: 'Phòng vip hơn',
    location: '5.4 km từ trung tâm',
    price: '11,300',
    status: 'Available',
  },
  {
    img: hotel4,
    name: 'Phòng vip hơn nữa',
    location: 'Weikfield IT City Infopark | 7.1 km từ trung tâm',
    price: '10,200',
    status: 'Occupied',
  },
  {
    img: hotel5,
    name: 'Phòng vip 3',
    location: 'Kalyani Nagar, Pune | 3.3 kms từ trung tâm thành phố',
    price: '20,500',
    status: 'Available',
  },
  {
    img: hotel6,
    name: 'Phòng vip 4',
    location: '500 meters từ Công viên Infotech Rajiv Gandhi',
    price: '30,000',
    status: 'Available',
  },
  {
    img: hotel7,
    name: 'Phòng vip 5',
    location: '5.4 km từ trung tâm',
    price: '15,000',
    status: 'Available',
  },
  {
    img: hotel8,
    name: 'Phòng vip 6',
    location: 'Weikfield IT City Infopark | 7.1 km từ trung tâm',
    price: '12,000',
    status: 'Occupied',
  },
  {
    img: hotel9,
    name: 'Phòng vip 7',
    location: 'Weikfield IT City Infopark | 7.1 km từ trung tâm',
    price: '18,000',
    status: 'Available',
  },
];

export const bookedRoomsData = [
  {
    img: hotel1,
    name: 'Phòng vip 1',
    location: 'Kalyani Nagar, Pune | 3.3 kms từ trung tâm thành phố',
    price: '18,900',
    status: 'Booked',
    bookedBy: 'Nguyen Van A',
    bookedDate: '2023-06-20',
  },
  {
    img: hotel2,
    name: 'Phòng vip 2',
    location: '500 meters từ Công viên Infotech Rajiv Gandhi',
    price: '25,300',
    status: 'Booked',
    bookedBy: 'Tran Thi B',
    bookedDate: '2023-06-21',
  },
  {
    img: hotel3,
    name: 'Phòng vip hơn',
    location: '5.4 km từ trung tâm',
    price: '11,300',
    status: 'Booked',
    bookedBy: 'Le Van C',
    bookedDate: '2023-06-22',
  },
  {
    img: hotel4,
    name: 'Phòng vip hơn nữa',
    location: 'Weikfield IT City Infopark | 7.1 km từ trung tâm',
    price: '10,200',
    status: 'Booked',
    bookedBy: 'Pham Thi D',
    bookedDate: '2023-06-23',
  },
];

export * from "@/Admin/data/statistics-cards-data";
export * from "@/Admin/data/statistics-charts-data";
export * from "@/Admin/data/projects-table-data";
export * from "@/Admin/data/orders-overview-data";
export * from "@/Admin/data/platform-settings-data";
export * from "@/Admin/data/conversations-data";
export * from "@/Admin/data/projects-data";
export * from "@/Admin/data/authors-table-data";
