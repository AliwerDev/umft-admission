import Contacts from '@/components/sections/Contacts';
import Footer from '@/components/sections/Footer';
import HeroSection from '@/components/sections/Hero';
import React from 'react';

const page = () => {
    return (
        <div className="">
            <HeroSection />
            {/* <Guide />
            <About /> */}
            <Contacts />
            <Footer />
        </div>
    );
};

export default page;
