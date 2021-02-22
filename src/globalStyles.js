import { createGlobalStyle } from 'styled-components';

const Styles = createGlobalStyle`

    body,
    html,
    a {
        // font-family: 'Ubuntu', sans-serif;
        font-family: 'Poppins', sans-serif;
    }


    body {
        margin:0;
        padding:0;
        border: 0;
        outline: 0;
        background: #fff;
        overflow-x: hidden;
    }

    a:hover {
        color: #000;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    {
        font-family: 'Ubuntu', sans-serif;
        color: #0a1f44;
        font-size: 2.575rem;
        line-height: 3.0625rem;
      
        @media only screen and (max-width: 414px) {
          font-size: 1.625rem;
        }
    }

    h6{
        font-family: 'Playfair Display', serif;
        color: #0a1f44;
        font-size: 2.575rem;
        line-height: 3.0625rem;
        
        @media only screen and (max-width: 414px) {
            font-size: 1.625rem;
          }
    }

    p {
        color: #343D48;
        font-size: 1.125rem;
    }

    h1 {
        font-weight: 600;
    }

    a {
        text-decoration: none;
        outline: none;
        color: #2E186A;

        :hover {
            color: #2e186a;
        }
    }
    
    *:focus {
        outline: none;
    }

    .about-block-image svg {
        text-align: center;
    }

    .ant-drawer-body {
        display: flex;
        flex-direction: column;
        padding: 1.25rem;
        text-align: left;
        padding-top: 2.5rem;
        padding-right: 2rem;
    }

    .anticon,
    .ant-notification-notice-icon-success {
        color: rgb(255,130,92);
    }

    // Custom Marker Highlight
    .realistic-marker-highlight{
        position:relative;
    }
        
    .realistic-marker-highlight:before{
        content:"";
        background-color:rgb(9 187 255 / 30%);
        width:105%;
        height:1em;
        position:absolute;
        z-index:-1;
        left:-0.25em;
        top:0.4em;
        padding:0 0.25em;
        -webkit-transform: skew(155deg);
        transform: skew(155deg);
    } 

    .realistic-marker-highlight-title:before{
        content:"";
        background-color:rgb(9 187 255 / 30%);
        width:98%;
        height:3em;
        position:absolute;
        z-index:-1;
        left:-0.25em;
        top:1.8em;
        padding:0 0.25em;
        -webkit-transform: skew(155deg);
        transform: skew(155deg);
    }

    // Background images
    .left-bg{
        background-image:url("./img/svg/img-toit.jpg");
        -webkit-background-size: cover;
        background-size: cover;
        background-position: bottom center;
        height: 44pc;
    }
`;

export default Styles;
