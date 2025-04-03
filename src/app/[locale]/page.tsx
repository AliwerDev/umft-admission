import About from '@/components/sections/About';
import Contacts from '@/components/sections/Contacts';
import Features from '@/components/sections/Features';
import Footer from '@/components/sections/Footer';
import Guide from '@/components/sections/Guide';
import HeroSection from '@/components/sections/Hero';
import OurTeam from '@/components/sections/OurTeam';
import React from 'react';

const page = () => {
    return (
        <div className="">
            <HeroSection />
            <Guide />
            <About />
            <Features />
            <OurTeam />
            <Contacts />
            <Footer />
        </div>
    );
};

export default page;
