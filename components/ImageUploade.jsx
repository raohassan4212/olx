import React, { useState } from "react";

const ImageUploade = () => {
  const [images, setImages] = useState([]);

  async function addImage(e) {
    var file = e?.target?.files?.[0];

    const reader = new FileReader();
    reader.onload = () => {
      setImages((prevObject) => [
        ...prevObject,
        { imgUrl: reader?.result, imageName: file.name },
      ]);
    };
    reader.readAsDataURL(file);
  }

  function crossImage(imageObject) {
    const imageDeleted = images.filter((val, ind) => {
      return imageObject != val.imageName;
    });
    setImages(imageDeleted);
  }

  return (
    <div>
      <div className="file-upload">
        <div className="image-upload-wrap">
          <input
            className="file-upload-input"
            type="file"
            onChange={(e) => addImage(e)}
            accept="image/*"
          />
          <div className="drag-text">
            <h3>Add Product Image</h3>
          </div>
        </div>
      </div>
      <div>
        {images.map((val, i) => (
          <div className="upload-product" key={i}>
            <span className="inline-span">
              <span className="file-type-color">
                {val?.imageName?.split(".")[1]}
              </span>
            </span>
            <span className="inline-span">
              <p className="file-spec">{val?.imageName}</p>
            </span>
            <span
              className="selected-show-image-crose"
              onClick={() => crossImage(val?.imageName)}
            >
              <b className="cross">x</b>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageUploade;
