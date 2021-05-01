/* eslint-disable react/prop-types */
import Link from 'next/link';
import styled from 'styled-components';

import theme from '../../themes/default.js';

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 250px;
    height: auto;
    margin-top: 10px;
    margin-right: 15px;
    margin-left: 15px;
`;

const ProductName = styled.div`
    font-family: ${theme.fontMontserrat};
    font-size: 16px;
    min-height: 70px;
    width: 250px;
    padding-left: 5px;
    padding-right: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

const ProductImage = styled.img`
    width: auto;
    height: 310px;
    margin-top: 10px;
    margin-bottom: 15px;
`;

const BuyButton = styled.button`
    border: 0.5px #888 solid;
    width: 230px;
    height: 45px;
    background-color: transparent;
    cursor: pointer;
    font-size: 12px;
    font-family: ${theme.fontMontserrat};
`;

const ProductCard = ({ name, buyURL, imageURL, imageAlt, price, store }) => (
    <CardContainer>
        <ProductName>{name}</ProductName>
        <ProductImage src={imageURL} alt={imageAlt} />
        <Link href={buyURL}>
            <a target="_blank">
                <BuyButton type="button">
                    {price} at {store}
                </BuyButton>
            </a>
        </Link>
    </CardContainer>
);

export default ProductCard;
