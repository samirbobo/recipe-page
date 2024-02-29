import { useState } from "react";
import omelette from "../assets/image-omelette.jpeg";
import makrona from "../assets/makrona.jpg";
import Ash from "../assets/Ash.jpg";
import donation from "../assets/donation.jpg";

export default function HeaderImg() {
  const [imgUrl, setImgUrl] = useState(omelette);
  const arrImgs = [omelette, makrona, Ash, donation];

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
