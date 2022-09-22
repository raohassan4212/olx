import React, { useState, useEffect } from "react";

const ImageUploade = ({ getImages }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getImages(images);
  }, [images]);

  function addImage(e) {
    var file = e?.target?.files?.[0];
    setImages((images) => [...images, file]);

    // const reader = new FileReader();
    // reader.onload = () => {
    //   setImages((prevObject) => [
    //     ...prevObject,
    //     { imgUrl: reader?.result, image: file },
    //   ]);
    // };
    // reader.readAsDataURL(file);
  }

  function crossImage(imageName) {
    const imageDeleted = images.filter((val) => {
      return imageName != val.name;
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
      <div className="upload-img-main-box">
        {images.map((val, i) => (
          <div className="upload-product" key={i}>
            <span className="inline-span">
              <span className="file-type-color">
                {val?.name?.split(".")[1]}
              </span>
            </span>
            <span className="inline-span">
              <p className="file-spec">{val?.name}</p>
            </span>
            <span
              className="selected-show-image-crose"
              onClick={() => crossImage(val?.name)}
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
