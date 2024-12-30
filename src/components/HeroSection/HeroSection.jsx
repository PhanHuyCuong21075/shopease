import React from 'react';
import HeroImg from '../../assets/img/hero-img.png';

const HeroSection = () => {
    return (
        <div
            className="relative flex items-center justify-start bg-cover bg-center text-left h-screen w-full"
            style={{
                backgroundImage: `url(${HeroImg})`,
            }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <main className="relative z-10 px-10 lg:px-24">
                <div className="text-left">
                    <h2 className="text-4xl font-bold text-white">Cu Cương Shop</h2>
                    <p className="mt-5 text-xl text-white sm:mt-7 sm:max-w-xl">
                        Vẻ đẹp 4 mùa
                    </p>
                    <p className="mt-2 text-xl text-white sm:mt-3 sm:max-w-xl">
                        Nâng tầm cuộc chơi
                    </p>
                    <button className="mt-8 px-6 py-3 text-lg font-semibold text-white bg-black border border-white rounded hover:bg-white hover:text-black transition">
                        Mua sắm ngay
                    </button>
                </div>
            </main>
        </div>
    );
};

export default HeroSection;
