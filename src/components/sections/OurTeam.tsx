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
                <h2 className="text-brand-500 mb-3 text-4xl font-bold md:text-5xl lg:mb-10 xl:text-6xl">{t('title')}</h2>
                <p className="mb-12 max-w-md text-lg leading-normal md:text-xl lg:text-2xl">{t('description')}</p>

                <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
                    {members.map((member, idx) => (
                        <div key={idx} className="group relative">
                            <Image
                                src={member.image}
                                alt="image"
                                width={100}
                                height={340}
                                className="h-[240px] w-full overflow-hidden rounded-2xl object-cover sm:h-[300px] lg:h-[330px]"
                            />
                            <p className="mt-4 text-[22px] leading-normal font-semibold">{member.name}</p>
                            <p className="text-base font-medium text-[#6B6B6B] md:text-lg lg:text-xl">{member.position}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="absolute -top-52 right-0 z-20 overflow-hidden lg:-top-72">
                <Image className="max-w-60 object-cover md:max-w-72 lg:max-w-md" src={'/images/plate2.png'} width={500} height={500} alt="image" />
            </div>
        </div>
    );
};

export default OurTeam;
