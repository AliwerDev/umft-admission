import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

const members = [
    {
        image: '/images/team/Member1.png',
        name: 'John Doe',
        position: 'CEO',
    },
    {
        image: '/images/team/Member1.png',
        name: 'Baha Moretz',
        position: 'Art Director',
    },
    {
        image: '/images/team/Member2.png',
        name: 'Dima Grinchenko',
        position: 'Front End Developer',
    },
    {
        image: '/images/team/Member1.png',
        name: 'Polly Clark',
        position: 'Manager',
    },
];

const OurTeam = () => {
    const t = useTranslations('TeamSection');

    return (
        <div id="team" className="relative">
            <div className="container py-[60px]">
                <h2 className="font-bold text-[56px] leading-[62px] tracking-[0px] text-brand-500 mb-8">{t('title')}</h2>
                <p className="font-normal text-[20px] leading-[28px] tracking-[-0.4px] mb-[40px] max-w-[500px] text-[#1B1B1B">{t('description')}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {members.map((member, idx) => (
                        <div key={idx} className="group relative">
                            <Image
                                src={member.image}
                                alt="image"
                                width={100}
                                height={340}
                                className="h-[340px] w-full object-cover rounded-2xl overflow-hidden"
                            />
                            <p className="mt-4 font-semibold text-[22px] leading-[30px] tracking-[-0.55px]">{member.name}</p>
                            <p className="mt-2 font-medium text-[18px] leading-[26px] tracking-[-0.3px] text-[#6B6B6B]">{member.position}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="absolute right-0 top-[-300px] z-20 overflow-hidden">
                <Image className="object-cover" src={'/images/plate2.png'} width={500} height={500} alt="image" />
            </div>
        </div>
    );
};

export default OurTeam;
