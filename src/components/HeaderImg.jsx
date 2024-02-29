import { useState } from "react";
export default function HeaderImg() {
  const [imgUrl, setImgUrl] = useState("/src/assets/image-omelette.jpeg");
  const arrImgs = [
    "/src/assets/image-omelette.jpeg",
    "/src/assets/makrona.jpg",
    "/src/assets/Ash.jpg",
    "/src/assets/donation.jpg",
  ];

  const handleImageChange = (indexChange) => {
    const currentImg = arrImgs.indexOf(imgUrl);
    const newIndex =
      (currentImg + indexChange + arrImgs.length) % arrImgs.length;
    setImgUrl(arrImgs[newIndex]);
  };

  return (
    <section className="header-img">
      <img src={imgUrl} alt="omelette" />
      <div className="control-bt">
        <button className="prev btn" onClick={() => handleImageChange(-1)}>
          Prev
        </button>
        <button className="next btn" onClick={() => handleImageChange(1)}>
          Next
        </button>
      </div>
    </section>
  );
}
