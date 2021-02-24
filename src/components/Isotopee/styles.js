import styled from 'styled-components';

export const Item = styled.div`
    
`;

export const ItemDesc = styled.div`
    box-sizing: border-box;
    min-width: 0px;
    position: absolute;
    overflow: hidden;
    bottom: 0px;
    left: 20px;
    right: 20px;
    opacity: 0;
    border-radius: 8px;
    z-index: 1;
    padding: 1.25rem 1.875rem;
    transition: all 0.4s ease 0s;
    
    &:before{
        position: absolute;
        content: "";
        background: rgb(255, 255, 255);
        inset: 0px;
        z-index: -1;
        opacity: 0.9;
    }
`;

export const Para = styled.p`
    font-size: 0.8125rem;
    line-height: 1.63;
    letter-spacing: 1.63px;
    font-weight: 700;
    text-transform: uppercase;
    color: rgba(22, 28, 45, 0.7);
    margin-bottom: 8px;
`;

export const Title = styled.h4`
    font-size: 1.3125rem;
    font-weight: 700;
    letter-spacing: -0.5px;
    line-height: 1;
`;

export const Link = styled.a`
    transition: all 0.3s ease-out 0s;
    color: #000;
    &:hover{
        color:#085585;
    }
`;

export const BackBlock = styled.div`
    float: right;
    margin: 40px;
    padding: 10px;
    border-radius: 30px;
    background-color: rgb(8, 85, 133);
`;

export const BackLink = styled.a`
    color:#FFF;
    &:hover{
        color:#5ccaff;
    }
`;

export const Isotope = styled.div`
    
`;