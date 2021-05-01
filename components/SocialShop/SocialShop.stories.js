import React from 'react';

import SocialShop from './SocialShop';
import SocialPostCard from '../SocialPostCard';

const data = [
    {
        social: [
            { facebook: false },
            { facebookURL: null },
            { instagram: true },
            { instagramURL: 'https://www.instagram.com/p/COG6NZLjqha/' },
            { pinterest: true },
            { pinterestURL: 'https://pin.it/7z9uuDV' },
            { tiktok: false },
            { tiktokURL: 'https://www.tiktok.com/@eatlivewander/video/6956326890739223813' },
        ],
        postURL: 'https://www.tiktok.com/@eatlivewander/video/6956326890739223813',
        imageURL:
            'https://wndr.click/wp-content/uploads/2021/04/How-To-Cut-And-Maintain-Fresh-Flowers-And-Roses-For-A-Diptqyue-Baies-Black-Vase-small.jpg',
        imageAlt: 'How to Cut and Maintain Roses In A Vase',
    },
];

export default {
    title: 'Social Shop',
    component: SocialShop,
};

const Template = () => (
    <SocialShop>
        {data.map(item => {
            const { imageURL, imageAlt, postURL, social } = item;
            return (
                <SocialPostCard
                    key={postURL}
                    buttonSize="socialpostcard"
                    buttonType="button"
                    imageURL={imageURL}
                    imageAlt={imageAlt}
                    postURL={postURL}
                    social={social[0]}
                />
            );
        })}
    </SocialShop>
);

export const Default = Template.bind({});
