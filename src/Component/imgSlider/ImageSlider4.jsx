import React, { useState, useEffect } from "react";
import img1 from "../../assets/ImageSlider4/1.jpg";
import img2 from "../../assets/ImageSlider4/2.jpg";
import img3 from "../../assets/ImageSlider4/3.jpg";
import img4 from "../../assets/ImageSlider4/4.jpeg";

const ImageSlider4 = ({ sliceCount=3 }) => {
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
      img: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201812/nickyanka_4.jpeg?size=690:388',
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
          className="w-[97%] h-full lg:w-[33%] bg-white flex-shrink-0 overflow-hidden"
        >
          <img
            src={i.img} alt="img"
            className="object-cover h-80 w-full p-1"
          />
        </div>

      ))}
    </div>
  );
};

export default ImageSlider4;