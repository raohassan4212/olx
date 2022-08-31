import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import ImageUploade from "../../components/ImageUploade";
import { storage, db } from "../../firebaseConfig";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { v4 } from "uuid";

const index = () => {
  let productDetail = {
    productId: "",
    productName: "",
    productPrice: 0,
    productDiscount: 0,
    productDescription: "",
    imgs: [],
  };

  const [images, setImages] = useState([]);
  const [ID, setID] = useState("");
  const [globalRef, setGlobalRef] = useState(null);

  const productCollectionRef = collection(db, "products");

  useEffect(() => {
    console.log(ID);
    const imagesListRef = ref(storage, `${ID}`);
    setGlobalRef(imagesListRef);
  }, [ID]);

  useEffect(() => {
    async function hello() {
      console.log("first");
      setTimeout(() => {
        console.log("second");
      }, 3000);
      console.log("third");
    }
    hello();
  }, []);

  const uploadProduct = () => {
    // upload multiple image in firebase bucket
    images.map((img, ind) => {
      const imagesRef = ref(storage, `${ID}/${img.name + v4()}`);
      uploadBytes(imagesRef, img)
        .then((val) => {
          console.log("upload", val);
          listAll(globalRef)
            .then((response) => {
              response.items.forEach((item) => {
                getDownloadURL(item)
                  .then((url) => {
                    console.log(url);
                    if (!productDetail.imgs.includes(url)) {
                      productDetail.imgs.push(url);

                      // addDoc(productCollectionRef, productDetail);
                    }
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              });
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  const getImages = (imgs) => {
    console.log(imgs);
    setImages(imgs);
  };

  function check() {
    console.log(productDetail.imgs);
  }

  return (
    <div>
      <div className="mx-16 my-10">
        <div className="my-2">
          <TextField
            id="outlined-basic"
            label="Product ID"
            variant="outlined"
            fullWidth
            size="small"
            onChange={(e) => {
              productDetail.productId = e.target.value;
              setID(e.target.value);
            }}
          />
        </div>
        <div className="my-2">
          <TextField
            id="outlined-basic"
            label="Product Name"
            variant="outlined"
            fullWidth
            size="small"
            onChange={(e) => (productDetail.productName = e.target.value)}
          />
        </div>
        <div className="my-2">
          <TextField
            id="outlined-basic"
            label="Product Price"
            variant="outlined"
            fullWidth
            size="small"
            onChange={(e) => (productDetail.productPrice = e.target.value)}
          />
        </div>
        <div className="my-2">
          <TextField
            id="outlined-basic"
            label="Product Discount"
            variant="outlined"
            fullWidth
            size="small"
            onChange={(e) => (productDetail.productDiscount = e.target.value)}
          />
        </div>
        <div className="my-2">
          <TextField
            id="outlined-basic"
            label="Product Detail"
            variant="outlined"
            fullWidth
            size="small"
            multiline
            rows={4}
            onChange={(e) =>
              (productDetail.productDescription = e.target.value)
            }
          />
        </div>
        <div>
          <ImageUploade getImages={getImages} />
        </div>
        <button onClick={uploadProduct}>upload</button>
        <button onClick={check}>leie</button>
      </div>
    </div>
  );
};

export default index;
