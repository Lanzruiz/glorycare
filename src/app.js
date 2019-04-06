class Header extends React.Component {

    render() {
        return (
            <header id="header">
                <div className="container">
                    <div id="logo" className="pull-left">
                        <a href="index.html">
                            <img src="img/logo-nav.png" alt="" title="" />
                        </a>
                    </div>
                    <nav id="nav-menu-container">
                       <ul class="nav-menu">
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#features">Features</a></li>
                            <li><a href="#portfolio">Portfolio</a></li>
                            <li><a href="#team">Team</a></li>
                            <li class="menu-has-children"><a href="">Drop Down</a>
                                <ul>
                                    <li><a href="#">Drop Down 1</a></li>
                                    <li class="menu-has-children"><a href="#">Drop Down 2</a>
                                        <ul>
                                            <li><a href="#">Deep Drop Down 1</a></li>
                                            <li><a href="#">Deep Drop Down 2</a></li>
                                            <li><a href="#">Deep Drop Down 3</a></li>
                                            <li><a href="#">Deep Drop Down 4</a></li>
                                            <li><a href="#">Deep Drop Down 5</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Drop Down 3</a></li>
                                    <li><a href="#">Drop Down 4</a></li>
                                    <li><a href="#">Drop Down 5</a></li>
                                </ul>
                            </li>
                            <li><a href="#contact">Contact Us</a></li>
                       </ul>
                    </nav>
                    <nav className="nav social-nav pull-right d-none d-lg-inline">
                        <a href="#"><i class="fa fa-twitter"></i></a> 
                        <a href="#"><i class="fa fa-facebook"></i></a> 
                        <a href="#"><i class="fa fa-linkedin"></i></a> 
                        <a href="#"><i class="fa fa-envelope"></i></a>
                   </nav>
                </div>
            </header>
        );
    }
}
class Slider extends React.Component {
    render() {
        return (
            <section className="hero">
                <div className="container text-center">
                    <div className="row">
                        <div className="col-md-12">
                            <a className="hero-brand" href="index.html" title="Home">
                                <img alt="Bell Logo" src="img/logo.png"></img>
                            </a>
                        </div>
                    </div>

                    <div className="col-md-12">
                        <h1>A theme with personality</h1>

                        <p className="tagline">
                            This is a powerful theme with some great features that you can use in your future projects.
                        </p>
                        <a className="btn btn-full" href="#about">Get Started Now</a>
                    </div>
                </div>
            </section>
        );
    }
}

class About extends React.Component {
    render() {
        return (
            <section className="about" id="about">
                <div className="container text-center">
                    <h2>About Bell Theme</h2>
                    <p>Voluptua scripserit per ad, laudem viderer sit ex. Ex alia corrumpit voluptatibus usu, sed unum convenire id. Ut cum nisl moderatius, per nihil dicant commodo an. Eum tacimates erroribus ad. Atqui feugiat euripidis ea pri, sed veniam tacimates ex. Menandri
                temporibus an duo.</p>
        
                    <div className="row stats-row">
                        <div className="stats-col text-center col-md-3 col-sm-6">
                            <div className="circle">
                                <span className="stats-no" data-toggle="counter-up">232</span> Satisfied Customers
                            </div>
                        </div>
            
                        <div className="stats-col text-center col-md-3 col-sm-6">
                            <div className="circle">
                                <span className="stats-no" data-toggle="counter-up">79</span> Released Projects
                            </div>
                        </div>
            
                        <div className="stats-col text-center col-md-3 col-sm-6">
                            <div className="circle">
                                <span className="stats-no" data-toggle="counter-up">1,463</span> Hours Of Support
                            </div>
                        </div>
            
                        <div className="stats-col text-center col-md-3 col-sm-6">
                        <div className="circle">
                            <span className="stats-no" data-toggle="counter-up">15</span> Hard Workers
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        )
    }
}

class Parallax extends React.Component {
    render() {
        return (
            <div className="block bg-primary block-pd-lg block-bg-overlay text-center" data-bg-img="img/parallax-bg.jpg" data-settings='{"stellar-background-ratio": 0.6}' data-toggle="parallax-bg">
               <h2>Welcome to a perfect theme</h2>
               <p>This is the most powerful theme with thousands of options that you have never seen before.</p>
               <img alt="Bell - A perfect theme" class="gadgets-img hidden-md-down" src="img/gadgets.png"></img>
            </div>
        );
    }
}

