import React from 'react';
import { FaFacebook, FaInstagram, FaPhoneAlt } from 'react-icons/fa';
import { SiZalo } from 'react-icons/si';

const Contact = () => {
    return (
        <div className="flex flex-col items-center justify-center bg-gray-100 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Liên hệ với chúng tôi</h2>
            <p className="text-gray-600 mb-6">Kết nối với chúng tôi qua các nền tảng sau:</p>
            <div className="flex space-x-6">
                {/* Zalo */}
                <a
                    href="https://zalo.me/0852080194"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition"
                >
                    <SiZalo size={24} />
                    <span>Zalo</span>
                </a>

                {/* Facebook */}
                <a
                    href="https://www.facebook.com/Cuonglinh3109"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-blue-800 hover:text-blue-900 transition"
                >
                    <FaFacebook size={24} />
                    <span>Facebook</span>
                </a>

                {/* Instagram */}
                <a
                    href="https://www.instagram.com/cuongph09/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-pink-500 hover:text-pink-600 transition"
                >
                    <FaInstagram size={24} />
                    <span>Instagram</span>
                </a>

                {/* Phone */}
                <a
                    href="tel:+84852080194"
                    className="flex items-center space-x-2 text-green-500 hover:text-green-600 transition"
                >
                    <FaPhoneAlt size={24} />
                    <span>0852 080 194</span>
                </a>
            </div>
        </div>
    );
};

export default Contact;
