'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const mobileImages = ['/images/d1.png', '/images/d2.png', '/images/d3.png', '/images/d4.png', '/images/d5.png', '/images/d6.png'];

const desktopImages = [
    '/images/mobile1.png',
    '/images/mobile2.jpg',
    '/images/mobile3.png',
    '/images/mobile4.jpg',
    '/images/mobile5.png',
    '/images/mobile6.png',
];

export default function ImageCarousel() {
    const [isMobile, setIsMobile] = useState(false);
    const progressRefs = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        const updateScreen = () => setIsMobile(window.innerWidth <= 768);
        updateScreen();
        window.addEventListener('resize', updateScreen);
        return () => window.removeEventListener('resize', updateScreen);
    }, []);

    const images = isMobile ? mobileImages : desktopImages;

    useEffect(() => {
        let prevIndex = -1;

        const interval = setInterval(() => {
            const active = document.querySelector('.swiper-slide-active');

            if (!active) return;

            const img = active.querySelector('img');
            const src = img?.getAttribute('src');

            if (!src) return;

            const matchedIndex = images.findIndex((path) => src.includes(path.split('/')[2]));

            if (matchedIndex === -1) return;

            if (matchedIndex !== prevIndex) {
                if (matchedIndex === 0) {
                    progressRefs.current.forEach((bar) => {
                        bar.style.transition = 'none';
                        bar.style.transform = 'scaleX(0)';
                    });
                }

                progressRefs.current.forEach((bar, i) => {
                    if (i === matchedIndex) {
                        bar.style.transition = 'transform 5000ms ease';
                        bar.style.transform = 'scaleX(1)';
                    }
                });

                prevIndex = matchedIndex;
            }
        }, 100);

        return () => clearInterval(interval);
    }, [images]);

    return (
        <div className="relative mx-auto w-full max-w-3xl">
            <Swiper modules={[Autoplay]} autoplay={{ delay: 5000, disableOnInteraction: false }} loop className="overflow-hidden rounded-xl">
                {images.map((src, index) => (
                    <SwiperSlide key={index}>
                        <Image src={src} alt={`Slide ${index}`} width={768} height={512} className="w-full object-cover" />
                    </SwiperSlide>
                ))}
                <div className="absolute bottom-2 z-20 flex w-full justify-center">
                    <div className="mt-4 flex min-w-[96%] justify-center gap-2">
                        {images.map((_, i) => (
                            <div key={i} className="h-[2.5px] w-auto flex-1 overflow-hidden rounded bg-gray-500">
                                <div
                                    ref={(el) => {
                                        if (el) progressRefs.current[i] = el;
                                    }}
                                    className="h-full origin-left bg-white transition-transform"
                                    style={{ transform: 'scaleX(0)' }}
                                ></div>
                            </div>
                        ))}
                    </div>
                </div>
            </Swiper>

            {/* Progress Indicators */}
        </div>
    );
}
