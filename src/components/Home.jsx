// Home.jsx
// Shrawan Khanal
// 301357961
// 2024-08-14
import React from 'react';
import { BsFacebook, BsTwitter, BsInstagram, BsPinterest } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import MyLogo from '../assets/heroMain.png';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <section className="text-center p-8 bg-white shadow-lg rounded-lg max-w-md">
        <img src={MyLogo} alt="Logo" className="w-24 h-24 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-blue-900 mb-4">Welcome to My Website</h1>
        <p className="text-lg text-gray-700 mb-4">
        I'm thrilled to have you here! Dive into my content and feel free to connect with me on social media.
        </p>
        <p className="text-md text-gray-600 mb-6">
        My mission is to deliver top-quality content that both inspires and educates my audience. I aim to be a reliable source of information and a guiding light of positivity in the digital space.
        </p>
        <Link to="/about" className="inline-block bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 mb-6">
          Learn More About Me
        </Link>
        <div className="flex justify-center space-x-4">
          <a href="https://www.facebook.com/fb.shrawan" className="text-blue-600 hover:text-blue-800">
            <BsFacebook size={30} />
          </a>
          <a href="https://x.com/shrawan_khanal" className="text-blue-400 hover:text-blue-600">
            <BsTwitter size={30} />
          </a>
          <a href="https://www.instagram.com/sh.r.a.w.an/" className="text-pink-400 hover:text-pink-600">
            <BsInstagram size={30} />
          </a>
          <a href="https://www.pinterest.com" className="text-red-500 hover:text-red-700">
            <BsPinterest size={30} />
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;
