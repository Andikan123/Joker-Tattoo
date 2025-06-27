import React from 'react';
import { FaInstagram, FaFacebookF, FaWhatsapp, FaTiktok } from 'react-icons/fa6';

const SocialWidget = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* Instagram */}
      <a
        href="https://instagram.com/johncreative"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-br from-pink-400 to-pink-600 p-3 rounded-full text-white shadow-lg hover:scale-110 transition"
      >
        <FaInstagram size={20} />
      </a>

      {/* Facebook */}
      <a
        href="https://facebook.com/johncreative"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-br from-blue-600 to-blue-800 p-3 rounded-full text-white shadow-lg hover:scale-110 transition"
      >
        <FaFacebookF size={20} />
      </a>

      {/* TikTok */}
      <a
        href="https://tiktok.com/@johncreative"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-br from-gray-900 to-black p-3 rounded-full text-white shadow-lg hover:scale-110 transition"
      >
        <FaTiktok size={20} />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/1234567890" // Replace with actual WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-br from-green-500 to-green-700 p-3 rounded-full text-white shadow-lg hover:scale-110 transition"
      >
        <FaWhatsapp size={20} />
      </a>
    </div>
  );
};

export default SocialWidget;
