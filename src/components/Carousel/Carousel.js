import { useState } from 'react';
import Image from 'next/image';

export const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const images = [
        '/assets/banners/1.jpg',
        '/assets/banners/2.jpg',
        '/assets/banners/3.jpg',
        '/assets/banners/4.jpg',
        '/assets/banners/5.png',
    ];

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
    };

    return (
        <div id="default-carousel" className="relative w-full -z-1" data-carousel="slide" style={{ zIndex: 0, marginBottom: "-40px" }}>
            <div className="relative -z-1 overflow-hidden" style={{height: "17vw"}}>
                {images.map((src, index) => (
                    <div
                        key={index}
                        className={`${ index === currentSlide ? 'translate-x-0' : 'translate-x-full'
                            } transition-transform z-0 duration-1000 ease-in-out absolute w-full`}
                        data-carousel-item
                    >
                        <img src={src} width="100%" style={{zIndex: 0}} layout="fill" objectFit="cover" alt={`Carousel Image ${ index + 1 }`} />
                    </div>
                ))}
            </div>

            <button
                type="button"
                className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-prev
                onClick={prevSlide}
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/70 group-hover-bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus-ring-gray-800/70 group-focus:outline-none">
                    <svg
                        className="w-4 h-4 text-white dark:text-gray-800"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 1 1 5l4 4"
                        />
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button
                type="button"
                className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-next
                onClick={nextSlide}
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/70 group-hover-bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus-ring-gray-800/70 group-focus:outline-none">
                    <svg
                        className="w-4 h-4 text-white dark:text-gray-800"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m1 9 4-4-4-4"
                        />
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
    );
};
