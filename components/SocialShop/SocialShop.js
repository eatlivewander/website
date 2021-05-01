/* eslint-disable react/prop-types */
import styled from 'styled-components';
import theme from '../../themes/default.js';

const ShopContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 65px auto;

    @media ${theme.tablet} {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        width: 760px;
    }

    @media ${theme.desktop} {
        width: 1150px;
    }
`;

const SocialShop = ({ children }) => <ShopContainer>{children}</ShopContainer>;

export default SocialShop;
