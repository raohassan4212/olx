import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import ImageUploade from "../../components/ImageUploade";
import { storage, db } from "../../firebaseConfig";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { v4 } from "uuid";

const index = () => {
  let [productDetail, setProductDetail] = useState({
    productId: "",
    productName: "",
    productPrice: 0,
    productDiscount: 0,
    productDescription: "",
    imgs: [],
  });

  const [imageUrl, setImageUrl] = useState([]);
  const [images, setImages] = useState([]);
  const [ID, setID] = useState("");
  const [globalRef, setGlobalRef] = useState(null);

  const productCollectionRef = collection(db, "products");

  useEffect(() => {
    console.log(ID);
    const imagesListRef = ref(storage, `${ID}`);
    setGlobalRef(imagesListRef);
  }, [ID]);

  const uploadProduct = async () => {
    console.log(productDetail);
    // upload multiple image in firebase bucket
    // images.map((img, ind) => {
    //   const imagesRef = ref(storage, `${ID}/${img.name + v4()}`);
    //   uploadBytes(imagesRef, img)
    //     .then((val) => {
    //       console.log("upload", val);
    //       listAll(globalRef)
    //         .then((response) => {
    //           response.items.forEach((item) => {
    //             getDownloadURL(item)
    //               .then((url) => {
    //                 console.log(url);
    //                 if (!productDetail.imgs.includes(url)) {
    //                   productDetail.imgs.push(url);
    //                   // addDoc(productCollectionRef, productDetail);
    //                 }
    //               })
    //               .catch((err) => {
    //                 console.log(err);
    //               });
    //           });
    //         })
    //         .catch((err) => {
    //           console.log(err);
    //         });
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // });

    async function first() {
      const promises = images.map(async (img, ind) => {
        const imagesRef = ref(storage, `${ID}/${img.name + v4()}`);
        await uploadBytes(imagesRef, img)
          .then((val) => {
            console.log("upload", val);
          })
          .catch((err) => {
            console.log(err);
          });
      });

      await Promise.all(promises);

      console.log("promise");

      const resp = await listAll(globalRef);
      console.log("check items", resp);

      const item = resp.items.map(
        async (item) =>
          await getDownloadURL(item).then(async (val) => {
            console.log("new", await val);
            return val;
          })
      );
      console.log("single item", item[0]);

      // const url = await getDownloadURL(item);
      // console.log("bismila", url);

      listAll(globalRef)
        .then((response) => {
          response.items.forEach(async (item) => {
            await getDownloadURL(item)
              .then((url) => {
                console.log(url);
                if (!productDetail.imgs.includes(url)) {
                  setImageUrl((prev) => [...prev, url]);

                  // addDoc(productCollectionRef, productDetail);
                  console.log("second promise");
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

      console.log(imageUrl);
      setProductDetail(async (prev) => ({
        ...prev,
        imgs: imageUrl,
      }));
      addDoc(productCollectionRef, productDetail);
      console.log(productDetail);
    }

    await first();
  };

  const getImages = (imgs) => {
    console.log(imgs);
    setImages(imgs);
  };

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
              setProductDetail((prev) => ({
                ...prev,
                productId: e.target.value,
              }));
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
            onChange={(e) => {
              setProductDetail((prev) => ({
                ...prev,
                productName: e.target.value,
              }));
            }}
          />
        </div>
        <div className="my-2">
          <TextField
            id="outlined-basic"
            label="Product Price"
            variant="outlined"
            fullWidth
            size="small"
            onChange={(e) => {
              setProductDetail((prev) => ({
                ...prev,
                productPrice: e.target.value,
              }));
            }}
          />
        </div>
        <div className="my-2">
          <TextField
            id="outlined-basic"
            label="Product Discount"
            variant="outlined"
            fullWidth
            size="small"
            onChange={(e) => {
              setProductDetail((prev) => ({
                ...prev,
                productDiscount: e.target.value,
              }));
            }}
          />
        </div>
        <div className="my-2">
          <TextField
            id="outlined-basic"
            label="Product Description"
            variant="outlined"
            fullWidth
            size="small"
            multiline
            rows={4}
            onChange={(e) => {
              setProductDetail((prev) => ({
                ...prev,
                productDescription: e.target.value,
              }));
            }}
          />
        </div>
        <div>
          <ImageUploade getImages={getImages} />
        </div>
        <button onClick={uploadProduct} className="w-full bg-[#007bff] text-white font-semibold rounded py-2">upload</button>
      </div>
    </div>
  );
};

export default index;
