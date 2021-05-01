/* eslint-disable react/prop-types */
import Head from 'next/head';

import SocialShop from '../components/SocialShop';
import SocialPostCard from '../components/SocialPostCard';

const data = [
    {
        social: [
            { name: 'facebook', posted: false, url: null },
            { name: 'instagram', posted: true, url: 'https://www.instagram.com/p/COG6NZLjqha/' },
            { name: 'pinterest', posted: true, url: 'https://pin.it/7z9uuDV' },
            { name: 'tiktok', posted: true, url: 'https://www.tiktok.com/@eatlivewander/video/6956326890739223813' },
        ],
        products: [
            {
                name: 'Diptyque Baies Giant Indoor/Outdoor Ceramic Candle',
                store: 'Amazon',
                buyURL: 'https://amzn.to/3xHrorQ',
                imageURL:
                    'https://wndr.click/wp-content/uploads/2021/05/Diptyque-Baies-Giant-5-Wick-Indoor-Outdoor-Ceramic-Candle.jpg',
                imageAlt: 'Diptyque Baies Giant 5-Wick Indoor Outdoor Ceramic Candle',
                price: '$368.00',
            },
            {
                name: 'Alessi Juicy Salif Citrus Squeezer',
                store: 'Amazon',
                buyURL: 'https://amzn.to/3aTOBNq',
                imageURL:
                    'https://wndr.click/wp-content/uploads/2021/05/Alessi-Philippe-Starck-Juicy-Salif-Citrus-Juicer-Squeezer-Design-Icon.jpg',
                imageAlt: 'Alessi Philippe Starck Juicy Salif Citrus Juicer Squeezer Design Icon',
                price: '$62.00',
            },
            {
                name: 'Dansk Kobenstyle II Teapot',
                store: 'Amazon',
                buyURL: 'https://amzn.to/3tdGtgZ',
                imageURL: 'https://wndr.click/wp-content/uploads/2021/05/Dansk-Kobenstyle-II-Teapot-White-Ceramic.jpg',
                imageAlt: 'Dansk Kobenstyle II Teapot White Ceramic',
                price: '$45.00',
            },
            {
                name: 'La Perruche Pure Cane Rough Cut Brown Sugar Cubes',
                store: 'Amazon',
                buyURL: 'https://amzn.to/3t5VXnj',
                imageURL:
                    'https://wndr.click/wp-content/uploads/2021/05/La-Perruche-Pure-Cane-Rough-Cut-Brown-Sugar-Cubes.jpg',
                imageAlt: 'La Perruche Pure Cane Rough Cut Brown Sugar Cubes',
                price: '$11.00',
            },

            {
                name: 'Wegmans Double Dozen Roses',
                store: 'Wegmans',
                buyURL: 'https://shop.wegmans.com/product/36804/double-dozen-roses-25-st?ref=eatlivewander.com',
                imageURL:
                    'https://wndr.click/wp-content/uploads/2021/05/Wegmans-Double-Dozen-Red-Roses-25-Long-Stems.jpg',
                imageAlt: 'Wegmans Double Dozen Red Roses 25 Long Stems',
                price: '$20.00',
            },
        ],
        postURL: 'https://www.tiktok.com/@eatlivewander/video/6956326890739223813',
        imageURL:
            'https://wndr.click/wp-content/uploads/2021/04/How-To-Cut-And-Maintain-Fresh-Flowers-And-Roses-For-A-Diptqyue-Baies-Black-Vase-small.jpg',
        imageAlt: 'How to Cut and Maintain Roses In A Vase',
    },
    {
        social: [
            { name: 'facebook', posted: false, url: null },
            { name: 'instagram', posted: true, url: 'https://www.instagram.com/p/COG6NZLjqha/' },
            { name: 'pinterest', posted: true, url: 'https://pin.it/7z9uuDV' },
            { name: 'tiktok', posted: true, url: 'https://www.tiktok.com/@eatlivewander/video/6956326890739223813' },
        ],
        products: [
            {
                name: 'Diptyque Baies Giant Indoor/Outdoor Ceramic Candle',
                store: 'Amazon',
                buyURL: 'https://amzn.to/3xHrorQ',
                imageURL:
                    'https://wndr.click/wp-content/uploads/2021/05/Diptyque-Baies-Giant-5-Wick-Indoor-Outdoor-Ceramic-Candle.jpg',
                imageAlt: 'Diptyque Baies Giant 5-Wick Indoor Outdoor Ceramic Candle',
                price: '$368.00',
            },
            {
                name: 'Alessi Juicy Salif Citrus Squeezer',
                store: 'Amazon',
                buyURL: 'https://amzn.to/3aTOBNq',
                imageURL:
                    'https://wndr.click/wp-content/uploads/2021/05/Alessi-Philippe-Starck-Juicy-Salif-Citrus-Juicer-Squeezer-Design-Icon.jpg',
                imageAlt: 'Alessi Philippe Starck Juicy Salif Citrus Juicer Squeezer Design Icon',
                price: '$62.00',
            },
            {
                name: 'Dansk Kobenstyle II Teapot',
                store: 'Amazon',
                buyURL: 'https://amzn.to/3tdGtgZ',
                imageURL: 'https://wndr.click/wp-content/uploads/2021/05/Dansk-Kobenstyle-II-Teapot-White-Ceramic.jpg',
                imageAlt: 'Dansk Kobenstyle II Teapot White Ceramic',
                price: '$45.00',
            },
            {
                name: 'La Perruche Pure Cane Rough Cut Brown Sugar Cubes',
                store: 'Amazon',
                buyURL: 'https://amzn.to/3t5VXnj',
                imageURL:
                    'https://wndr.click/wp-content/uploads/2021/05/La-Perruche-Pure-Cane-Rough-Cut-Brown-Sugar-Cubes.jpg',
                imageAlt: 'La Perruche Pure Cane Rough Cut Brown Sugar Cubes',
                price: '$11.00',
            },

            {
                name: 'Wegmans Double Dozen Roses',
                store: 'Wegmans',
                buyURL: 'https://shop.wegmans.com/product/36804/double-dozen-roses-25-st?ref=eatlivewander.com',
                imageURL:
                    'https://wndr.click/wp-content/uploads/2021/05/Wegmans-Double-Dozen-Red-Roses-25-Long-Stems.jpg',
                imageAlt: 'Wegmans Double Dozen Red Roses 25 Long Stems',
                price: '$20.00',
            },
        ],
        postURL: 'https://www.tiktok.com/@eatlivewander/video/6956326890739223813',
        imageURL:
            'https://wndr.click/wp-content/uploads/2021/04/How-To-Cut-And-Maintain-Fresh-Flowers-And-Roses-For-A-Diptqyue-Baies-Black-Vase-small.jpg',
        imageAlt: 'How to Cut and Maintain Roses In A Vase',
    },
];

const Home = () => (
    <>
        <Head>
            <title>Eat Live Wander</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <SocialShop>
            {data.map(item => {
                const { imageURL, imageAlt, postURL, social, products } = item;

                return (
                    <SocialPostCard
                        key={postURL}
                        buttonSize="socialpostcard"
                        buttonType="button"
                        imageURL={imageURL}
                        imageAlt={imageAlt}
                        postURL={postURL}
                        social={social}
                        products={products}
                    />
                );
            })}
        </SocialShop>
    </>
);

export default Home;
