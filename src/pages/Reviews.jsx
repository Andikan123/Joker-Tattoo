import React, { useState, useEffect } from "react";
import { db } from "../firebaseConfig";
import {
  collection,
  addDoc,
  getDocs,
  serverTimestamp,
  query,
  orderBy,
} from "firebase/firestore";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    quote: "",
    image: "",
  });

  const reviewsRef = collection(db, "reviews");

  const fetchReviews = async () => {
    const q = query(reviewsRef, orderBy("timestamp", "desc"));
    const snapshot = await getDocs(q);
    const reviewsData = snapshot.docs.map((doc) => doc.data());
    setReviews(reviewsData);
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.name && formData.quote) {
      await addDoc(reviewsRef, {
        ...formData,
        image:
          formData.image ||
          "https://cdn-icons-png.flaticon.com/512/1077/1077114.png",
        timestamp: serverTimestamp(),
      });
      setFormData({ name: "", quote: "", image: "" });
      fetchReviews(); // refresh the reviews list
    }
  };

  return (
    <div
      className="min-h-screen px-6 py-20 bg-gradient-to-br from-[#2d2d2d] via-[#3c1e1e] to-[#7b1e1e] text-white"
      style={{ fontFamily: '"Cormorant Garamond", serif' }}
    >
      <h1
        className="text-5xl md:text-6xl font-[Cinzel_Decorative] uppercase tracking-widest text-center mb-16"
        style={{
          background: "linear-gradient(90deg, #ff4444, #ffffff, #ff4444)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Client Reviews
      </h1>

      {/* Review Form */}
      <div className="max-w-2xl mx-auto mb-16 bg-zinc-900 p-6 rounded-xl shadow-lg border border-red-700">
        <h2 className="text-2xl mb-4 font-semibold text-center text-red-400 uppercase tracking-wider">
          Leave a Review
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md bg-zinc-800 text-white border border-red-500 focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <textarea
            name="quote"
            placeholder="Your Review"
            value={formData.quote}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-3 rounded-md bg-zinc-800 text-white border border-red-500 focus:outline-none focus:ring-2 focus:ring-red-600"
          ></textarea>
          <input
            type="text"
            name="image"
            placeholder="Image URL (optional)"
            value={formData.image}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md bg-zinc-800 text-white border border-red-500 focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <button
            type="submit"
            className="w-full py-3 rounded-md bg-red-600 hover:bg-red-700 transition font-semibold uppercase tracking-wide shadow-md"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Review Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-zinc-800 bg-opacity-60 backdrop-blur-md rounded-xl p-6 shadow-lg border border-red-700 hover:scale-105 transition"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={review.image}
                alt={review.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-red-500"
              />
              <div className="text-red-400 font-semibold tracking-wide">
                {review.name}
              </div>
            </div>
            <p className="text-lg italic text-gray-200">“{review.quote}”</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
