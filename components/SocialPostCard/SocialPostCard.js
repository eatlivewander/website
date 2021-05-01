/* eslint-disable no-shadow */
/* eslint-disable array-callback-return */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { Dialog } from '@reach/dialog';
import '@reach/dialog/styles.css';

import theme from '../../themes/default';
import ProductCard from '../ProductCard';
import Button from '../Button';

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 340px;
    height: 600px;
    align-items: center;
    overflow: hidden;
    margin: 20px;
`;

const ImageContainer = styled.div`
    display: flex;
    width: 340px;
    height: 500px;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    margin-bottom: 15px;
`;

const StyledImage = styled.img`
    height: auto;
    width: 100%;
`;

const DialogContainer = styled(Dialog)`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 340px;
    height: 690px;

    @media ${theme.tablet} {
        width: 720px;
    }
`;

const ViewOriginalContainer = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: 0.5px ${theme.lightGray} solid;
    border-bottom: 0.5px ${theme.lightGray} solid;
`;

const ViewOriginalTextWrapper = styled.div`
    font-family: ${theme.fontOverpass};
    font-size: 14px;
    color: ${theme.mediumGray};
    margin: 10px 0;
`;

const ViewOriginalIconsWrapper = styled.div`
    height: 35px;
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
`;

const SocialIcon = styled.img`
    height: 32px;
    width: auto;
    margin: 0 10px;
`;

const ProductsContainer = styled.div`
    width: 100%;
    height: 600px;
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
    overflow-y: hidden;
`;

const CloseButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border: 0.5px #888 solid;
    width: 100px;
    height: 40px;
    background-color: #000000;
    color: #ffffff;
    cursor: pointer;
    font-size: 12px;
    font-family: ${theme.fontOverpass};
    margin-top: 10px;
`;

const SocialPostCard = ({ buttonSize, imageURL, imageAlt, social, products }) => {
    const [showDialog, setShowDialog] = useState(false);
    const open = () => setShowDialog(true);
    const close = () => setShowDialog(false);

    return (
        <>
            <CardContainer>
                <ImageContainer>
                    <StyledImage alt={imageAlt} src={imageURL} />
                </ImageContainer>
                <Button buttonSize={buttonSize} click={open}>
                    Shop This Post
                </Button>
            </CardContainer>
            <DialogContainer aria-label="Product Links" isOpen={showDialog} onDismiss={close}>
                <ViewOriginalContainer>
                    <ViewOriginalTextWrapper>View Original Post</ViewOriginalTextWrapper>
                    <ViewOriginalIconsWrapper>
                        {social.map(platform => {
                            const { name, posted, url } = platform;

                            if (posted && url) {
                                return (
                                    <Link href={url} key={name}>
                                        <a target="_blank">
                                            <SocialIcon key={name} src={theme[name]} alt={name} />
                                        </a>
                                    </Link>
                                );
                            }
                        })}
                    </ViewOriginalIconsWrapper>
                </ViewOriginalContainer>
                <ProductsContainer>
                    {products.map(product => {
                        const { name, buyURL, imageURL, imageAlt, price, store } = product;
                        return (
                            <ProductCard
                                key={name}
                                name={name}
                                buyURL={buyURL}
                                imageURL={imageURL}
                                imageAlt={imageAlt}
                                price={price}
                                store={store}
                            />
                        );
                    })}
                </ProductsContainer>
                <CloseButton onClick={close}>CLOSE</CloseButton>
            </DialogContainer>
        </>
    );
};

export default SocialPostCard;
