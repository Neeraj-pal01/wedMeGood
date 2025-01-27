import { useState, useEffect } from 'react';
import neerajImg from '../../assets/neeraj.png';
import img1 from '../../assets/ImageSlider3/1.jpg';
import img2 from '../../assets/ImageSlider3/2.jpg';
import img3 from '../../assets/ImageSlider3/3.png';
import img4 from '../../assets/ImageSlider3/4.png';
import img5 from '../../assets/ImageSlider3/5.png';

const ImageSlider3 = ({ sliceCount }) => {
  const initialImgs = [
    {
      img: img1,
    },
    {
      img: img2,
    },
    {
      img: img3,
    },
    {
      img: img4,
    },
    {
      img: img5,
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
    <div className="flex justify-between" >
      {imgs.slice(0, sliceCount).map((i, index) => (
        <div
          key={index}
          className="w-[97%] lg:w-[32%] flex-shrink-0  relative border-[0.5px] border-gray-400 rounded-xl shadow-xl overflow-hidden"
        >
          <img
            src={i.img} alt="img"
            className="object-cover h-60 w-full"
          />
          <div className='bg-white flex flex-col justify-center gap-2 pl-5 py-3'>
            <p className=" text-lg"> Lorem, ipsum.</p>
            <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing ipsum dolor sit amet  ipsum dolor sit amet.</p>
            <span className='text-xs text-gray-500'>25 january 2025</span>
          </div>
        </div>

      ))}
    </div>

  );
};

export default ImageSlider3;
