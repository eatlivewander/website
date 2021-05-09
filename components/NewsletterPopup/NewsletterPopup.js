/* eslint-disable react/prop-types */
import { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import theme from '../../themes/default';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const CircleContainer = styled.div`
    width: 360px;
    height: 360px;
    background-color: rgba(237, 141, 38, 1);
    border-radius: 50%;
    z-index: 5;
    position: relative;
    opacity: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media ${theme.tablet} {
        width: 500px;
        height: 500px;
    }
`;

const CloseButton = styled.div`
    cursor: pointer;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: ${props => (props.loading ? `none` : `flex`)};
    justify-content: center;
    align-items: center;
    color: white;
    background-color: rgba(0, 0, 0, 1);
    position: absolute;
    top: 0;
    right: 0;
    font-family: ${theme.fontMontserrat};
    font-size: 20px;
    font-weight: 500;

    @media ${theme.tablet} {
        right: 25px;
        top: 10px;
    }
`;

const Logo = styled.img`
    width: 80px;
    height: auto;
    position: absolute;
    top: 30px;

    @media ${theme.tablet} {
        width: 120px;
        top: 65px;
    }
`;

const CTA = styled.div`
    width: 300px;
    height: auto;
    font-size: 20px;
    font-family: ${theme.fontOverpass};
    line-height: 22px;
    position: absolute;
    top: 100px;
    text-align: center;

    @media ${theme.tablet} {
        top: 180px;
        font-size: 26px;
        line-height: 26px;
        width: 400px;
    }
`;

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
    height: auto;
    position: absolute;
    bottom: 50px;

    @media ${theme.tablet} {
        bottom: 80px;
        width: 250px;
    }
`;

const LoaderContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: auto;
    position: absolute;
    bottom: 80px;

    @media ${theme.tablet} {
        bottom: 120px;
    }
`;

const EmailField = styled.input`
    width: 200px;
    height: 35px;
    margin-bottom: 5px;
    font-size: 16px;
    font-family: ${theme.fontMontserrat};
    border: none;
    border-radius: 0;
    padding-left: 10px;
    padding-right: 10px;

    &::placeholder {
        font-size: 14px;
        text-align: center;
    }

    @media ${theme.tablet} {
        width: 250px;
    }
`;

const Button = styled.button`
    cursor: pointer;
    width: 200px;
    height: 35px;
    margin-bottom: 5px;
    border: ${props => {
        if (props.action === 'subscribe') {
            return `none`;
        }

        return `1px black solid`;
    }};
    background-color: ${props => {
        if (props.action === 'subscribe') {
            return `black`;
        }

        return `transparent`;
    }};
    color: ${props => {
        if (props.action === 'subscribe') {
            return `white`;
        }

        return `black`;
    }};

    @media ${theme.tablet} {
        width: 250px;
    }
`;

const NewsletterPopup = ({ setNewsletterOpen }) => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    const subscribeToNewsletter = async () => {
        const result = await axios.get('/api/newsletter-general');
        console.log('RESULT', result);
    };

    const renderStatus = () => {
        if (loading) {
            return (
                <LoaderContainer>
                    <Loader type="Bars" color="#000000" height={50} width={50} />
                </LoaderContainer>
            );
        }
        return (
            <FormContainer>
                <EmailField placeholder="Email Address" />
                <Button action="subscribe">SUBSCRIBE</Button>
                <Button action="cancel" onClick={() => setNewsletterOpen(false)}>
                    CANCEL
                </Button>
            </FormContainer>
        );
    };

    return (
        <CircleContainer>
            <CloseButton onClick={() => setNewsletterOpen(false)} loading={loading}>
                X
            </CloseButton>
            <Logo
                src="https://wndr.click/wp-content/uploads/2021/05/logo-white-stacked-400w.png"
                alt="Eat Live Wander"
            />
            <CTA>Don't let me get lost in your social media newsfeed. Get new posts delivered to your inbox!</CTA>
            {renderStatus()}
        </CircleContainer>
    );
};

export default NewsletterPopup;
