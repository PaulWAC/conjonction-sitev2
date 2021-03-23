import { createGlobalStyle } from 'styled-components';

const Styles = createGlobalStyle`

    .color-white{
        color:#FFF !important;
    }

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
        font-family: 'Poppins', sans-serif;
        color: #0a1f44;
        font-size: 2.575rem;
        line-height: 3.0625rem;
        font-weight:600;
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

    img{
        height:100%;
    }
    
    *:focus {
        outline: none;
    }

    .site-page-header {
        margin:2em 0;
        border: 1px solid rgb(235, 237, 240);
    }

    .position-relative {
        position: relative!important;
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

    .anticon-menu{
        color:#FFF !important;
    }

    .anticon,
    .ant-notification-notice-icon-success {
        color: #085585;
    }

    .margin-0{
        margin:0;
    }

    // Custom timeline

    .ant-timeline{
        margin-top:4em;
    }

    // Custom Marker Highlight
    .realistic-marker-highlight{
        position:relative;
        @media only screen and (max-width: 1130px) {
            display:inline-block;
        }
    }
        
    .realistic-marker-highlight:before{
        content:"";
        background-color:rgb(9 187 255 / 30%);
        width:100%;
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
        top:6em;
        padding:0 0.25em;
        -webkit-transform: skew(155deg);
        transform: skew(155deg);
    }

    // Responsive CountUp
    
    @media only screen and (max-width: 1214px) {
        
        .highlight-marker-mobile:before{
            top:85px;
        }
        .highlight-marker-mobile > div{
            padding-top:1.2em;
        }
    }

    @media only screen and (min-width:439px) and (max-width:574px){
        .highlight-marker-mobile:before{
            top:62px;
        }
        .highlight-marker-mobile > div{
            padding-top:0.5em;
            padding-bottom:1em;
        }
        .realistic-marker-highlight-title:before{
            top:3em;
        }
        .realistic-marker-highlight-title > div{ 
            padding-top:0.5em;
            padding-bottom:1em;
        }
    }
    @media only screen and (max-width: 440px) {
        .highlight-marker-mobile:before{
            top:65px !important;
        }
        .highlight-marker-mobile > div{
            padding-top:0.5em;
            padding-bottom:1em;
        }
        .realistic-marker-highlight-title:before{
            top:3em;
        }
        .realistic-marker-highlight-title > div{ 
            padding-top:0.5em;
            padding-bottom:1em;
        } 
    }

    @media only screen and (min-width:680px) and (max-width:764px){
        .second-countup > div{
            padding-top:33px;
        }
    }

    // Background images
    .left-bg{
        background-image:url("./img/svg/img-toit.jpg");
        -webkit-background-size: cover;
        background-size: cover;
        background-position: bottom center;
        height: 44pc;
        @media only screen and (max-width: 574px) {
            height:20pc;
        }
    }
    .right-bg{
        background-image:url("./img/svg/bg-strategie.png");
        -webkit-background-size: cover;
        background-size: cover;
        background-position: bottom center;
        height: 44pc;
        @media only screen and (max-width: 574px) {
            height:20pc;
        }
    }

    // Incubateur Masonry & Isotope

    .filter-buttons{
        list-style:none;
        display:inline-block;
        padding-left: 0;
        margin-bottom: 0;
    }

    .filter-buttons li{
        float:left;
        cursor: pointer;
        float:left;
        padding: 0px 1rem;
        margin:50px 0;
        @media only screen and (max-width: 780px) {
            margin:10px 0;
        }
    }

    .filter-buttons li > a{
        text-transform:uppercase;
        font-weight:bold;
        color:#797979;
        font-size: 14pt;
    }

    .filter-buttons li > a.active-link{
        color:#085585;
    }

    .filter-container{
        display: flex;
        flex-wrap: wrap;
        margin-right: -15px;
        margin-left: -15px;
    }

    .w-100{
        width:100%;
    }

    .workCard{
        box-sizing: border-box;
        min-width: 0px;
        margin-bottom: 30px;
    }

    .workCard:hover .item-desc{
        bottom: 20px;
        opacity: 1;
    }

    .img1{
        background:red;
        width:330px;
        height:200px;
    }
    .size1{
        height:200px;
    }
    .size2{
        height:400px;
    }

    .size3{
        height:280px;
    }
    .img2{
        background:blue;
        width:330px;
        height:400px;
    }
    .img3{
        background:blue;
        width:330px;
        height:280px;
        background:purple;
    }

    .not-allowed{
        cursor:not-allowed;
    }


    // Carousel global
    .ant-carousel .slick-dots li button {
        height:15px;
    }
    .ant-carousel .slick-prev::before, .ant-carousel .slick-next::before  {
        font-size: 22px;
        color: #095585;
    }

    // Carousel Villes + responsive
    .ant-carousel .slick-dots li button{
        background-color:#085585 !important;
    }

    .citiesblock-mobile{
        @media only screen and (max-width: 574px) {
            margin-left:12px;
        }
    }    

    // Carousel Projets
    #product .ant-carousel .slick-dots-bottom {
        bottom: 0px;
    }
`;

export default Styles;
