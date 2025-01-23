import { useState, useEffect } from 'react';
import img1 from '../../assets/ImageSlider/WeddingFun.jpg';
import img2 from '../../assets/ImageSlider/Photographs.jpg';
import img3 from '../../assets/ImageSlider/BridalWear.jpg';
import img4 from '../../assets/ImageSlider/Invitation.jpg';
import img5 from '../../assets/ImageSlider/BridalMakup.jpg';

const ImageSlider2 = () => {
  const initialImgs = [
    {
      img: img1,
      venue: 'Wedding Function',
    },
    {
      img: img2,
      venue: 'Photographs',
    },
    {
      img: img3,
      venue: 'BridalWear',
    },
    {
      img: img4,
      venue: 'Invitations',
    },
    {
      img: img5,
      venue: 'Bridal Makeup',
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
  
      <div className="flex transition-transform ease-in-out duration-500 justify-between" >
        {imgs.slice(0, 4).map((i, index) => (
          <div
            key={index}
            className=" w-[22%] flex-shrink-0  group" 
          >
            <img
              src={i.img} alt=""
              className="object-cover h-80 w-full shadow-2xl hover:shadow-sm shadow-black rounded-2xl"
            />
            <div className='text-[#e72e77] pt-5 text-center'>
              <p className=" text-xl font-medium italic ">{i.venue} </p>
            </div>
          </div>
        ))}
      </div>
    
  );
};

export default ImageSlider2;
