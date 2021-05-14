/* eslint-disable react/prop-types */
import Head from 'next/head';

import Navigation from '../components/Navigation';
import SocialShop from '../components/SocialShop';
import SocialPostCard from '../components/SocialPostCard';

const data = [
    {
        postURL: 'https://www.tiktok.com/@eatlivewander/video/6961495354219056389',
        imageURL:
            'https://wndr.click/wp-content/uploads/2021/05/myxen-vixen-woodford-reserve-bourbon-whiskey-spiked-lemonade-cocktail-tutorial-recipe.jpg',
        imageAlt: 'Myxen Vixen Woodford Reserve Bourbon Whiskey Spiked Lemonade Cocktail Tutorial Recipe',
        social: [
            { name: 'facebook', posted: false, url: '' },
            { name: 'instagram', posted: false, url: 'https://www.instagram.com/p/COyRakGhL2n/' },
            { name: 'pinterest', posted: true, url: 'https://pin.it/5xUK2in' },
            { name: 'tiktok', posted: false, url: 'https://www.tiktok.com/@eatlivewander/video/6961495354219056389' },
        ],
        products: [
            {
                name: 'HALM 6-Inch Reusable Glass Cocktail Straws',
                store: 'Amazon',
                buyURL: 'https://amzn.to/3odsqr9',
                imageURL:
                    'https://wndr.click/wp-content/uploads/2021/05/HALM-6-Inch-Reusable-Glass-Cocktail-Straws.jpg',
                imageAlt: 'HALM 6-Inch Reusable Glass Cocktail Straws',
                price: '$14.90',
            },
            {
                name: 'Brixton 12-Ounce Rocks Glass',
                store: 'Crate & Barrel',
                buyURL: 'https://www.crateandbarrel.com/brixton-12-ounce-rocks-glass/s335564',
                imageURL: 'https://wndr.click/wp-content/uploads/2021/05/Crate-Barrel-Brixton-12-Ounce-Rocks-Glass.jpg',
                imageAlt: 'Brixton 12-Ounce Rocks Glass',
                price: '$4.99',
            },
            {
                name: 'GasOne GS-8300 Portable Foldable Camp Stove',
                store: 'Amazon',
                buyURL: 'https://amzn.to/3f9cthD',
                imageURL:
                    'https://wndr.click/wp-content/uploads/2021/05/GasOne-GS-8300-Portable-Foldable-Camp-Stove.jpg',
                imageAlt: 'GasOne GS-8300 Portable Foldable Camp Stove',
                price: '$49.99',
            },
            {
                name: 'hOmeLabs Chill Pill Portable Countertop Ice Maker',
                store: 'Amazon',
                buyURL: 'https://amzn.to/2RMiQ2d',
                imageURL:
                    'https://wndr.click/wp-content/uploads/2021/05/hOmeLabs-Chill-Pill-Portable-Countertop-Ice-Maker.jpg',
                imageAlt: 'hOmeLabs Chill Pill Portable Countertop Ice Maker',
                price: '$124.99',
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
                name: '16-Ounce Glass Swing Top Bottles',
                store: 'Amazon',
                buyURL: 'https://amzn.to/3f3lQPQ',
                imageURL: 'https://wndr.click/wp-content/uploads/2021/05/16-Ounce-Glass-Swing-Top-Bottles.jpg',
                imageAlt: '16-Ounce Glass Swing Top Bottles',
                price: '$19.99',
            },
            {
                name: '3-In-1 Stainless Steel Small Funnel Set',
                store: 'Amazon',
                buyURL: 'https://amzn.to/3xZTDBW',
                imageURL: 'https://wndr.click/wp-content/uploads/2021/05/3-In-1-Stainless-Steel-Small-Funnel-Set.jpg',
                imageAlt: '3-In-1 Stainless Steel Small Funnel Set',
                price: '$9.99',
            },
            {
                name: 'Karter Scientific Glass Beaker Set (5-Sizes, 50ml - 1000ml)',
                store: 'Amazon',
                buyURL: 'https://amzn.to/2RA12Y0',
                imageURL: 'https://wndr.click/wp-content/uploads/2021/05/Karter-Scientific-Glass-Beaker-Set.jpg',
                imageAlt: 'Karter Scientific Glass Beaker Set (5-Sizes, 50ml - 1000ml)',
                price: '$19.99',
            },
        ],
    },
    {
        postURL: 'https://www.tiktok.com/@eatlivewander/video/6961495354219056389',
        imageURL: 'https://wndr.click/wp-content/uploads/2021/05/Gruyere-And-Pepper-Jack-Gougeres-Recipe.png',
        imageAlt: 'Gruyere And Pepper Jack Gougeres Recipe',
        social: [
            { name: 'facebook', posted: true, url: 'https://fb.watch/5spKvYbjux/' },
            { name: 'instagram', posted: true, url: 'https://www.instagram.com/p/COyRakGhL2n/' },
            { name: 'pinterest', posted: true, url: 'https://pin.it/5eH0gZC' },
            { name: 'tiktok', posted: true, url: 'https://www.tiktok.com/@eatlivewander/video/6961495354219056389' },
        ],
        products: [
            {
                name: 'GasOne GS-8300 Portable Foldable Camp Stove',
                store: 'Amazon',
                buyURL: 'https://amzn.to/3f9cthD',
                imageURL:
                    'https://wndr.click/wp-content/uploads/2021/05/GasOne-GS-8300-Portable-Foldable-Camp-Stove.jpg',
                imageAlt: 'GasOne GS-8300 Portable Foldable Camp Stove',
                price: '$49.99',
            },
            {
                name: 'KitchenAid Artisan Series Pistachio 5-Quart Stand Mixer',
                store: 'Amazon',
                buyURL: 'https://amzn.to/3fbLr9a',
                imageURL:
                    'https://wndr.click/wp-content/uploads/2021/05/KitchenAid-Artisan-Series-5-Quart-Stand-Mixer-Pistachio.jpg',
                imageAlt: 'KitchenAid Artisan Series Pistachio 5-Quart Stand Mixer',
                price: '$599.99',
            },
            {
                name: 'Egg Cracker',
                store: 'Amazon',
                buyURL: 'https://amzn.to/3faDv8k',
                imageURL: 'https://wndr.click/wp-content/uploads/2021/05/Egg-Cracker.jpg',
                imageAlt: 'Egg Cracker',
                price: '$15.99',
            },
            {
                name: 'USA Pan Half Sheet Baking Pan with Rack',
                store: 'Amazon',
                buyURL: 'https://amzn.to/3f6zCAY',
                imageURL: 'https://wndr.click/wp-content/uploads/2021/05/USA-Pan-Half-Sheet-Baking-Pan-with-Rack.jpg',
                imageAlt: 'USA Pan Half Sheet Baking Pan with Rack',
                price: '$23.00',
            },
            {
                name: 'Adecco Teflon Reusable Parchment Sheets',
                store: 'Amazon',
                buyURL: 'https://amzn.to/33K8ouF',
                imageURL: 'https://wndr.click/wp-content/uploads/2021/05/Adecco-Teflon-Reusable-Parchment-Sheets.jpg',
                imageAlt: 'Adecco Teflon Reusable Parchment Sheets',
                price: '$7.00',
            },
            {
                name: '16 Inch Disposable Pastry Bags',
                store: 'Amazon',
                buyURL: 'https://amzn.to/3uJPOir',
                imageURL: 'https://wndr.click/wp-content/uploads/2021/05/16-Inch-Disposable-Pastry-Bags.jpg',
                imageAlt: '16 Inch Disposable Pastry Bags',
                price: '$7.99',
            },
            {
                name: 'Wilton Round Tip 2A',
                store: 'Amazon',
                buyURL: 'https://amzn.to/3biVGHt',
                imageURL: 'https://wndr.click/wp-content/uploads/2021/05/Wilton-Round-Tip-2A.jpg',
                imageAlt: 'Wilton Round Tip 2A',
                price: '$6.99',
            },
            {
                name: 'Microplane Premium Classic Zester',
                store: 'Amazon',
                buyURL: 'https://amzn.to/3y6buXU',
                imageURL: 'https://wndr.click/wp-content/uploads/2021/05/Microplane-Premium-Classic-Zester.jpg',
                imageAlt: 'Microplane Premium Classic Zester',
                price: '$15.99',
            },
            {
                name: 'IMUSA USA Bamboo Spoon',
                store: 'Amazon',
                buyURL: 'https://amzn.to/3fcmQ4e',
                imageURL: 'https://wndr.click/wp-content/uploads/2021/05/IMUSA-USA-Bamboo-Spoon.jpg',
                imageAlt: 'IMUSA USA Bamboo Spoon',
                price: '$9.90',
            },
            {
                name: 'TAO Cicada Hands-Free Storage Bag Holder',
                store: 'Amazon',
                buyURL: 'https://amzn.to/3tI3o4y',
                imageURL: 'https://wndr.click/wp-content/uploads/2021/05/TAO-Cicada-Hands-Free-Storage-Bag-Holder.jpg',
                imageAlt: 'TAO Cicada Hands-Free Storage Bag Holder',
                price: '$4.99',
            },
            {
                name: 'Stasher Platinum Silicone Food Grade Reusable Storage Bag',
                store: 'Amazon',
                buyURL: 'https://amzn.to/2Ri3ouG',
                imageURL:
                    'https://wndr.click/wp-content/uploads/2021/05/Stasher-Platinum-Silicone-Food-Grade-Reusable-Storage-Bag.jpg',
                imageAlt: 'Stasher Platinum Silicone Food Grade Reusable Storage Bag',
                price: '$11.99',
            },
        ],
    },
    {
        postURL: 'https://www.tiktok.com/@eatlivewander/video/6960315675256671493',
        imageURL: 'https://wndr.click/wp-content/uploads/2021/05/Earl-Grey-Sweet-Iced-Tea-Cocktail-Recipe-Tutorial.jpg',
        imageAlt: 'Earl Grey Sweet Iced Tea Cocktail Recipe Tutorial',
        social: [
            { name: 'facebook', posted: true, url: 'https://fb.watch/5spThje0Tw/' },
            { name: 'instagram', posted: true, url: 'https://www.instagram.com/tv/COqAbKABiOX/' },
            { name: 'pinterest', posted: true, url: 'https://pin.it/ugVni5r' },
            { name: 'tiktok', posted: true, url: 'https://www.tiktok.com/@eatlivewander/video/6960315675256671493' },
        ],
        products: [
            {
                name: 'GasOne GS-8300 Portable Foldable Camp Stove',
                store: 'Amazon',
                buyURL: 'https://amzn.to/3f9cthD',
                imageURL:
                    'https://wndr.click/wp-content/uploads/2021/05/GasOne-GS-8300-Portable-Foldable-Camp-Stove.jpg',
                imageAlt: 'GasOne GS-8300 Portable Foldable Camp Stove',
                price: '$49.99',
            },
            {
                name: 'NUDE Glass (Remy Savage Collection) Pony Glass Set',
                store: 'Amazon',
                buyURL: 'https://amzn.to/3vVKXdV',
                imageURL:
                    'https://wndr.click/wp-content/uploads/2021/05/NUDE-Glass-Remy-Savage-Collection-Pony-Glass-Set.jpg',
                imageAlt: 'NUDE Glass (Savage Collection) Pony Glass Set',
                price: '$30.00',
            },
            {
                name: 'Visol Touchdown Shaker (Viski Rocket Alternative)',
                store: 'Amazon',
                buyURL: 'https://amzn.to/2RB7ZIv',
                imageURL: 'https://wndr.click/wp-content/uploads/2021/05/Visol-Touchdown-Cocktail-Shaker.jpg',
                imageAlt: 'Visol Touchdown Cocktail Shaker',
                price: '$30.00',
            },
            {
                name: 'Hiware 12-Inch Spiral Mixing Spoon',
                store: 'Amazon',
                buyURL: 'https://amzn.to/2Q5Xxs2',
                imageURL: 'https://wndr.click/wp-content/uploads/2021/05/Hiware-12-Inch-Spiral-Mixing-Spoon.jpg',
                imageAlt: 'Hiware 12-Inch Spiral Mixing Spoon',
                price: '$4.99',
            },
            {
                name: 'Norpro 3-Inch Strainer',
                store: 'Amazon',
                buyURL: 'https://amzn.to/3bgiPua',
                imageURL: 'https://wndr.click/wp-content/uploads/2021/05/Norpro-3-Inch-Strainer.jpg',
                imageAlt: 'Norpro 3-Inch Strainer',
                price: '$6.00',
            },
            {
                name: '3-In-1 Stainless Steel Small Funnel Set',
                store: 'Amazon',
                buyURL: 'https://amzn.to/3xZTDBW',
                imageURL: 'https://wndr.click/wp-content/uploads/2021/05/3-In-1-Stainless-Steel-Small-Funnel-Set.jpg',
                imageAlt: '3-In-1 Stainless Steel Small Funnel Set',
                price: '$9.99',
            },
            {
                name: '16-Ounce Glass Swing Top Bottles',
                store: 'Amazon',
                buyURL: 'https://amzn.to/3f3lQPQ',
                imageURL: 'https://wndr.click/wp-content/uploads/2021/05/16-Ounce-Glass-Swing-Top-Bottles.jpg',
                imageAlt: '16-Ounce Glass Swing Top Bottles',
                price: '$19.99',
            },
            {
                name: 'OXO Steel Angled Measuring Jigger',
                store: 'Amazon',
                buyURL: 'https://amzn.to/3txbyMT',
                imageURL: 'https://wndr.click/wp-content/uploads/2021/05/OXO-Steel-Angled-Measuring-Jigger.jpg',
                imageAlt: 'OXO Steel Angled Measuring Jigger',
                price: '$6.99',
            },
            {
                name: 'Karter Scientific Glass Beaker Set (5-Sizes, 50ml - 1000ml)',
                store: 'Amazon',
                buyURL: 'https://amzn.to/2RA12Y0',
                imageURL: 'https://wndr.click/wp-content/uploads/2021/05/Karter-Scientific-Glass-Beaker-Set.jpg',
                imageAlt: 'Karter Scientific Glass Beaker Set (5-Sizes, 50ml - 1000ml)',
                price: '$19.99',
            },
            {
                name: 'Harney & Sons Earl Grey Supreme Loose Leaf Tea',
                store: 'Amazon',
                buyURL: 'https://amzn.to/2Q4ncRS',
                imageURL:
                    'https://wndr.click/wp-content/uploads/2021/05/Harney-And-Sons-Earl-Grey-Supreme-Loose-Leaf-Tea.jpg',
                imageAlt: 'Harney & Sons Earl Grey Supreme Loose Leaf Tea',
                price: '$12.00',
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
        ],
    },
    {
        postURL: 'https://www.tiktok.com/@eatlivewander/video/6956326890739223813',
        imageURL:
            'https://wndr.click/wp-content/uploads/2021/04/How-To-Cut-And-Maintain-Fresh-Flowers-And-Roses-For-A-Diptqyue-Baies-Black-Vase-small.jpg',
        imageAlt: 'How to Cut and Maintain Roses In A Vase',
        social: [
            { name: 'facebook', posted: true, url: 'https://fb.watch/5spWKK4RKW/' },
            { name: 'instagram', posted: true, url: 'https://www.instagram.com/tv/COWD4S-nPJZ' },
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
    },
];

const Home = () => (
    <>
        <Head>
            <title>Eat Live Wander</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navigation />
        <SocialShop>
            {data.map((item, index) => {
                const { imageURL, imageAlt, postURL, social, products } = item;

                return (
                    <SocialPostCard
                        key={`${postURL}${index}`}
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
