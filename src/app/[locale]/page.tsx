import Contacts from '@/components/sections/Contacts';
import Footer from '@/components/sections/Footer';
import HeroSection from '@/components/sections/Hero';
import Shipment from '@/components/sections/Shipment';
import React from 'react';

const page = () => {
    return (
        <div className="">
            <HeroSection />
            {/* <Guide />
            <About /> */}
            <Shipment />
            <Contacts />
            <Footer />
        </div>
    );
};

export default page;
