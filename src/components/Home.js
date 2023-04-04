import React from 'react';

function Home() {
  function toggle() {
    const toggle = document.getElementById('toggle');
    const navbar = document.getElementById('navbar');
    const controls = document.getElementById('controls');

    toggle.classList.toggle('active');
    navbar.classList.toggle('active');
    controls.classList.toggle('active');
  }

  function displayHome() {
    let homeElements = document.querySelectorAll('#home');
    homeElements.forEach((element) => {
      element.classList.add('active');
    });
  }

  return (
    <div>
      <div className="main-content">
        <div className="loader"></div>
        <section id="home" className="section page-header sec1 main-header active">
          <br></br>

          <div className="btn-container-home">
            <a
              href="https://drive.google.com/file/d/1Bl-pZ9hqcxZ6hucMJUC5-I5HEchSwZEK/view?usp=sharing"
              className="main-btn"
              target="_blank"
              rel="noreferrer">
              <span className="btn-text">Download CV</span>
              <span className="btn-icon">
                <i className="fas fa-download"></i>
              </span>
            </a>
          </div>

          <div id="home" className="right-header page-header section sec1 about active">
            <h2>
              David <span className="bg-text">Broida</span>
            </h2>
            <h3>Full Stack Web Developer</h3>

            <h4>
              <span id="header" className="letter">
                React JS <span> · </span>
              </span>
              <span id="header" className="letter">
                Node.js <span> · </span>
              </span>
              <span id="header" className="letter">
                Javascript<span> · </span>
              </span>
              <span id="header" className="letter">
                Python<span> · </span>
              </span>
              <span id="header" className="letter">
                SQL<span> · </span>
              </span>
              <span id="header" className="letter">
                APIs<span> · </span>
              </span>
              <span id="header" className="letter">
                HTML<span> · </span>
              </span>
              <span id="header" className="letter">
                CSS
              </span>
            </h4>
            <p>
              Full Stack Web Developer and recent graduate from Springboard&apos;s Full Stack
              Software Engineering Bootcamp. I am proficient in React.js, Node.js, Javascript,
              Python, SQL, APIs and fully focused on writing high quality and efficient code with an
              emphasis on Javascript. Additionally I speak fluent Mandarin Chinese, am a blockchain
              enthusiast, have international sales experience and love graphic design/ photography.
              Currently I am working for Hexmount LLC on two Web3 projects as a Software Engineer
              Intern while looking for additional full-time employment opportunities.
            </p>
            <div className="btn-container">
              <a
                href="https://drive.google.com/file/d/1Bl-pZ9hqcxZ6hucMJUC5-I5HEchSwZEK/view?usp=sharing"
                className="main-btn"
                target="_blank"
                rel="noreferrer">
                <span className="btn-text">Download CV</span>
                <span className="btn-icon">
                  <i className="fas fa-download"></i>
                </span>
              </a>
            </div>
          </div>
        </section>
        <section id="home" className="section2 section page-header main-header active">
          <div className="about-container">
            <div className="left-about">
              <div>
                <div className="prof-pic active">
                  <img
                    id="profile-pic-img"
                    src="images/polaroid prof pic joke.png"
                    className="active"></img>
                </div>
              </div>
            </div>
            <div className="right-about">
              <div className="homepage-about">
                <div className="links">
                  <p>
                    <b>
                      <i id="linkedin-icn" className="fa-brands fa-linkedin-in">
                        {' '}
                      </i>
                      <a
                        href="https://www.linkedin.com/in/davidbroida/"
                        target="_blank"
                        rel="noreferrer">
                        {' '}
                        LinkedIn
                      </a>
                    </b>
                  </p>
                  <p>
                    <b>
                      <i id="github-icn" className="fa-brands fa-github"></i>{' '}
                      <a href="https://github.com/davidbroida" target="_blank" rel="noreferrer">
                        GitHub
                      </a>
                    </b>
                  </p>
                  <p>
                    <b>
                      <i id="gmail-icn" className="fa-sharp fa-solid fa-g"></i>{' '}
                      <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=davidcbroida@gmail.com"
                        target="_blank"
                        rel="noreferrer">
                        Gmail
                      </a>
                    </b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="section sec2 about">
          <div className="main-title-3">
            <h2>
              About <span className="bg-text">Me</span>
              <span className="bg-text2">About</span>
            </h2>
          </div>

          <div className="about-container">
            <div className="left-about">
              <h4 className="about-header">
                David <span className="bg-text">Broida</span>
              </h4>
              <p>
                Full Stack Web Developer, world traveler and Mandarin Chinese expert born and raised
                in Maine, USA currently living in Bali, Indonesia. <br></br>
                <br></br>Recent graduate of Springboard&apos;s 800+ hour Full Stack Software
                Engineering Bootcamp. Proficient in React JS, Node.js, Python, Javascript, SQL,
                APIs, HTML and CSS.<br></br>
                <br></br> I love learning, taking on new challenges and pushing myself to reach my
                highest potential. As a Software Developer I am always looking for new opportunities
                that allow me to grow and inspire me to create.
              </p>
              <div className="btn-container-3">
                <a
                  href="https://drive.google.com/file/d/1Bl-pZ9hqcxZ6hucMJUC5-I5HEchSwZEK/view?usp=sharing"
                  className="main-btn"
                  target="_blank"
                  rel="noreferrer">
                  <span className="btn-text">Download CV</span>
                  <span className="btn-icon">
                    <i className="fas fa-download"></i>
                  </span>
                </a>
              </div>
            </div>
            <div className="right-about-2">
              <div className="about-item">
                <div className="about-text">
                  <p className="large-text">1000&apos; s</p>
                  <p className="small-text">
                    of Hours of<br></br>self study
                  </p>
                </div>
              </div>
              <div className="about-item">
                <div className="about-text">
                  <p className="large-text">800+</p>
                  <p className="small-text">
                    Hours of<br></br>course study
                  </p>
                </div>
              </div>
              <div className="about-item">
                <div className="about-text">
                  <p className="large-text">10+</p>
                  <p className="small-text">
                    Programming languages<br></br>& frameworks
                  </p>
                </div>
              </div>
              <div className="about-item">
                <div className="about-text">
                  <p className="large-text">4+</p>
                  <p className="small-text">
                    In-depth<br></br>Portfolio projects
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="about-stats">
            <h4 className="stat-title">My Skills</h4>
            <div className="progress-bars">
              <div className="progress-bar">
                <p className="progress-title">React JS</p>
                <div className="progress-container">
                  <p className="progress-text">75%</p>
                  <div className="progress">
                    <span className="reactjs"></span>
                  </div>
                </div>
              </div>
              <div className="progress-bar">
                <p className="progress-title">Javascript</p>
                <div className="progress-container">
                  <p className="progress-text">90%</p>
                  <div className="progress">
                    <span className="javascript"></span>
                  </div>
                </div>
              </div>
              <div className="progress-bar">
                <p className="progress-title">Python</p>
                <div className="progress-container">
                  <p className="progress-text">80%</p>
                  <div className="progress">
                    <span className="python"></span>
                  </div>
                </div>
              </div>
              <div className="progress-bar">
                <p className="progress-title">Flask</p>
                <div className="progress-container">
                  <p className="progress-text">80%</p>
                  <div className="progress">
                    <span className="flask"></span>
                  </div>
                </div>
              </div>
              <div className="progress-bar">
                <p className="progress-title">PostreqSQL</p>
                <div className="progress-container">
                  <p className="progress-text">85%</p>
                  <div className="progress">
                    <span className="postgresql"></span>
                  </div>
                </div>
              </div>
              <div className="progress-bar">
                <p className="progress-title">Node.js</p>
                <div className="progress-container">
                  <p className="progress-text">70%</p>
                  <div className="progress">
                    <span className="nodejs"></span>
                  </div>
                </div>
              </div>
              <div className="progress-bar">
                <p className="progress-title">HTML5</p>
                <div className="progress-container">
                  <p className="progress-text">100%</p>
                  <div className="progress">
                    <span className="html5"></span>
                  </div>
                </div>
              </div>
              <div className="progress-bar">
                <p className="progress-title">CSS</p>
                <div className="progress-container">
                  <p className="progress-text">95%</p>
                  <div className="progress">
                    <span className="css"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h4 className="timeline-title">My Timeline</h4>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-icon">
                <i className="fas fa-briefcase"></i>
              </div>
              <p className="timeline-duration">Feb 2023 - present</p>
              <h5>
                Software Engineer Intern <span> - Hexmount LLC- London, UK (Remote)</span>
                <p></p>
              </h5>
              <p>
                Working alongside the CEO and Founder on a cryptocurrency monitoring application
                with a React JS frontend and a Node.js backend using Alchemy. Also working on a
                second ERC721 NFT project, developing the frontend with on chain staking functions
                gaining exposure to the project development lifecycle and writing Solidity ERC20 and
                ERC721 smart contracts on the Ethereum blockchain.
              </p>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon">
                <i className="fas fa-briefcase"></i>
              </div>
              <p className="timeline-duration">2022 - present</p>
              <h5>
                Web Developer <span> - Freelance (Remote)</span>
                <p></p>
              </h5>
              <p>
                During Springboard&apos;s coding bootcamp I worked as a part-time freelance
                front-end developer creating websites for clients in the United States via word of
                mouth. Since graduation I have continued my work as a freelancer while taking on
                some additional work focusing on cryptocurrency/ blockchain in Javascript. This work
                has allowed me to continue my learning, keep practicing and push my skills forward
                after graduating from Springboard.
              </p>
            </div>

            <div className="timeline-item">
              <div className="timeline-icon">
                <i className="fa-solid fa-graduation-cap"></i>
              </div>
              <p className="timeline-duration">May 2021 - Jul 2022</p>
              <h5>
                Springboard Software Engineering Bootcamp <span> - Student</span>
              </h5>
              <p>
                React JS | JavaScript | Python & Flask | SQL & PostgresQL | Node.js & Express | HTML
                & CSS
                <br></br>
                <br></br>
                Completed over 1000 hours of hands-on course material with 1:1 industry expert
                mentor oversight and completion of three in-depth portfolio projects. Mastered
                skills in front-end web development, back-end web development, databases, data
                structures and algorithms.
              </p>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon">
                <i className="fa-solid fa-graduation-cap"></i>
              </div>
              <p className="timeline-duration">Sep 2016 - Jun 2020</p>
              <h5>
                Hainan University <span> - B.A. Chinese Language & Literature</span>
              </h5>
              <p>
                Received a full scholarship from the Chinese government for a 4 year Bachelor&apos;
                s Degree in Mandarin Chinese Language and Literature. Living in Haikou City on
                Hainan Island in China, mastering my language and cross-cultural communication
                skills living with people from all around the world. Passed HS6 Level 6 and wrote a
                20 page thesis entirely in Mandarin Chinese.
              </p>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon">
                <i className="fas fa-briefcase"></i>
              </div>
              <p className="timeline-duration">Apr 2014 - Jan 2016</p>
              <h5>
                Asia & America&apos;s Business Development Sales Coordinator
                <span> - KICTeam Inc. (USA)</span>
              </h5>
              <p>
                Identified, developed and secured strategic business relationships with executive
                level decision makers in target markets. Managed communications between company
                headquarters in the USA and the company&apos;s sales teams based in Singapore,
                Australia and Brazil.Coordinated activities of salespeople from around the world,
                creating a cohesive means for the VP of Business Development to make decisions and
                increase sales. Met remotely with international salespeople on a weekly basis to
                provide training, guidance, gather information and report back to company
                headquarters. Gained the confidence of the VP of Business Development to travel to
                Asia, further create team building and present to customers directly in Singapore,
                Shanghai and Seoul.
              </p>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon">
                <i className="fas fa-briefcase"></i>
              </div>
              <p className="timeline-duration">Sep 2013 - Mar 2014</p>
              <h5>
                Intern Consultant <span> - China Sage Consultants (Shanghai)</span>
              </h5>
              <p>
                Worked directly for and with the Founder & CEO, learning first hand about sales
                incubation and providing American OEMs with strategic B2B sales and business
                development support in China. Helped create and manage online social media marketing
                content and strategy. Attended American Chamber of Commerce events and trade shows
                on behalf of company. Worked alongside a primarily non-English speaking staff and
                provided weekly English language lessons to those interested.
              </p>
            </div>

            <div className="timeline-item">
              <div className="timeline-icon">
                <i className="fa-solid fa-graduation-cap"></i>
              </div>
              <p className="timeline-duration">Sep 2009 - May 2013</p>
              <h5>
                University of Vermont <span> - B.A. Chinese Language; Business Administration</span>
              </h5>
              <p>
                Obtained a Bachelor of Arts from the University of Vermont in the USA with a major
                field of study in Mandarin Chinese language and a minor field of study in
                International Business Administration. Studied abroad in Qingdao China (Doing
                Business In China Summer Program) and Yunnan China (7 month Chinese Language
                Immersion Program).
              </p>
            </div>
            <div id="footer"></div>
          </div>
        </section>
        <section id="portfolio" className="section sec3 portfolio">
          <div>
            <div className="main-title">
              <h2>
                Recent <span className="bg-text">Projects</span>{' '}
                <span className="bg-text2">Portfolio</span>
              </h2>
            </div>

            <div className="page-desc">
              <div className="project-button">
                <div className="navlink">
                  <h2 className="cryptocrunch">CryptoCrunch App</h2>
                </div>
              </div>
              <div className="project-logos">
                <img id="logo" src="images/javascript_logo.png"></img>
                <img id="logo" src="images/python_logo.png"></img>
                <img id="logo" src="images/flask_logo_white.png"></img>
              </div>
              <p>
                Designed and built a cryptocurrency web app with a Python/Flask back-end and a
                JavaScript front-end. The app includes authentication and authorization, a live news
                feed and dynamic charts powered by the CryptoCompare API.
              </p>
            </div>
            <div className="page-desc">
              <div className="project-button">
                <div className="navlink">
                  <h2 className="musicmatch">MusicMatch App</h2>
                </div>
              </div>
              <div className="project-logos">
                <img id="logo6" src="images/react_logo.png"></img>
                <img id="logo6" src="images/nodejs_logo2.png"></img>
              </div>
              <p>
                Created a full-stack web app which helps expedite and expand the discovery of new
                music. Built with a React JS front-end and a Node.js back-end, the app allows users
                to search for music, create playlists and discover new tunes based on
                recommendations from Spotify’s powerful web API.
              </p>
            </div>
            <div className="page-desc">
              <div className="project-button">
                <div className="navlink">
                  <h2 className="jeopardy">JavaScript Jeopardy</h2>
                </div>
              </div>
              <div className="project-logos">
                <img id="logo" src="images/javascript_logo.png"></img>
              </div>
              <p>
                A remake of the classic game of Jeopardy made with pure Javascript pulling data from
                the JService API. The architecture and logic behind the Javascript codebase is
                slightly more complicated than one may expect. I chose to include it as a portfolio
                piece because it was a project that I have completed twice now. Once as a challenge
                for Springboard and once as a fun practice project for myself.
              </p>
            </div>
            <div className="page-desc">
              <div className="project-button">
                <div className="navlink">
                  <h2 className="thiswebsite">This Website</h2>
                </div>
              </div>
              <div className="project-logos">
                <img id="logo2" src="images/HTMLCSSJS_logo.png"></img>
                <img id="logo6" src="images/react_logo.png"></img>
              </div>
              <div className="this-website-desc">
                <p>
                  The website you are on right now. I created this site from scratch using HMTL CSS
                  and Javascript in React JS. I built the site from scatch so that it can serve as
                  an ongoing project which I plan to continually improve and use to learn/ practice.
                </p>
              </div>
            </div>
            <div id="footer"></div>
          </div>
        </section>
        <section id="contact" className="section sec4 contact page-intro">
          <div>
            <div className="main-title">
              <h2>
                Contact <span className="bg-text">me</span>
                <span className="bg-text2">Contact</span>
              </h2>
            </div>
          </div>
          <div className="page-desc">
            <h1 className="signature">
              Let&apos;s connect! If interested feel free to get in touch. I&apos;d love to chat and
              discuss opportunities to work together.<br></br>
            </h1>

            <br></br>

            <div id="contact">
              <table className="contact-table">
                <tbody>
                  <tr>
                    <th>NAME: </th>
                    <th>
                      <span>David Catanzano Broida</span>
                    </th>
                  </tr>
                  <tr>
                    <th>ADDRESS:</th>
                    <th>
                      <span>Portland, Maine USA</span>
                    </th>
                  </tr>
                  <tr>
                    <th>PHONE: </th>
                    <th>
                      <span>+1-207-712-4187</span>
                    </th>
                  </tr>
                  <tr>
                    <th>EMAIL: </th>
                    <th>
                      <span>
                        {' '}
                        <a
                          id="hover"
                          href="https://mail.google.com/mail/?view=cm&fs=1&to=davidcbroida@gmail.com"
                          target="_blank"
                          rel="noreferrer">
                          davidcbroida@gmail.com
                        </a>
                      </span>
                    </th>
                  </tr>
                  <tr>
                    <th>SKYPE: </th>
                    <th>
                      <span>@dcbroida</span>
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
            <br></br>
            <div className="btn-container-2">
              <a
                href="https://drive.google.com/file/d/1Bl-pZ9hqcxZ6hucMJUC5-I5HEchSwZEK/view?usp=sharing"
                download="david_broida_resume_2023.pdf"
                className="main-btn"
                target="_blank"
                rel="noreferrer">
                <span className="btn-text">Download CV</span>
                <span className="btn-icon">
                  <i className="fas fa-download"></i>
                </span>
              </a>
            </div>
          </div>
        </section>
        <section id="cryptocrunch" className="section sec5 cryptocrunch">
          <div className="cryptocrunch">
            <div className="main-title-2">
              <h2>
                Crypto <span className="bg-text">crunch</span>
                <span className="bg-text2">crypto</span>
              </h2>
            </div>

            <div className="about-container-2">
              <div className="left-about-3">
                <h4 className="about-header">
                  CryptoCrunch App:<br></br> Project Overview
                </h4>

                <p>
                  Designed and built a cryptocurrency web app with a Python/Flask back-end and a
                  JavaScript front-end. The app includes authentication and authorization, a live
                  news feed and dynamic charts from Apex Charts which are plugged into and powered
                  by the CryptoCompare API.
                </p>
                <img id="desktop" src="images/cryptocrunch_mock.png"></img>

                {/* <div className="btn-container-5">
                  <a
                    href="https://cryptocrunch2.herokuapp.com/ "
                    className="main-btn"
                    target="_blank"
                    rel="noreferrer">
                    <span className="btn-text">Visit Website</span>
                    <span className="btn-icon">
                      <i className="fa-solid fa-desktop"></i>
                    </span>
                  </a>
                </div> */}
                <div className="btn-container-4">
                  <a
                    href="https://github.com/davidbroida/Crypto-Crunch-App/tree/main/capstone_1"
                    className="main-btn-2"
                    target="_blank"
                    rel="noreferrer">
                    <span className="btn-text">Github</span>
                    <span className="btn-icon-2">
                      <i className="fa-brands fa-github"></i>
                    </span>
                  </a>
                </div>
              </div>
              <div className="right-about-2">
                <div className="about-item">
                  <div className="project-item">
                    <img id="logo5" src="images/javascript_logo.png"></img>
                    <img id="logo5" src="images/python_logo.png"></img>
                    <img id="logo5" src="images/flask_logo_white.png"></img>
                    <p className="small-text">
                      - Built With<br></br>Javascript, Python & the Flask Framework
                    </p>
                  </div>
                </div>
                <div className="about-item">
                  <div className="project-item4">
                    <img id="logo3" src="images/jsonwebtokenlogo.png" alt="" />
                    <p className="small-text">
                      - JSON Web Token<br></br>Authorization
                    </p>
                  </div>
                </div>
                <div className="about-item">
                  <div className="project-item2">
                    <img id="logo3" src="images/cryptocomparelogo.png"></img>
                    <p className="small-text">
                      - Cryptocompare<br></br> API Integration
                    </p>
                  </div>
                </div>
                <div className="about-item">
                  <div className="project-item3">
                    <img id="logo2" src="images/apex-charts-logo.png" />
                    <p className="small-text">
                      - Live charting<br></br>from Apex Charts
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <h4 className="desc-title-3">
              Example
              <span className="letter"> </span>
              <span className="letter">C</span>
              <span className="letter">O</span>
              <span className="letter">D</span>
              <span className="letter">E</span>
            </h4>
            <div className="project-desc-container2">
              <div className="project-desc-left">
                <h4 className="desc-title2">
                  Python Routing For <span>API Calls</span>
                </h4>
                <p className="code-desc">
                  This is an exmaple of the Python code that was used to create some of the routing
                  for the application and connect to the database based off of different URLs and
                  PUT/ DELETE requests. The first three routes are used to convert database data
                  into JSON that is used to build and power the application. The second two routes
                  are used for adding and deleting favorites to the database table when a
                  cryptocurrency is favorited by a user.
                </p>
              </div>
              <div className="project-desc-right">
                <div className="desc-img-container">
                  <img
                    id="img5"
                    className="proj-desc-img"
                    src="images/API_CryptoCrunch_screenshot.png"
                  />
                </div>
                <div className="img5 proj-desc-img-zoomed">
                  <img src="images/API_CryptoCrunch_screenshot.png" />
                </div>
              </div>
            </div>
            <div className="project-desc-container2">
              <div className="project-desc-left">
                <h4 className="desc-title2">
                  Authentication &<span> Hashing w/ Bcrypt</span>
                </h4>
                <p className="code-desc">
                  Passwords are protected and saved into the database using cryptographic hashing
                  with Bcrypt for added security. This example code is used to both create the
                  hashed password and then authenticate that any input password matches one of the
                  hashed passwords which is saved in the database.
                </p>
              </div>
              <div className="project-desc-right">
                <div className="desc-img-container">
                  <img
                    id="img6"
                    className="proj-desc-img"
                    src="images/bcrypt_auth_screenshot.png"
                  />
                </div>
                <div className="img6 proj-desc-img-zoomed">
                  <img src="images/bcrypt_auth_screenshot.png" />
                </div>
              </div>
            </div>
            <div className="project-desc-container2">
              <div className="project-desc-left">
                <h4 className="desc-title2">
                  Live
                  <span> Charting</span>
                </h4>
                <p className="code-desc">
                  An example of some simple code that was used to connect JSON responses from the
                  CryptoCompare API and display the data in the form of classic, financial
                  candlestick charts from Apex Charts.
                </p>
              </div>
              <div className="project-desc-right">
                <div className="desc-img-container">
                  <img id="img7" className="proj-desc-img" src="images/apexcharts_screenshot.png" />
                </div>
                <div className="img7 proj-desc-img-zoomed">
                  <img src="images/apexcharts_screenshot.png" />
                </div>
              </div>
            </div>
            <div className="project-desc-container2">
              <div className="project-desc-left">
                <h4 className="desc-title2">
                  Unit
                  <span> Testing</span>
                </h4>
                <p className="code-desc">
                  One of several unit tests that I created while building the application to make
                  sure that everything didn&apos;t just appear to work but worked when presented
                  with multiple different edge cases.
                </p>
              </div>
              <div className="project-desc-right">
                <div className="desc-img-container">
                  <img id="img8" className="proj-desc-img" src="images/testing_screenshot.png" />
                </div>
                <div className="img8 proj-desc-img-zoomed">
                  <img src="images/testing_screenshot.png" />
                </div>
              </div>
            </div>
            <div id="footer"></div>
          </div>
        </section>
        <section id="musicmatch" className="section sec6 musicmatch">
          <div>
            <div className="main-title-3">
              <h2>
                Music <span className="bg-text">match</span>
                <span className="bg-text2">music</span>
              </h2>
            </div>

            <div className="about-container-2">
              <div className="left-about-3">
                <h4 className="about-header">
                  MusicMatch App:<br></br> Project Overview
                </h4>

                <p>
                  Created a full-stack web app which helps expedite and expand the discovery of new
                  music. Built with a React JS front-end and a Node.js back-end, the app allows
                  users to search for music, create playlists and discover new tunes based on
                  recommendations from Spotify’s powerful web API. I&apos;m proud of this project
                  because of it&apos;s clean, React JS architecture and codebase along with having
                  user authorization and authentication for signup and login.
                </p>
                <img id="desktop" src="images/musicMatch_mock.png"></img>

                {/* <div className="btn-container-5">
                  <a
                    href="https://musicmatchapp.herokuapp.com/"
                    className="main-btn"
                    target="_blank"
                    rel="noreferrer">
                    <span className="btn-text">Visit Website</span>
                    <span className="btn-icon">
                      <i className="fa-solid fa-desktop"></i>
                    </span>
                  </a>
                </div> */}
                <div className="btn-container-4">
                  <a
                    href="https://github.com/davidbroida/Music-Match-App"
                    className="main-btn-2"
                    target="_blank"
                    rel="noreferrer">
                    <span className="btn-text">Github</span>
                    <span className="btn-icon-2">
                      <i className="fa-brands fa-github"></i>
                    </span>
                  </a>
                </div>
              </div>
              <div className="right-about-2">
                <div className="about-item">
                  <div className="project-item">
                    <img id="logo5" src="images/react_logo.png"></img>
                    <img id="logo5" src="images/nodejs_logo2.png"></img>
                    <p className="small-text">
                      - Built With<br></br>React JS & Node.js
                    </p>
                  </div>
                </div>
                <div className="about-item">
                  <div className="project-item4">
                    <img id="logo3" src="images/jsonwebtokenlogo.png" alt="" />
                    <p className="small-text">
                      - JSON Web Token<br></br>Authorization
                    </p>
                  </div>
                </div>
                <div className="about-item">
                  <div className="project-item2">
                    <img id="logo2" src="images/spotify_logo2-transparent.png"></img>
                    <p className="small-text">
                      - Spotify Web <br></br>API Integration
                    </p>
                  </div>
                </div>
                <div className="about-item">
                  <div className="about-text">
                    <p className="large-text">Automatic</p>
                    <p className="small-text">
                      - Song Lyric<br></br>generation<br></br>(Still buggy)
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <h4 className="desc-title-3">
              Example
              <span className="letter"> </span>
              <span className="letter">C</span>
              <span className="letter">o</span>
              <span className="letter">d</span>
              <span className="letter">e</span>
            </h4>
            <div className="project-desc-container2">
              <div className="project-desc-left">
                <h4 className="desc-title2">
                  Application <span>Architecture</span>
                </h4>
                <p className="code-desc">
                  This is an example of the React JS code that was used to create the overall
                  architecture of the app. The code also demonstrates basic use of React hooks and
                  JSON Web Tokens to manage state (the React hooks) authorization and authentication
                  (JSON Web Token). This made it relatively easy for me to write the code which
                  allows people to sign up, sign in and log out of the application. This type of
                  feature also requires some backend knowledge, as user information needs to be sent
                  to, stored in, and retreived from a back-end database which I created myself as
                  well.
                </p>
              </div>
              <div className="project-desc-right">
                <div className="desc-img-container">
                  <img
                    id="img1"
                    className="proj-desc-img"
                    src="images/react_architecture_screenshot_xxs.png"
                  />
                </div>
                <div className="img1 proj-desc-img-zoomed">
                  <img src="images/react_architecture_screenshot.png" />
                </div>
              </div>
            </div>
            <div className="project-desc-container2">
              <div className="project-desc-left">
                <h4 className="desc-title2">
                  JSON Web Token <span>Authorization</span>
                </h4>
                <p className="code-desc">
                  A more in-depth look at the code that was used to allow for authorization and
                  authentication (sign up and login) using JSON Web Token and middleware which
                  connects the application to the database. If a token is provided it is verified
                  and if valid, stored. If no token is provided or the provided token is invalid an
                  error is thrown. The code also insures that certain pages can only be viewed by
                  users who are logged in and that certain pages can only be viewed by Admins.
                </p>
              </div>
              <div className="project-desc-right">
                <div className="desc-img-container">
                  <img
                    id="img2"
                    className="proj-desc-img"
                    src="images/musicMatch_webtoken_screenshot.png"
                  />
                </div>
                <div className="img2 proj-desc-img-zoomed">
                  <img src="images/musicMatch_webtoken_screenshot.png" />
                </div>
              </div>
            </div>

            <div className="project-desc-container2">
              <div className="project-desc-left">
                <h4 className="desc-title2">
                  Spotify Web <span>API Integration</span>
                </h4>
                <p className="code-desc">
                  Here&apos; s an exmaple of the code that was used to integrate the app with the
                  Spotify Web API. Users must first verify that they have a Spotify account and then
                  they are able to begin using the app. The API works off of simple RESTful API
                  principles (GET, PUT, POST and DELETE). When a request is made the Spotify Web API
                  returns JSON data about music artists, albums and tracks from the API which is
                  then used to create the client-facing front-end that users interact with.
                </p>
              </div>
              <div className="project-desc-right">
                <div className="desc-img-container">
                  <img
                    id="img3"
                    className="proj-desc-img"
                    src="images/spotify_api_screenshot.png"
                  />
                </div>
                <div className="img3 proj-desc-img-zoomed">
                  <img src="images/spotify_api_screenshot.png" />
                </div>
              </div>
            </div>
            <div className="project-desc-container2">
              <div className="project-desc-left">
                <h4 className="desc-title2">
                  use Effect Hook & <span>Refresh Token</span>
                </h4>
                <p className="code-desc">
                  A more in-depth look at code that utilizes React hooks and web tokens for
                  authentication and authorization. Here the useEffect hook is used to set the
                  access token and a refresh token which can be used after the initial access token
                  has expired. Simply put, this creates a better, more seamless user experience
                  because clients are not forced to re-login to the app multiple times.
                </p>
              </div>
              <div className="project-desc-right">
                <div className="desc-img-container">
                  <img
                    id="img4"
                    className="proj-desc-img"
                    src="images/useAuthHook_screenshot.png"
                  />
                </div>
                <div className="img4 proj-desc-img-zoomed">
                  <img src="images/useAuthHook_screenshot.png" />
                </div>
              </div>
            </div>
            <div id="footer"></div>
          </div>
        </section>
        <section id="jeopardy" className="section sec7 jeopardy">
          <div className="main-title-2">
            <h2>
              Javascript <span className="bg-text">Jeopardy</span>
              <span className="bg-text2">jeopardy</span>
            </h2>
          </div>
          {/* <div className="project-container"> */}
          <div className="about-container-2">
            <div className="left-about-3">
              <h4 className="about-header">
                Javascript Jeopardy:<br></br> Project Overview
              </h4>

              <p>
                Recreated the classic game of Jeopardy using purely vanilla Javascript, HTML and
                CSS. The original project was a timed challenge via. Springboard which I redesigned
                recently to fix bugs, smooth out API calls and re-style with CSS.
              </p>
              <img id="desktop" src="images/jeopardy_mockup.png"></img>

              <div className="btn-container-5">
                <a
                  href="https://javascript-jeopardy.herokuapp.com/"
                  className="main-btn"
                  target="_blank"
                  rel="noreferrer">
                  <span className="btn-text">Let&apos;s Play Jeopardy!</span>
                  <span className="btn-icon">
                    <i className="fa-solid fa-desktop"></i>
                  </span>
                </a>
              </div>

              <div className="btn-container-4">
                <a
                  href="https://github.com/davidbroida/Javascript-Jeopardy"
                  className="main-btn-2"
                  target="_blank"
                  rel="noreferrer">
                  <span className="btn-text">Github</span>
                  <span className="btn-icon-2">
                    <i className="fa-brands fa-github "></i>
                  </span>
                </a>
              </div>
            </div>
            <div className="right-about-2">
              <div className="about-item">
                <div className="project-item">
                  <img id="logo4" src="images/javascript_logo.png"></img>
                  <p className="small-text">
                    - App Made With<br></br>Purely Javascript
                  </p>
                </div>
              </div>
              <div className="about-item">
                <div className="project-item4">
                  <img id="logo3" src="images/jservice_api_logo.png" alt="" />
                  <p className="small-text">
                    - JService API <br></br>Integration
                  </p>
                </div>
              </div>
              <div className="about-item">
                <div className="about-text">
                  <p className="large-text">220,000+</p>
                  <p className="small-text">
                    - Trivia Questions<br></br>
                    <br></br>
                  </p>
                </div>
              </div>
              <div className="about-item">
                <div className="about-text">
                  <p className="large-text">O.O.P.</p>
                  <p className="small-text">
                    - Object Oriented Programming<br></br>
                    <br></br>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <h4 className="desc-title-3">
            Example
            <span className="letter"> </span>
            <span className="letter"> </span>
            <span className="letter">C</span>
            <span className="letter">O</span>
            <span className="letter">D</span>
            <span className="letter">E</span>
          </h4>
          <div className="project-desc-container2">
            <div className="project-desc-left">
              <h4 className="desc-title2">
                Object Oriented <span>Javascript</span>
              </h4>
              <p className="code-desc">
                An exmaple of the object oriented Javascript code that was used to create a class
                object which the entire game runs off of. The constructor includes elements and
                options. Elements are all of the HTML elements that are manipulated during gameplay
                and the options are things such as the categories, clues and score.
              </p>
            </div>
            <div className="project-desc-right">
              <div className="desc-img-container">
                <img id="img9" className="proj-desc-img" src="images/javascript_oop_example.png" />
              </div>
              <div className="img9 proj-desc-img-zoomed">
                <img src="images/javascript_oop_example.png" />
              </div>
            </div>
          </div>
          <div className="project-desc-container2">
            <div className="project-desc-left">
              <h4 className="desc-title2">
                Created using the <span>JService API</span>
              </h4>
              <p className="code-desc">
                Simple example of an API call to the JService API. Data is fetched and a new object
                is created with all of the resolved data. The data is then simplified further into
                an object of nested objects (clues) which are used to render the HTML gameboard and
                corresponding data (IDs, answers and values) for each datacell in the Jeopardy
                gameboard.
              </p>
            </div>
            <div className="project-desc-right">
              <div className="desc-img-container">
                <img id="img10" className="proj-desc-img" src="images/jservice_api_example.png" />
              </div>
              <div className="img10 proj-desc-img-zoomed">
                <img src="images/jservice_api_example.png" />
              </div>
            </div>
            <div id="footer"></div>
          </div>
        </section>
        <section id="thiswebsite" className="section sec8 thiswebsite">
          <div className="main-title">
            <h2>
              This <span className="bg-text">website</span>
              <span className="bg-text2">website</span>
            </h2>
          </div>
          <div className="project-container2">
            <div className="page-desc">
              <div className="project-logos">
                <img id="logo2" src="images/HTMLCSSJS_logo.png"></img>
              </div>
              <p>
                I designed and built this website from scratch using HTML, CSS and Javascript. At
                the moment there are some issues that I think could easily be solved using state so
                in the near future my plan is to refactor the code and turn it into a true React JS
                app. This should not only be an easy fix to some of the bugs, but should also serve
                to highlight my skills as a React Developer.
              </p>
            </div>
            <div className="btn-container-7">
              <a onClick={callAlert} className="main-btn">
                <span className="btn-text">Visit Website</span>
                <span className="btn-icon">
                  <i className="fa-solid fa-desktop"></i>
                </span>
              </a>
            </div>
            <div className="btn-container-6">
              <a
                href="https://github.com/davidbroida/my-portfolio"
                className="main-btn-2"
                target="_blank"
                rel="noreferrer">
                <span className="btn-text">Github</span>
                <span className="btn-icon-2">
                  <i className="fa-brands fa-github"></i>
                </span>
              </a>
            </div>
            <div id="footer"></div>
          </div>
        </section>
      </div>
      <div id="toggle" onClick={toggle}></div>
      <div id="controls" className="controls">
        <div className="control control-1 active-btn" id="home" onClick={displayHome}>
          <i className="fa-solid fa-house" id="home"></i>
        </div>
        <div className="control control-3" id="about">
          <i className="fa-solid fa-user" id="about"></i>
        </div>
        <div className="control control-2" id="portfolio">
          <i className="fa-solid fa-briefcase" id="portfolio"></i>
        </div>
        <div className="control control-4" id="contact">
          <i className="fa-solid fa-envelope" id="contact"></i>
        </div>
      </div>
    </div>
  );
}

function callAlert() {
  alert('Suprise! You are already on this website.');
}

export default Home;
