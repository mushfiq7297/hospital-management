
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const DiseaseSwiper = () => {
  const cards = [
    {
      imgSrc: 'https://via.placeholder.com/150',
      diseaseName: 'Disease 1',
      doctorName: 'Dr. John Doe',
      location: 'Location 1',
      price: '$100',
    },
    {
      imgSrc: 'https://via.placeholder.com/150',
      diseaseName: 'Disease 2',
      doctorName: 'Dr. Jane Smith',
      location: 'Location 2',
      price: '$150',
    },
    {
      imgSrc: 'https://via.placeholder.com/150',
      diseaseName: 'Disease 3',
      doctorName: 'Dr. Alice Brown',
      location: 'Location 3',
      price: '$200',
    },
    {
      imgSrc: 'https://via.placeholder.com/150',
      diseaseName: 'Disease 4',
      doctorName: 'Dr. Bob White',
      location: 'Location 4',
      price: '$250',
    },
    {
      imgSrc: 'https://via.placeholder.com/150',
      diseaseName: 'Disease 5',
      doctorName: 'Dr. Carol Green',
      location: 'Location 5',
      price: '$300',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 lg:max-w-6xl">
      <Swiper
        modules={[Navigation]}
        navigation
        slidesPerView={4}
        spaceBetween={30}
        className="mySwiper"
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <img
                src={card.imgSrc}
                alt={card.diseaseName}
                className="h-40 w-full object-cover mb-4 rounded"
              />
              <h2 className="text-xl font-bold mb-2">{card.diseaseName}</h2>
              <p className="text-gray-700 mb-1">Doctor: {card.doctorName}</p>
              <p className="text-gray-700 mb-1">Location: {card.location}</p>
              <p className="text-gray-700 mb-1">Price: {card.price}</p>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
                Book Now
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DiseaseSwiper;
