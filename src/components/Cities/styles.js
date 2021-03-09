import styled from 'styled-components';

export const CitiesBlock = styled.section`
    padding: 2rem 0 2rem;
`;

export const ImgBlockLeft = styled.div`
    display:flow-root;
    // margin-bottom:10em;
`;
export const ImgBlockRight = styled.div`
    display:flow-root;
    // margin-bottom:10em;
`;
export const ImgBlockBoth = styled.div`
    clear:both;
    display:flow-root;
    // margin-bottom:10em;
`;

export const ImgItem1 = styled.div`
    display:flex;
    background-image: url(./img/svg/nevers-rue.jpg);
    height: 250px;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 50%;
    width: 250px;
    background-position: center;
    float:left;
    margin-right: 60px;
`; 

export const TextRightIn = styled.p`
    color:#FFF;
    margin:auto;
    font-size:22pt;
    text-transform:uppercase;
    font-weight:bold;
`;

export const TextRight = styled.p`
    padding-top:2em;
    @media only screen and (max-width: 574px) {
        display:inline-block;
        padding-left:15px;
    }
`;

export const TextRight2 = styled.p`
    @media only screen and (max-width: 574px) {
        display:inline-block;
        padding-left:15px;
    }
    padding-top:2em;
    margin:0;
`;

export const TextRight3 = styled.p`
    margin:0;
    @media only screen and (max-width: 574px) {
        padding-left:15px;
    }
`;

export const ImgItem2 = styled.div`
    display:flex;
    background-image: url(./img/svg/nantes-rue.jpg);
    height: 250px;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 50%;
    width: 250px;
    background-position: center;
    float:left;
    margin-right:60px;
`;

export const Text2 = styled.p`
    
`;

export const ImgItem3 = styled.div`
    display:flex;
    background-image: url(./img/svg/paris-rue.jpg);
    height: 250px;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 50%;
    width: 250px;
    background-position: center;
    float:left;
    margin-right:60px;
`; 

export const Text3 = styled.p`
    
`;

export const BlockTextLeft = styled.div`
    float:left;
    width:70%;
`;  