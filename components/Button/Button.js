/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import styled from 'styled-components';
import theme from '../../themes/default.js';

const ButtonContainer = styled.button`
    border: 0.5px #888 solid;
    width: ${props => {
        if (props.buttonSize === 'socialpostcard') {
            return `200px`;
        }
        return `300px`;
    }};
    height: 45px;
    background-color: transparent;
    cursor: pointer;
    font-size: 16px;
    font-family: ${theme.fontMontserrat};
`;

const Button = ({ children, buttonSize, click }) => (
    <ButtonContainer buttonSize={buttonSize} onClick={click}>
        {children}
    </ButtonContainer>
);

export default Button;
