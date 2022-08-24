import React from "react";
import { MdOutlineDone } from "react-icons/md";
import "./services.css";

const Services = () => {
  return (
    <section id="services">
      <h5>Lo que Ofrezco</h5>
      <h2>Servicios</h2>

      <div className="container services__container">
        <article className="services">
          <div className="services__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="services__list">
            <li>
              <MdOutlineDone className="services__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <MdOutlineDone className="services__list-icon"/>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <MdOutlineDone className="services__list-icon"/>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <MdOutlineDone className="services__list-icon"/>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
          </ul>
        </article>
        <article className="services">
          <div className="services__head">
            <h3>Desarrollador Web</h3>
          </div>
          <ul className="services__list">
            <li>
              <MdOutlineDone className="services__list-icon"/>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <MdOutlineDone className="services__list-icon"/>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <MdOutlineDone className="services__list-icon"/>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <MdOutlineDone className="services__list-icon"/>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <MdOutlineDone className="services__list-icon"/>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
          </ul>
        </article>
        <article className="services">
          <div className="services__head">
            <h3>Aplicaciones Nativas</h3>
          </div>
          <ul className="services__list">
            <li>
              <MdOutlineDone className="services__list-icon"/>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <MdOutlineDone className="services__list-icon"/>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <MdOutlineDone className="services__list-icon"/>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <MdOutlineDone className="services__list-icon"/>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
