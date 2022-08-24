import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward, FaUsers, FaFolderOpen } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h5>Necesitas Saber</h5>
      <h2>Sobre Mi</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About-img" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experiencia</h5>
              <small>+6 meses Trabajando</small>
            </article>

            <article className="about__card">
              <FaUsers className="about__icon" />
              <h5>Clientes</h5>
              <small>10+ Worldwide</small>
            </article>

            <article className="about__card">
              <FaFolderOpen className="about__icon" />
              <h5>Projectos</h5>
              <small>+2 Completados</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            reiciendis aspernatur quo tempora. Sequi eum rem quis. Ea
            perferendis dolor repudiandae voluptatibus quaerat aliquid nam, eius
            esse recusandae, ipsum porro.
          </p>

          <a href="#contact" className="btn btn-primary">
            Contactame
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
