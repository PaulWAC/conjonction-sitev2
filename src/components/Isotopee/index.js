import React from "react";
import Isotope from 'isotope-layout';
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

import * as S from "./styles";

export default function IsotopeReact() {
    // store the isotope object in one state
    const [isotope, setIsotope] = React.useState(null);
    // store the filter keyword in another state
    const [filterKey, setFilterKey] = React.useState("*");
    const [active, setActive] = React.useState("active");

  
    // initialize an Isotope object with configs
    React.useEffect(() => {
      setIsotope(
        new Isotope(".filter-container", {
          itemSelector: ".filter-item",
          masonry: {
            // use outer width of grid-sizer for columnWidth
            columnWidth: '.filter-item'
          }
        })
      );
    }, []);
  
    // handling filter key change
    React.useEffect(
      () => {
        if (isotope) {
          filterKey === "*"
            ? isotope.arrange({ filter: `*` })
            : isotope.arrange({ filter: `.${filterKey}` });
        }
      },
      [isotope, filterKey]
    );
  
    return (
      <S.Isotope>
        <div className="container-fluid">
          <ul className="filter-buttons">
            <li onClick={() => setFilterKey("*")}><a className={filterKey === "*" ? "active-link":""}>Tous les projets</a></li>
            <li onClick={() => setFilterKey("commercants")}><a className={filterKey === "commercants" ? "active-link":""}>Commerçants</a></li>
            <li onClick={() => setFilterKey("immobilier")}><a className={filterKey === "immobilier" ? "active-link":""}>Immobilier</a></li>
            <li onClick={() => setFilterKey("collectivites")}><a className={filterKey === "collectivites" ? "active-link":""}>Collectivités</a></li>
            <li onClick={() => setFilterKey("divers")}><a className={filterKey === "divers" ? "active-link":""}>Divers</a></li>
          </ul>
          <div className="clearfix"></div>
        </div>
        <Slide left>
        <div className="container-fluid">
          <div className="filter-container">
            <S.Item className="filter-item commercants col-lg-3 col-md-4 col-sm-6">
                  <div className="size1 workCard position-relative">
                    <a href="/incubateur/nos-commerces">
                      <img src="/img/jpg/e-commerce.jpg" className="w-100"/>
                    </a>
                    <S.ItemDesc className="item-desc">
                      <S.Para>Web</S.Para>
                      <S.Title><S.Link href="https://nos-commerces.com/">nos-commerces.com</S.Link></S.Title>
                    </S.ItemDesc>
                      {/* <span>Cucumber</span> */}
                  </div>
            </S.Item>
            <S.Item className="filter-item immobilier col-lg-3 col-md-4 col-sm-6">
                  <div className="size2 workCard position-relative">
                    <a href="/">
                      <img src="/img/jpg/architecture.jpg" className="w-100"/>
                    </a>
                    <S.ItemDesc className="item-desc">
                      <S.Para>Immobiler</S.Para>
                      <S.Title><S.Link href="https://app.conjonction.com/">Appels à projet</S.Link></S.Title>
                    </S.ItemDesc>
                      {/* <span>Apple</span> */}
                  </div>    
            </S.Item>
            <S.Item className="filter-item commercants col-lg-3 col-md-4 col-sm-6">
              <div className=" size3 workCard position-relative">
                <a href="/">
                  <img src="/img/jpg/office.jpg" className="w-100"/>
                </a>
                <S.ItemDesc className="item-desc">
                  <S.Para>Immobilier</S.Para>
                  <S.Title><S.Link href="https://nos-commerces.com">Simplicité</S.Link></S.Title>
                </S.ItemDesc>
                  {/* <span>Cucumber</span> */}
              </div>
            </S.Item>
            <S.Item className="filter-item divers col-lg-3 col-md-4 col-sm-6">
                  <div className="size2 workCard position-relative">
                    <a href="/">
                      <img src="/img/jpg/mur-rouge.jpg" className="w-100"/>
                    </a>
                    <S.ItemDesc className="item-desc">
                      <S.Para>Collectivités</S.Para>
                      <S.Title><S.Link href="https://nos-commerces.com">Vie de quartier</S.Link></S.Title>
                    </S.ItemDesc>
                      {/* <span>Cucumber</span> */}
                  </div>
            </S.Item>
            <S.Item className="filter-item collectivites col-lg-3 col-md-4 col-sm-6">
                  <div className="size3 workCard position-relative">
                    <a href="/incubateur/restauration">
                      <img src="/img/jpg/bar.jpg" className="w-100"/>
                    </a>
                    <S.ItemDesc className="item-desc">
                      <S.Para>Web</S.Para>
                      <S.Title><S.Link href="https://nos-commerces.com">Plateforme restauration</S.Link></S.Title>
                    </S.ItemDesc>
                      {/* <span>Cucumber</span> */}
                  </div>
            </S.Item>
            <S.Item className="filter-item collectivites col-lg-3 col-md-4 col-sm-6">
                  <div className="size3 workCard position-relative">
                    <a href="/">
                      <img src="/img/jpg/office.jpg" className="w-100"/>
                    </a>
                    <S.ItemDesc className="item-desc">
                      <S.Para>Web</S.Para>
                      <S.Title><S.Link href="https://nos-commerces.com">Observatoire local du commerces</S.Link></S.Title>
                    </S.ItemDesc>
                      {/* <span>Cucumber</span> */}
                  </div>
            </S.Item>
            <S.Item className="filter-item divers col-lg-3 col-md-4 col-sm-6">
                  <div className="size3 workCard position-relative">
                    <a href="/">
                      <img src="/img/jpg/smartphone.jpg" className="w-100"/>
                    </a>
                    <S.ItemDesc className="item-desc">
                      <S.Para>Web</S.Para>
                      <S.Title><S.Link href="https://nos-commerces.com">Application rencontre entre investisseurs</S.Link></S.Title>
                    </S.ItemDesc>
                      {/* <span>Cucumber</span> */}
                  </div>
            </S.Item>
            <S.Item className="filter-item divers col-lg-3 col-md-4 col-sm-6">
              <div className="size1 workCard position-relative">
                <a href="/">
                  <img src="/img/jpg/architecture.jpg" className="w-100"/>
                </a>
                <S.ItemDesc className="item-desc">
                  <S.Para>Technologie</S.Para>
                  <S.Title><S.Link href="https://nos-commerces.com">OCR</S.Link></S.Title>
                </S.ItemDesc>
                  {/* <span>Cucumber</span> */}
              </div>    
            </S.Item>
          </div>
        </div>
        </Slide>
      </S.Isotope>
    );
  }
  
  