class Features extends React.Component {
    render() {
        return (
            <section className="features" id="features">
                <div className="container">
                    <h2 className="text-center">Features</h2>
                    <div class="row">
                        <div class="feature-col col-lg-4 col-xs-12">
                        <div class="card card-block text-center">
                            <div>
                            <div class="feature-icon">
                                <span class="fa fa-rocket"></span>
                            </div>
                            </div>

                            <div>
                            <h3>
                                Custom Design
                                </h3>

                            <p>
                                Eque feugiat contentiones ei has. Id summo mundi explicari his, nec in maiorum scriptorem.
                            </p>
                            </div>
                        </div>
                        </div>

                        <div class="feature-col col-lg-4 col-xs-12">
                        <div class="card card-block text-center">
                            <div>
                            <div class="feature-icon">
                                <span class="fa fa-envelope"></span>
                            </div>
                            </div>

                            <div>
                            <h3>
                                Responsive Layout
                                </h3>

                            <p>
                                Eque feugiat contentiones ei has. Id summo mundi explicari his, nec in maiorum scriptorem.
                            </p>
                            </div>
                        </div>
                        </div>

                        <div class="feature-col col-lg-4 col-xs-12">
          <div class="card card-block text-center">
            <div>
              <div class="feature-icon">
                <span class="fa fa-bell"></span>
              </div>
            </div>

            <div>
              <h3>
                  Innovative Ideas
                </h3>

              <p>
                Eque feugiat contentiones ei has. Id summo mundi explicari his, nec in maiorum scriptorem.
              </p>
            </div>
          </div>
        </div>
                    </div>
                    <div class="row">
                        <div class="feature-col col-lg-4 col-xs-12">
                        <div class="card card-block text-center">
                            <div>
                            <div class="feature-icon">
                                <span class="fa fa-database"></span>
                            </div>
                            </div>

                            <div>
                            <h3>
                                Good Documentation
                                </h3>

                            <p>
                                Eque feugiat contentiones ei has. Id summo mundi explicari his, nec in maiorum scriptorem.
                            </p>
                            </div>
                        </div>
                        </div>

                        <div class="feature-col col-lg-4 col-xs-12">
                        <div class="card card-block text-center">
                            <div>
                            <div class="feature-icon">
                                <span class="fa fa-cutlery"></span>
                            </div>
                            </div>

                            <div>
                            <h3>
                                Excellent Features
                                </h3>

                            <p>
                                Eque feugiat contentiones ei has. Id summo mundi explicari his, nec in maiorum scriptorem.
                            </p>
                            </div>
                        </div>
                        </div>

                        <div class="feature-col col-lg-4 col-xs-12">
          <div class="card card-block text-center">
            <div>
              <div class="feature-icon">
                <span class="fa fa-dashboard"></span>
              </div>
            </div>

            <div>
              <h3>
                  Retina Ready
                </h3>

              <p>
                Eque feugiat contentiones ei has. Id summo mundi explicari his, nec in maiorum scriptorem.
              </p>
            </div>
          </div>
        </div>
                    </div>
                </div>
            </section>
        );
    }
}

class Cta extends React.Component {
    render() {
        return (
            <section className="cta">
                <div className="container">
                <div className="row">
                    <div class="col-lg-9 col-sm-12 text-lg-left text-center">
                    <h2>
                        Call to Action Section
                        </h2>

                    <p>
                        Lorem ipsum dolor sit amet, nec ad nisl mandamus imperdiet, ut corpora cotidieque cum. Et brute iracundia his, est eu idque dictas gubergren
                    </p>
                    </div>

                    <div className="col-lg-3 col-sm-12 text-lg-right text-center">
                    <a className="btn btn-ghost" href="#">Buy This Theme</a>
                    </div>
                </div>
                </div>
            </section>
        )
    }
}

