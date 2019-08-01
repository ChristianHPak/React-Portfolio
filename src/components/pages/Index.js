import React from 'react';
import "./splash.css"

function Index(props) {

  return (
    <>
    <div align="center">
        <div className="first_circle"></div>
        <div className="first_div">
            <div className="second_div">
                <div className="img_div">
                    <img id="welcome-img" src="https://github.com/ChristianHPak/Portfolio/blob/master/assets/images/Christian.jpg?raw=true" alt="Christian Pak"/>
                </div>
            </div>
        </div>
        <div className="txt_welcome">Chrisitan Pak</div>
        <div className="txt_welcome2"> Full Stack Developer</div>
    </div>

    <footer>
        <div className="container" align="center">
            {/* <a href="portfolio.html"> */}
                <button onClick={() => props.handlePageChange("Portfolio")} className="pulse-button">
                    <div className="text"><i className="fas fa-unlock"></i> Click to see my portfolio</div>
            </button>
            {/* </a> */}
        </div>
    </footer>
    </>
  );
}

export default Index;