import React from 'react';
import '../components/About.css'

const About = () => {
    return(
        <div>
            <div className="about-dev-parent">
                <h1 className="title">About the Developers</h1>
                <div className="hr"></div>
                <div className="row">
                    <div className="dev-p">
                        <p>
                            Meet the team below.
                        </p>
                    </div>
                </div>
                <div className="about">
                <div className="row-dev">
                    <div className="col-sm-6">
                        <div className="card3">
                        <div className="card-body">
                            <h5 className="card-title-dev">Simone Schneeburg</h5>
                            <p className="desc">FULLSTACK DEVELOPER</p>
                            <a href="." className="btn"><img className="github-img" src="https://i.imgur.com/GpOnmrS.png" alt="github-link"/></a>
                            <a href="." className="btn"><img className="linkedin-img" src="https://i.imgur.com/oAwmaXD.png" alt="linkedin-link"/></a>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card3">
                        <div className="card-body">
                            <h5 className="card-title-dev">Nicole Hamilton</h5>
                            <p className="desc">FULLSTACK DEVELOPER</p>
                            <a href="." className="btn"><img className="github-img" src="https://i.imgur.com/GpOnmrS.png" alt="github-link"/></a>
                            <a href="." className="btn"><img className="linkedin-img" src="https://i.imgur.com/oAwmaXD.png" alt="linkedin-link"/></a>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card3">
                        <div className="card-body">
                            <h5 className="card-title-dev">Ruben Cedeno</h5>
                            <p className="desc">FULLSTACK DEVELOPER</p>
                            <a href="." className="btn"><img className="github-img" src="https://i.imgur.com/GpOnmrS.png" alt="github-link"/></a>
                            <a href="." className="btn"><img className="linkedin-img" src="https://i.imgur.com/oAwmaXD.png" alt="linkedin-link"/></a>
                        </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default About;