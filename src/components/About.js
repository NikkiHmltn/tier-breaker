import React from 'react';
import './css/About.css';

const About = () => {
    return (
        <div>
            <div className="bot-about">
                <h1
                    className="about-title"
                    Using the Discord Bot
                </h1>
                <div className="hr">
                    <p>
                        Poll-Bot, our discord bot, is available for anyone who wants to use it. If you are an admin on
                        your discord server, log in to discord and then copy the url below into your browser.
                        Interacting with Poll-Bot is easy, a server member just needs to type in{' '}
                        <span style={{ color: '#ee6e73' }}>
                            <em>!poll</em> and the key for your poll.
                        </span>{' '}
                        Poll-Bot will respond with the question and available options, mapped to emoji reacts. The
                        server has a minute to react to their option(s) of choice. Poll-Bot will send a reminder when
                        the voting window is about to close.
                    </p>
                    <code className="bot-link">this is a link place holder</code>
                </div>
            </div>
            <div className="about-dev-parent">
                <h1
                    className="about-title"
                    About the Developers
                </h1>
                <div className="hr">
                    <p>
                        Tier Breaker is a collabrative project by the following three developers for General Assembly's
                        Software Engineering Immersive. This app was created using Flask, Socket.io, and React, with
                        MongoEngine and MongoAtlas. In this one week endeavor, we took on the challenge of learning
                        Flask from square one and rehashing socket knowledge from Javascript to Python to create a fully
                        functioning web application.
                    </p>
                    <p>Thank you for stopping by and checking out this application! Have fun!</p>
                </div>
                <div className="row">
                    <div className="dev-p">
                        <h1 className="meet-title">Meet the team below.</h1>
                    </div>
                </div>
                <div className="about">
                    <div className="row-dev">
                        <div className="col-sm-6">
                            <div className="card3">
                                <div className="card-body">
                                    <h5 className="card-title-dev">Simone Schneeberg</h5>
                                    <p className="desc">FULLSTACK DEVELOPER</p>
                                    <a
                                        href="https://github.com/sschneeberg"
                                        className="btn"
                                        target="_blank"
                                        rel="noreferrer">
                                        <img
                                            className="github-img"
                                            src="https://i.imgur.com/GpOnmrS.png"
                                            alt="github-link"
                                        />
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/simone-schneeberg/"
                                        className="btn"
                                        target="_blank"
                                        rel="noreferrer">
                                        <img
                                            className="linkedin-img"
                                            src="https://i.imgur.com/oAwmaXD.png"
                                            alt="linkedin-link"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="card3">
                                <div className="card-body">
                                    <h5 className="card-title-dev">Nicole Hamilton</h5>
                                    <p className="desc">FULLSTACK DEVELOPER</p>
                                    <a
                                        href="https://github.com/NikkiHmltn"
                                        className="btn"
                                        target="_blank"
                                        rel="noreferrer">
                                        <img
                                            className="github-img"
                                            src="https://i.imgur.com/GpOnmrS.png"
                                            alt="github-link"
                                        />
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/nikkihmltn/"
                                        className="btn"
                                        target="_blank"
                                        rel="noreferrer">
                                        <img
                                            className="linkedin-img"
                                            src="https://i.imgur.com/oAwmaXD.png"
                                            alt="linkedin-link"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="card3">
                                <div className="card-body">
                                    <h5 className="card-title-dev">Ruben Cedeno</h5>
                                    <p className="desc">FULLSTACK DEVELOPER</p>
                                    <a
                                        href="https://github.com/anonyymous1"
                                        className="btn"
                                        target="_blank"
                                        rel="noreferrer">
                                        <img
                                            className="github-img"
                                            src="https://i.imgur.com/GpOnmrS.png"
                                            alt="github-link"
                                        />
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/ruben-cedeno-756b309b/"
                                        className="btn"
                                        target="_blank"
                                        rel="noreferrer">
                                        <img
                                            className="linkedin-img"
                                            src="https://i.imgur.com/oAwmaXD.png"
                                            alt="linkedin-link"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
