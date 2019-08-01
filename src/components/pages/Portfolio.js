import React, { Component } from "react";
import projects from "../../project.json"
import Card from "../Card"
import "./style.css"

class Portfolio extends Component {
    state = {
        projects
    }   

    render() {
    return (
        <>
            <div id="mySidenav" className="sidenav">
                <li id="backToSplash">
                    <a href="index.html">
                        <div className="homeName">Christian Pak</div>
                        <p className="homeTitle">Full Stack Developer</p>
                    </a>
                </li>
                <a href="#about">
                    <li className="about-nav"><i className="fas fa-user fa-lg teal nav-icon fa-fw"></i> About</li>
                </a>
                <a href="#projects">
                    <li className="project-nav"><i className="fas fa-tasks fa-lg purple nav-icon fa-fw"></i> Projects</li>
                </a>
                <a href="#skills">
                    <li className="skills-nav"><i className="fas fa-code fa-lg orange nav-icon fa-fw"></i> Skills</li>
                </a>
                <a href="#education">
                    <li className="education-nav"><i className="fas fa-user-graduate fa-lg green nav-icon fa-fw"></i> Education</li>
                </a>
                <a href="#contact-me">
                    <li className="contact-nav"><i className="fas fa-id-card fa-lg brown nav-icon fa-fw"></i> Contact Me</li>
                </a>
            </div>

            <div id="main">
                <div id="home" className="slot bottom-border">
                    <div id="name-title"></div>
                </div>

                <div id="about" className="slot bottom-border">
                    <div className="section-header">About</div>
                    <div id="about-me">
                        <div className="eighty">
                            <p className="text_padding">
                                Newly graduated web developer offering enthusiasm and understanding of various programming
                                languages. Looking to join an organization where opportunity for growth and professional
                                development is embraced. Self-motivated with a high level of experience working on multiple
                                projects. Passionate and hardworking with penchant for meeting deadlines. Interested in role
                                with company promoting best practices and offering diverse customer projects.
    
                    </p>
                            <p className="text_padding">
                                Solution-driven professional excelling in highly collaborative work environment, finding
                                solutions to challenges and focused on customer satisfaction. Proven experience developing
                                consumer-focused web sites using HTML, CSS, JQuery, PHP and JavaScript. Experience building
                                products for desktop and phone users, meeting high standards for web design, user experience,
                                best practices, usability and speed. Responding to challenges by designing and developing
                                solutions and building web applications aligned to customer's services. Translating solutions
                                into code and working across many different APIs, third-party integrations and databases.
                    </p>
                        </div>
                    </div>

                </div>

                <div className="section-header" id="projects">Projects</div>
                <div className="slot bottom-border row eighty">
                    <div className="project-lang row">

                    {this.state.projects.map(project => (
                        <Card
                        id= {project.name}
                        name= {project.name}
                        github= {project.github}
                        deployment= {project.deployment}
                        information= {project.information}
                        image= {project.image}
                           />
                         ))}
                            </div>
                         </div>

                        <div className="section-header" id="education">Education</div>
                        <div className="slot bottom-border eighty row">
                            <div className="card col-md-4">
                                <div className="card-header">
                                    <div>
                                        <img src="assets/images/DU.png" alt="University of Denver" style={{width: '2em'}} />
                                        University
                                        of Denver Trilogy
                            </div>
                                </div>
                                <div className="card-body">
                                    <blockquote className="blockquote mb-0">
                                        <a className="location" href="https://bootcamp.du.edu/coding/"><i
                                            className="fas fa-location-arrow">
                                        </i><small> Denver, Colorado</small></a>
                                        <ul className="graduate">
                                            <li className="acknowledge">
                                                Certificate
                                    </li>
                                        </ul>
                                    </blockquote>
                                </div>
                            </div>

                            <div className="card col-md-4">
                                <div className="card-header">
                                    <div>
                                        <img src="assets/images/DouglasCountyHighSchool.png" alt="University of Denver"
                                            style={{width: '2em'}} />
                                        Douglas County High School
                            </div>
                                </div>
                                <div className="card-body">
                                    <blockquote className="blockquote mb-0">
                                        <a className="location" href="https://dchs.dcsdk12.org/"><i className="fas fa-location-arrow">
                                        </i><small> Castle Rock, Colorado</small></a>
                                        <ul className="graduate">
                                            <li className="acknowledge">
                                                High School Diploma
                                    </li>
                                            <li className="acknowledge">
                                                Graduated in 2017
                                    </li>
                                        </ul>
                                    </blockquote>
                                </div>
                            </div>
                        </div>

                        <div className="section-header" id="contact-me">Contact Me</div>
                        <div className="contact-slot eighty">
                            <div id="contacting">
                                <div className="contact-information">
                                    <i className="far fa-envelope fa-lg"> Email: </i><a className="contact-links" href="##">
                                        iamchristianpak@gmail.com</a>
                                </div>
                                <div className="contact-information">
                                    <i className="fas fa-mobile-alt fa-lg"> </i> Phone: <a className="contact-links" href="##">
                                        732-908-6433</a>
                                </div>
                                <div className="contact-information">
                                    <i className="fab fa-linkedin fa-lg"></i><a className="contact-links"
                                        href="https://www.linkedin.com/in/christian-pak-010979168/">
                                        LinkedIn</a>
                                </div>
                                <div className="contact-information">
                                    <i className="fab fa-github fa-lg"></i><a className="contact-links"
                                        href="https://github.com/ChristianHPak">
                                        Github</a>
                                </div>
                            </div>
                        </div>
                    </div>
        </>
    )}
}

export default Portfolio;