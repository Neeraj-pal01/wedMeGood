import { useState, useEffect } from 'react';
import neerajImg from '../../assets/neeraj.png';

const ImageSlider = ({sliceCount}) => {
  const initialImgs = [
    {
      img: neerajImg,
      venue: 'Haryana',
    },
    {
      img: 'https://i.pinimg.com/736x/09/56/88/0956888e3b4422327e7bec8b84a07dde.jpg',
      venue: 'Chennai',
    },
    {
      img: 'https://images.stockcake.com/public/c/a/f/caf3546a-591a-4fe5-b21e-2b0be1df0a11_large/traditional-indian-wedding-stockcake.jpg',
      venue: 'Mumbai',
    },
    {
      img: 'https://images.stockcake.com/public/f/a/7/fa76812e-16a2-4a87-8ead-b78b726c9636_large/traditional-indian-wedding-stockcake.jpg',
      venue: 'Indore',
    },
    {
      img: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201812/nickyanka_4.jpeg?size=690:388',
      venue: 'Banglore',
    },
  ];

  const [imgs, setImgs] = useState(initialImgs);

  useEffect(() => {
    const interval = setInterval(() => {
      slide();
    }, 3000); // Slide every 3 seconds

    return () => clearInterval(interval);
  }, [imgs]);

  const slide = () => {
    const updatedImgs = [...imgs];
    const firstImg = updatedImgs.shift();
    updatedImgs.push(firstImg);
    setImgs(updatedImgs);
  };

  return (
  
      <div className="flex transition-transform ease-in-out duration-500 justify-center md:justify-between" >
        {imgs.slice(0, sliceCount).map((i, index) => (
          <div
            key={index}
            className="relative w-[100%] md:w-[47%] lg:w-[32%] flex-shrink-0 h-80 group " 
          >
            <img
              src={i.img} alt={i.venue}
              className="object-cover h-full w-full  hover:rounded-xl shadow-xl shadow-black"
            />
            <div className="absolute bottom-0 text-white bg-gradient-to-b  pt-3  w-full  from-gray-700/10 from-5% to-black/50 to-70% ">
            <div className='group-hover:-translate-y-2 pl-3 transition-transform ease-in-out duration-500 '>
              <p className=" text-3xl ">{i.venue} Venue</p>
              <p className="text-sm pb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            </div>
          </div>
        ))}
      </div>
    
  );
};

export default ImageSlider;