class Portfolio extends React.Component {
    render() {
        return (
            <section className="portfolio" id="portfolio">
                <div className="container text-center">
                    <h2>Portfolio</h2>
                    <p>Voluptua scripserit per ad, laudem viderer sit ex. Ex alia corrumpit voluptatibus usu, sed unum convenire id. Ut cum nisl moderatius, Per nihil dicant commodo an.</p>
                </div>
                <div className="portfolio-grid">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6 col-xs-12">
                            <div className="card card-block">
                                    <a href="#">
                                        <img alt="" src="img/porf-1.jpg"></img>
                                        <div className="portfolio-over">
                                            <div>
                                                <h3 className="card-title">The Dude Rockin'</h3>
                                                <p className="card-text">Lorem ipsum dolor sit amet, eu sed suas eruditi honestatis.</p>
                                            </div>
                                        </div>
                                    </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-xs-12">
                            <div className="card card-block">
                                    <a href="#">
                                        <img alt="" src="img/porf-2.jpg"></img>
                                        <div className="portfolio-over">
                                            <div>
                                                <h3 className="card-title">The Dude Rockin'</h3>
                                                <p className="card-text">Lorem ipsum dolor sit amet, eu sed suas eruditi honestatis.</p>
                                            </div>
                                        </div>
                                    </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-xs-12">
                            <div className="card card-block">
                                    <a href="#">
                                        <img alt="" src="img/porf-3.jpg"></img>
                                        <div className="portfolio-over">
                                            <div>
                                                <h3 className="card-title">The Dude Rockin'</h3>
                                                <p className="card-text">Lorem ipsum dolor sit amet, eu sed suas eruditi honestatis.</p>
                                            </div>
                                        </div>
                                    </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-xs-12">
                            <div className="card card-block">
                                    <a href="#">
                                        <img alt="" src="img/porf-4.jpg"></img>
                                        <div className="portfolio-over">
                                            <div>
                                                <h3 className="card-title">The Dude Rockin'</h3>
                                                <p className="card-text">Lorem ipsum dolor sit amet, eu sed suas eruditi honestatis.</p>
                                            </div>
                                        </div>
                                    </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-xs-12">
                            <div className="card card-block">
                                    <a href="#">
                                        <img alt="" src="img/porf-5.jpg"></img>
                                        <div className="portfolio-over">
                                            <div>
                                                <h3 className="card-title">The Dude Rockin'</h3>
                                                <p className="card-text">Lorem ipsum dolor sit amet, eu sed suas eruditi honestatis.</p>
                                            </div>
                                        </div>
                                    </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-xs-12">
                            <div className="card card-block">
                                    <a href="#">
                                        <img alt="" src="img/porf-6.jpg"></img>
                                        <div className="portfolio-over">
                                            <div>
                                                <h3 className="card-title">The Dude Rockin'</h3>
                                                <p className="card-text">Lorem ipsum dolor sit amet, eu sed suas eruditi honestatis.</p>
                                            </div>
                                        </div>
                                    </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-xs-12">
                            <div className="card card-block">
                                    <a href="#">
                                        <img alt="" src="img/porf-7.jpg"></img>
                                        <div className="portfolio-over">
                                            <div>
                                                <h3 className="card-title">The Dude Rockin'</h3>
                                                <p className="card-text">Lorem ipsum dolor sit amet, eu sed suas eruditi honestatis.</p>
                                            </div>
                                        </div>
                                    </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-xs-12">
                            <div className="card card-block">
                                    <a href="#">
                                        <img alt="" src="img/porf-8.jpg"></img>
                                        <div className="portfolio-over">
                                            <div>
                                                <h3 className="card-title">The Dude Rockin'</h3>
                                                <p className="card-text">Lorem ipsum dolor sit amet, eu sed suas eruditi honestatis.</p>
                                            </div>
                                        </div>
                                    </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

class Team extends React.Component {
    render() {
        return (
            <section className="team" id="team">
                <div className="container">
                    <h2 className="text-center">Meet our team</h2>
                </div>
                <div className="row">
                    <div className="col-sm-3 col-xs-6">
                        <div className="card card-block">
                            <a href="#">
                                <img alt="" className="team-img" src="img/team-1.jpg"></img>
                                <div className="card-title-wrap">
                                    <span className="card-title">Sergio Fez</span> 
                                    <span className="card-text">Art Director</span>
                                </div>
                                <div classNam="team-over">
                                    <h4 className="hidden-md-down">Connect with me</h4>
                                    <nav className="social-nav">
                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                        <a href="#"><i className="fa fa-facebook"></i></a>
                                        <a href="#"><i className="fa fa-linkedin"></i></a>
                                        <a href="#"><i className="fa fa-envelope"></i></a>
                                    </nav>
                                    <p>Lorem ipsum dolor sit amet, eu sed suas eruditi honestatis.</p>
                                </div>
                            </a>    
                        </div>
                    </div>
                    <div className="col-sm-3 col-xs-6">
                        <div className="card card-block">
                            <a href="#">
                                <img alt="" className="team-img" src="img/team-2.jpg"></img>
                                <div className="card-title-wrap">
                                    <span className="card-title">Sergio Fez</span> 
                                    <span className="card-text">Art Director</span>
                                </div>
                                <div className="team-over">
                                    <h4 className="hidden-md-down">Connect with me</h4>
                                    <nav className="social-nav">
                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                        <a href="#"><i className="fa fa-facebook"></i></a>
                                        <a href="#"><i className="fa fa-linkedin"></i></a>
                                        <a href="#"><i className="fa fa-envelope"></i></a>
                                    </nav>
                                    <p>Lorem ipsum dolor sit amet, eu sed suas eruditi honestatis.</p>
                                </div>
                            </a>    
                        </div>
                    </div>
                    <div className="col-sm-3 col-xs-6">
                        <div className="card card-block">
                            <a href="#">
                                <img alt="" className="team-img" src="img/team-3.jpg"></img>
                                <div className="card-title-wrap">
                                    <span className="card-title">Sergio Fez</span> 
                                    <span className="card-text">Art Director</span>
                                </div>
                                <div className="team-over">
                                    <h4 className="hidden-md-down">Connect with me</h4>
                                    <nav className="social-nav">
                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                        <a href="#"><i className="fa fa-facebook"></i></a>
                                        <a href="#"><i className="fa fa-linkedin"></i></a>
                                        <a href="#"><i className="fa fa-envelope"></i></a>
                                    </nav>
                                    <p>Lorem ipsum dolor sit amet, eu sed suas eruditi honestatis.</p>
                                </div>
                            </a>    
                        </div>
                    </div>
                    <div className="col-sm-3 col-xs-6">
                        <div className="card card-block">
                            <a href="#">
                                <img alt="" className="team-img" src="img/team-4.jpg"></img>
                                <div className="card-title-wrap">
                                    <span className="card-title">Sergio Fez</span> 
                                    <span className="card-text">Art Director</span>
                                </div>
                                <div className="team-over">
                                    <h4 className="hidden-md-down">Connect with me</h4>
                                    <nav className="social-nav">
                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                        <a href="#"><i className="fa fa-facebook"></i></a>
                                        <a href="#"><i className="fa fa-linkedin"></i></a>
                                        <a href="#"><i className="fa fa-envelope"></i></a>
                                    </nav>
                                    <p>Lorem ipsum dolor sit amet, eu sed suas eruditi honestatis.</p>
                                </div>
                            </a>    
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

class Contact extends React.Component {
    render() {
        return (
            <section id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h2 className="section-title">Contact Us</h2>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-3 col-md-4">
                            <div className="info">
                                <div>
                                    <i className="fa fa-map-marker"></i>
                                    <p>A108 Adam Street<br/>New York, NY 535022</p>
                                </div>
                                <div>
                                    <i className="fa fa-envelope"></i>
                                    <p>info@example.com</p>
                                </div>
                                <div>
                                    <i className="fa fa-phone"></i>
                                    <p>+1 5589 55488 55s</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-8">
                            <div className="form">
                                <div id="sendmessage">Your message has been sent. Thank you!</div>
                                <div id="errormessage"></div>
                                <form action="" method="post" role="form" className="contactForm">
                                    <div className="form-group">
                                        <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                        <div className="validation"></div>
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                        <div className="validation"></div>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                        <div className="validation"></div>
                                    </div>
                                    <div className="form-group">
                                        <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                                        <div className="validation"></div>
                                    </div>
                                    <div className="text-center"><button type="submit">Send Message</button></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
 
        );
    }
}

class Footer extends React.Component {
    render() {
        return (
            <div>
                <Contact />
                <footer className="site-footer">
                    <div className="bottom">
                        <div className="container">
                            <div class="row">
                                <div class="col-lg-6 col-xs-12 text-lg-left text-center">
                                    <p class="copyright-text">© BELL Theme</p>
                                    <div class="credits">
                                        esigned by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-xs-12 text-lg-right text-center">
                                    <ul class="list-inline">
                                        <li class="list-inline-item">
                                            <a href="index.html">Home</a>
                                        </li>

                                        <li class="list-inline-item">
                                            <a href="#about">About Us</a>
                                        </li>

                                        <li class="list-inline-item">
                                            <a href="#features">Features</a>
                                        </li>

                                        <li class="list-inline-item">
                                            <a href="#portfolio">Portfolio</a>
                                        </li>

                                        <li class="list-inline-item">
                                            <a href="#team">Team</a>
                                        </li>

                                        <li class="list-inline-item">
                                            <a href="#contact">Contact</a>
                                        </li>
                                    </ul>
                                </div>
    
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

class Home extends React.Component {
   render() {
       return (
           <div>
                <Slider />
                <Header />
                <About />
                <Parallax />
                <Features />
                <Cta />
                <Portfolio />
                <Team />
                <Footer />
           </div>
       )
   }    
}

ReactDOM.render(<Home />, document.getElementById('home'));

