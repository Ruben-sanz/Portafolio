import React from "react";
import { AiOutlineHtml5 } from "react-icons/ai";
import { DiCss3, DiReact } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiMysql } from "react-icons/si";
import "./experience.css";

const Experience = () => {
  return (
    <section id="experience">
      <h5>Que habilidades tengo yo</h5>
      <h2>Mi experiencia</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Experiencia en Frontend</h3>
          <div className="experience__content">
            <article className="experience__details">
              <AiOutlineHtml5 className="experience__details-icon" />
              <div>
                <h5>HTML</h5>
                <small className="text-light">Experiencia</small>
              </div>
            </article>
            <article className="experience__details">
              <DiCss3 className="experience__details-icon" />
              <div>
                <h5>CSS</h5>
                <small className="text-light">Experiencia</small>
              </div>
            </article>
            <article className="experience__details">
              <DiReact className="experience__details-icon" />
              <div>
                <h5>React</h5>
                <small className="text-light">Experiencia</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Experiencia en Backend</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaNodeJs className="experience__details-icon" />
              <div>
                <h5>Node Js</h5>
                <small className="text-light">Experiencia</small>
              </div>
            </article>
            <article className="experience__details">
              <SiJavascript className="experience__details-icon" />
              <div>
                <h5>JavaScript</h5>
                <small className="text-light">Experiencia</small>
              </div>
            </article>
            <article className="experience__details">
              <SiMongodb className="experience__details-icon" />
              <div>
                <h5>MongoDb</h5>
                <small className="text-light">Experiencia</small>
              </div>
            </article>
            <article className="experience__details">
              <SiMysql className="experience__details-icon" />
              <div>
                <h5>MySQL</h5>
                <small className="text-light">Experiencia</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
