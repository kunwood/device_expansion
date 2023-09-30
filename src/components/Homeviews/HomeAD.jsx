import React, { useState, useEffect } from "react";
import event1 from "../../assets/img/event1.svg";
import event2 from "../../assets/img/event2.svg";

const HomeAD = () => {
  const [eventImageIndex, setEventImageIndex] = useState(0);

  // 이미지와 해당 이미지에 대한 링크 정보를 배열로 정의
  const imagesWithLinks = [
    { image: event1, link: "/" },
    { image: event2, link: "/" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setEventImageIndex(
        (prevIndex) => (prevIndex + 1) % imagesWithLinks.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative object-cover h-full z-0 overflow-hidden">
      {imagesWithLinks.map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={item.image}
            alt={`Image ${index + 1}`}
            className={`h-full transition-opacity duration-1000 ${
              index === eventImageIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
            }}
          />
        </a>
      ))}
    </div>
  );
};

export default HomeAD;
