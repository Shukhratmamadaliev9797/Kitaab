import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createBook } from "../actions/bookActions";
import { useNavigate } from "react-router-dom";

import Loader from "../elements/Loader";
import { BOOK_CREATE_RESET } from "../constants/bookConstants";

export default function CreateListing() {
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [image4, setImage4] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [ISBN, setISBN] = useState("");
  const [yearPublish, setYearPublish] = useState();
  const [condition, setCondition] = useState("");
  const [singleStock, setSingleStock] = useState("Single");
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [loadingUpload, setLoadingUpload] = useState(false);
  const [errorUpload, setErrorUpload] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userSignIn = useSelector((state) => state.userSignIn);
  const { userInfo } = userSignIn;

  const bookCreate = useSelector((state) => state.bookCreate);
  const {
    loading: createLoading,
    error: createError,
    success: successCreate,
  } = bookCreate;

  const createYears = (startYear) => {
    var currentYear = new Date().getFullYear(),
      years = [];
    startYear = startYear || 1980;
    while (startYear <= currentYear) {
      years.push(startYear++);
    }
    return years;
  };
  const years = createYears(1900);

  const uploadImageHandler1 = async (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append("image", file);
    setLoadingUpload(true);
    try {
      const { data } = await axios.post("/api/uploads/s3", bodyFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      setImage1(data);
      setLoadingUpload(false);
      console.log(image1);
    } catch (error) {
      setErrorUpload(error.message);
      setLoadingUpload(false);
    }
  };

  const uploadImageHandler2 = async (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append("image", file);
    setLoadingUpload(true);
    try {
      const { data } = await axios.post("/api/uploads/s3", bodyFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      setImage2(data);
      setLoadingUpload(false);
    } catch (error) {
      setErrorUpload(error.message);
      setLoadingUpload(false);
    }
  };

  const uploadImageHandler3 = async (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append("image", file);
    setLoadingUpload(true);
    try {
      const { data } = await axios.post("/api/uploads/s3", bodyFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      setImage3(data);
      setLoadingUpload(false);
    } catch (error) {
      setErrorUpload(error.message);
      setLoadingUpload(false);
    }
  };
  const uploadImageHandler4 = async (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append("image", file);
    setLoadingUpload(true);
    try {
      const { data } = await axios.post("/api/uploads/s3", bodyFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      setImage4(data);
      setLoadingUpload(false);
    } catch (error) {
      setErrorUpload(error.message);
      setLoadingUpload(false);
    }
  };

  useEffect(() => {
    if (successCreate) {
      navigate("/profile/selling-orders");
      dispatch({ type: BOOK_CREATE_RESET });
    }
  }, [successCreate, navigate, dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createBook(
        image1,
        image2,
        image3,
        image4,
        title,
        author,
        ISBN,
        yearPublish,
        condition,
        singleStock,
        quantity,
        price,
        description
      )
    );
  };

  return (
    <div className="createListing">
      {createLoading && <Loader />}
      {createError && createError}
      <div className="createListing__container">
        <h2>Create Listing</h2>
        <form onSubmit={submitHandler}>
          <div className="createListing__pictures">
            {image1 ? (
              <img src={image1} alt="" />
            ) : (
              <i class="fas fa-image"></i>
            )}
            {image2 ? (
              <img src={image2} alt="" />
            ) : (
              <i class="fas fa-image"></i>
            )}
            {image3 ? (
              <img src={image3} alt="" />
            ) : (
              <i class="fas fa-image"></i>
            )}
            {image4 ? (
              <img src={image4} alt="" />
            ) : (
              <i class="fas fa-image"></i>
            )}
          </div>
          <div className="createListing__inputBox1">
            <label htmlFor="">Choose image 1</label>
            <input type="file" onChange={uploadImageHandler1} />
            {loadingUpload && "Uploading..."}
            {errorUpload && errorUpload}
          </div>
          <div className="createListing__inputBox1">
            <label htmlFor="">Choose image 2</label>
            <input type="file" onChange={uploadImageHandler2} />
            {loadingUpload && "Uploading..."}
            {errorUpload && errorUpload}
          </div>
          <div className="createListing__inputBox1">
            <label htmlFor="">Choose image 3</label>
            <input type="file" onChange={uploadImageHandler3} />
            {loadingUpload && "Uploading..."}
            {errorUpload && errorUpload}
          </div>
          <div className="createListing__inputBox1">
            <label htmlFor="">Choose image 4</label>
            <input type="file" onChange={uploadImageHandler4} />
            {loadingUpload && "Uploading..."}
            {errorUpload && errorUpload}
          </div>
          <div className="createListing__inputBox1">
            <label htmlFor="">Title</label>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="createListing__inputBox1">
            <label htmlFor="">Author</label>
            <input
              type="text"
              placeholder="Author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
          </div>
          <div className="createListing__inputBox1">
            <label htmlFor="">ISBN code</label>
            <input
              type="text"
              placeholder="ISBN code"
              value={ISBN}
              onChange={(e) => setISBN(e.target.value)}
              required
            />
          </div>
          <div className="createListing__inputBox1">
            <label htmlFor="">Year Published</label>
            <select
              name=""
              id=""
              value={yearPublish}
              onChange={(e) => setYearPublish(e.target.value)}
              required
            >
              <option value="" selected hidden disabled>
                Choose Publish Year
              </option>
              {years.map((year) => {
                return <option value={year}>{year}</option>;
              })}
            </select>
          </div>
          <div className="createListing__inputBox1">
            <label htmlFor="">Condition</label>
            <select
              name=""
              id=""
              value={condition}
              onChange={(e) => setCondition(e.target.value)}
            >
              <option value="new">New</option>
              <option value="Like New">Like New</option>
              <option value="Good">Good</option>
            </select>
          </div>
          <div className="createListing__inputBox1">
            <label htmlFor="">Single or In stock</label>
            <select
              name=""
              id=""
              value={singleStock}
              onChange={(e) => setSingleStock(e.target.value)}
            >
              <option value="Single">Single Item</option>
              <option value="In Stock">In Stock</option>
            </select>
          </div>
          {singleStock !== "Single" ? (
            <div className="createListing__inputBox1">
              <label htmlFor="">Quantity</label>
              <input
                type="number"
                placeholder="Quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                required
              />
            </div>
          ) : (
            ""
          )}

          <div className="createListing__inputBox1">
            <label htmlFor="">Price</label>
            <input
              type="number"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          <div className="createListing__inputBox1">
            <label htmlFor="">Description</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <button type="submit">Create Listing</button>
        </form>
      </div>
    </div>
  );
}
