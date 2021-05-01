import React from 'react';
import SocialPostCard from './SocialPostCard';

const data = {
    platform: 'tiktok',
    postURL: 'https://www.tiktok.com/@eatlivewander/video/6956326890739223813',
    imageURL:
        'https://wndr.click/wp-content/uploads/2021/04/How-To-Cut-And-Maintain-Fresh-Flowers-And-Roses-For-A-Diptqyue-Baies-Black-Vase-small.jpg',
    imageAlt: 'How to Cut and Maintain Roses In A Vase',
};
export default {
    title: 'Social Post Card',
    component: SocialPostCard,
};

const Template = () => {
    const { imageURL, imageAlt, postURL } = data;
    return <SocialPostCard buttonSize="socialpostcard" imageURL={imageURL} imageAlt={imageAlt} postURL={postURL} />;
};

export const Default = Template.bind({});
