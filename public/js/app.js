"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
    _inherits(Header, _React$Component);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "header",
                { id: "header" },
                React.createElement(
                    "div",
                    { className: "container" },
                    React.createElement(
                        "div",
                        { id: "logo", className: "pull-left" },
                        React.createElement(
                            "a",
                            { href: "index.html" },
                            React.createElement("img", { src: "img/logo-nav.png", alt: "", title: "" })
                        )
                    ),
                    React.createElement(
                        "nav",
                        { id: "nav-menu-container" },
                        React.createElement(
                            "ul",
                            { "class": "nav-menu" },
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "a",
                                    { href: "#about" },
                                    "About Us"
                                )
                            ),
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "a",
                                    { href: "#features" },
                                    "Features"
                                )
                            ),
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "a",
                                    { href: "#portfolio" },
                                    "Portfolio"
                                )
                            ),
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "a",
                                    { href: "#team" },
                                    "Team"
                                )
                            ),
                            React.createElement(
                                "li",
                                { "class": "menu-has-children" },
                                React.createElement(
                                    "a",
                                    { href: "" },
                                    "Drop Down"
                                ),
                                React.createElement(
                                    "ul",
                                    null,
                                    React.createElement(
                                        "li",
                                        null,
                                        React.createElement(
                                            "a",
                                            { href: "#" },
                                            "Drop Down 1"
                                        )
                                    ),
                                    React.createElement(
                                        "li",
                                        { "class": "menu-has-children" },
                                        React.createElement(
                                            "a",
                                            { href: "#" },
                                            "Drop Down 2"
                                        ),
                                        React.createElement(
                                            "ul",
                                            null,
                                            React.createElement(
                                                "li",
                                                null,
                                                React.createElement(
                                                    "a",
                                                    { href: "#" },
                                                    "Deep Drop Down 1"
                                                )
                                            ),
                                            React.createElement(
                                                "li",
                                                null,
                                                React.createElement(
                                                    "a",
                                                    { href: "#" },
                                                    "Deep Drop Down 2"
                                                )
                                            ),
                                            React.createElement(
                                                "li",
                                                null,
                                                React.createElement(
                                                    "a",
                                                    { href: "#" },
                                                    "Deep Drop Down 3"
                                                )
                                            ),
                                            React.createElement(
                                                "li",
                                                null,
                                                React.createElement(
                                                    "a",
                                                    { href: "#" },
                                                    "Deep Drop Down 4"
                                                )
                                            ),
                                            React.createElement(
                                                "li",
                                                null,
                                                React.createElement(
                                                    "a",
                                                    { href: "#" },
                                                    "Deep Drop Down 5"
                                                )
                                            )
                                        )
                                    ),
                                    React.createElement(
                                        "li",
                                        null,
                                        React.createElement(
                                            "a",
                                            { href: "#" },
                                            "Drop Down 3"
                                        )
                                    ),
                                    React.createElement(
                                        "li",
                                        null,
                                        React.createElement(
                                            "a",
                                            { href: "#" },
                                            "Drop Down 4"
                                        )
                                    ),
                                    React.createElement(
                                        "li",
                                        null,
                                        React.createElement(
                                            "a",
                                            { href: "#" },
                                            "Drop Down 5"
                                        )
                                    )
                                )
                            ),
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    "a",
                                    { href: "#contact" },
                                    "Contact Us"
                                )
                            )
                        )
                    ),
                    React.createElement(
                        "nav",
                        { className: "nav social-nav pull-right d-none d-lg-inline" },
                        React.createElement(
                            "a",
                            { href: "#" },
                            React.createElement("i", { "class": "fa fa-twitter" })
                        ),
                        React.createElement(
                            "a",
                            { href: "#" },
                            React.createElement("i", { "class": "fa fa-facebook" })
                        ),
                        React.createElement(
                            "a",
                            { href: "#" },
                            React.createElement("i", { "class": "fa fa-linkedin" })
                        ),
                        React.createElement(
                            "a",
                            { href: "#" },
                            React.createElement("i", { "class": "fa fa-envelope" })
                        )
                    )
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var Slider = function (_React$Component2) {
    _inherits(Slider, _React$Component2);

    function Slider() {
        _classCallCheck(this, Slider);

        return _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).apply(this, arguments));
    }

    _createClass(Slider, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "section",
                { className: "hero" },
                React.createElement(
                    "div",
                    { className: "container text-center" },
                    React.createElement(
                        "div",
                        { className: "row" },
                        React.createElement(
                            "div",
                            { className: "col-md-12" },
                            React.createElement(
                                "a",
                                { className: "hero-brand", href: "index.html", title: "Home" },
                                React.createElement("img", { alt: "Bell Logo", src: "img/logo.png" })
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "col-md-12" },
                        React.createElement(
                            "h1",
                            null,
                            "A theme with personality"
                        ),
                        React.createElement(
                            "p",
                            { className: "tagline" },
                            "This is a powerful theme with some great features that you can use in your future projects."
                        ),
                        React.createElement(
                            "a",
                            { className: "btn btn-full", href: "#about" },
                            "Get Started Now"
                        )
                    )
                )
            );
        }
    }]);

    return Slider;
}(React.Component);

var About = function (_React$Component3) {
    _inherits(About, _React$Component3);

    function About() {
        _classCallCheck(this, About);

        return _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).apply(this, arguments));
    }

    _createClass(About, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "section",
                { className: "about", id: "about" },
                React.createElement(
                    "div",
                    { className: "container text-center" },
                    React.createElement(
                        "h2",
                        null,
                        "About Bell Theme"
                    ),
                    React.createElement(
                        "p",
                        null,
                        "Voluptua scripserit per ad, laudem viderer sit ex. Ex alia corrumpit voluptatibus usu, sed unum convenire id. Ut cum nisl moderatius, per nihil dicant commodo an. Eum tacimates erroribus ad. Atqui feugiat euripidis ea pri, sed veniam tacimates ex. Menandri temporibus an duo."
                    ),
                    React.createElement(
                        "div",
                        { className: "row stats-row" },
                        React.createElement(
                            "div",
                            { className: "stats-col text-center col-md-3 col-sm-6" },
                            React.createElement(
                                "div",
                                { className: "circle" },
                                React.createElement(
                                    "span",
                                    { className: "stats-no", "data-toggle": "counter-up" },
                                    "232"
                                ),
                                " Satisfied Customers"
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "stats-col text-center col-md-3 col-sm-6" },
                            React.createElement(
                                "div",
                                { className: "circle" },
                                React.createElement(
                                    "span",
                                    { className: "stats-no", "data-toggle": "counter-up" },
                                    "79"
                                ),
                                " Released Projects"
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "stats-col text-center col-md-3 col-sm-6" },
                            React.createElement(
                                "div",
                                { className: "circle" },
                                React.createElement(
                                    "span",
                                    { className: "stats-no", "data-toggle": "counter-up" },
                                    "1,463"
                                ),
                                " Hours Of Support"
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "stats-col text-center col-md-3 col-sm-6" },
                            React.createElement(
                                "div",
                                { className: "circle" },
                                React.createElement(
                                    "span",
                                    { className: "stats-no", "data-toggle": "counter-up" },
                                    "15"
                                ),
                                " Hard Workers"
                            )
                        )
                    )
                )
            );
        }
    }]);

    return About;
}(React.Component);

var Parallax = function (_React$Component4) {
    _inherits(Parallax, _React$Component4);

    function Parallax() {
        _classCallCheck(this, Parallax);

        return _possibleConstructorReturn(this, (Parallax.__proto__ || Object.getPrototypeOf(Parallax)).apply(this, arguments));
    }

    _createClass(Parallax, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "block bg-primary block-pd-lg block-bg-overlay text-center", "data-bg-img": "img/parallax-bg.jpg", "data-settings": "{\"stellar-background-ratio\": 0.6}", "data-toggle": "parallax-bg" },
                React.createElement(
                    "h2",
                    null,
                    "Welcome to a perfect theme"
                ),
                React.createElement(
                    "p",
                    null,
                    "This is the most powerful theme with thousands of options that you have never seen before."
                ),
                React.createElement("img", { alt: "Bell - A perfect theme", "class": "gadgets-img hidden-md-down", src: "img/gadgets.png" })
            );
        }
    }]);

    return Parallax;
}(React.Component);

var Features = function (_React$Component5) {
    _inherits(Features, _React$Component5);

    function Features() {
        _classCallCheck(this, Features);

        return _possibleConstructorReturn(this, (Features.__proto__ || Object.getPrototypeOf(Features)).apply(this, arguments));
    }

    _createClass(Features, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "section",
                { className: "features", id: "features" },
                React.createElement(
                    "div",
                    { className: "container" },
                    React.createElement(
                        "h2",
                        { className: "text-center" },
                        "Features"
                    ),
                    React.createElement(
                        "div",
                        { "class": "row" },
                        React.createElement(
                            "div",
                            { "class": "feature-col col-lg-4 col-xs-12" },
                            React.createElement(
                                "div",
                                { "class": "card card-block text-center" },
                                React.createElement(
                                    "div",
                                    null,
                                    React.createElement(
                                        "div",
                                        { "class": "feature-icon" },
                                        React.createElement("span", { "class": "fa fa-rocket" })
                                    )
                                ),
                                React.createElement(
                                    "div",
                                    null,
                                    React.createElement(
                                        "h3",
                                        null,
                                        "Custom Design"
                                    ),
                                    React.createElement(
                                        "p",
                                        null,
                                        "Eque feugiat contentiones ei has. Id summo mundi explicari his, nec in maiorum scriptorem."
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            "div",
                            { "class": "feature-col col-lg-4 col-xs-12" },
                            React.createElement(
                                "div",
                                { "class": "card card-block text-center" },
                                React.createElement(
                                    "div",
                                    null,
                                    React.createElement(
                                        "div",
                                        { "class": "feature-icon" },
                                        React.createElement("span", { "class": "fa fa-envelope" })
                                    )
                                ),
                                React.createElement(
                                    "div",
                                    null,
                                    React.createElement(
                                        "h3",
                                        null,
                                        "Responsive Layout"
                                    ),
                                    React.createElement(
                                        "p",
                                        null,
                                        "Eque feugiat contentiones ei has. Id summo mundi explicari his, nec in maiorum scriptorem."
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            "div",
                            { "class": "feature-col col-lg-4 col-xs-12" },
                            React.createElement(
                                "div",
                                { "class": "card card-block text-center" },
                                React.createElement(
                                    "div",
                                    null,
                                    React.createElement(
                                        "div",
                                        { "class": "feature-icon" },
                                        React.createElement("span", { "class": "fa fa-bell" })
                                    )
                                ),
                                React.createElement(
                                    "div",
                                    null,
                                    React.createElement(
                                        "h3",
                                        null,
                                        "Innovative Ideas"
                                    ),
                                    React.createElement(
                                        "p",
                                        null,
                                        "Eque feugiat contentiones ei has. Id summo mundi explicari his, nec in maiorum scriptorem."
                                    )
                                )
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { "class": "row" },
                        React.createElement(
                            "div",
                            { "class": "feature-col col-lg-4 col-xs-12" },
                            React.createElement(
                                "div",
                                { "class": "card card-block text-center" },
                                React.createElement(
                                    "div",
                                    null,
                                    React.createElement(
                                        "div",
                                        { "class": "feature-icon" },
                                        React.createElement("span", { "class": "fa fa-database" })
                                    )
                                ),
                                React.createElement(
                                    "div",
                                    null,
                                    React.createElement(
                                        "h3",
                                        null,
                                        "Good Documentation"
                                    ),
                                    React.createElement(
                                        "p",
                                        null,
                                        "Eque feugiat contentiones ei has. Id summo mundi explicari his, nec in maiorum scriptorem."
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            "div",
                            { "class": "feature-col col-lg-4 col-xs-12" },
                            React.createElement(
                                "div",
                                { "class": "card card-block text-center" },
                                React.createElement(
                                    "div",
                                    null,
                                    React.createElement(
                                        "div",
                                        { "class": "feature-icon" },
                                        React.createElement("span", { "class": "fa fa-cutlery" })
                                    )
                                ),
                                React.createElement(
                                    "div",
                                    null,
                                    React.createElement(
                                        "h3",
                                        null,
                                        "Excellent Features"
                                    ),
                                    React.createElement(
                                        "p",
                                        null,
                                        "Eque feugiat contentiones ei has. Id summo mundi explicari his, nec in maiorum scriptorem."
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            "div",
                            { "class": "feature-col col-lg-4 col-xs-12" },
                            React.createElement(
                                "div",
                                { "class": "card card-block text-center" },
                                React.createElement(
                                    "div",
                                    null,
                                    React.createElement(
                                        "div",
                                        { "class": "feature-icon" },
                                        React.createElement("span", { "class": "fa fa-dashboard" })
                                    )
                                ),
                                React.createElement(
                                    "div",
                                    null,
                                    React.createElement(
                                        "h3",
                                        null,
                                        "Retina Ready"
                                    ),
                                    React.createElement(
                                        "p",
                                        null,
                                        "Eque feugiat contentiones ei has. Id summo mundi explicari his, nec in maiorum scriptorem."
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Features;
}(React.Component);

var Cta = function (_React$Component6) {
    _inherits(Cta, _React$Component6);

    function Cta() {
        _classCallCheck(this, Cta);

        return _possibleConstructorReturn(this, (Cta.__proto__ || Object.getPrototypeOf(Cta)).apply(this, arguments));
    }

    _createClass(Cta, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "section",
                { className: "cta" },
                React.createElement(
                    "div",
                    { className: "container" },
                    React.createElement(
                        "div",
                        { className: "row" },
                        React.createElement(
                            "div",
                            { "class": "col-lg-9 col-sm-12 text-lg-left text-center" },
                            React.createElement(
                                "h2",
                                null,
                                "Call to Action Section"
                            ),
                            React.createElement(
                                "p",
                                null,
                                "Lorem ipsum dolor sit amet, nec ad nisl mandamus imperdiet, ut corpora cotidieque cum. Et brute iracundia his, est eu idque dictas gubergren"
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "col-lg-3 col-sm-12 text-lg-right text-center" },
                            React.createElement(
                                "a",
                                { className: "btn btn-ghost", href: "#" },
                                "Buy This Theme"
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Cta;
}(React.Component);

var Portfolio = function (_React$Component7) {
    _inherits(Portfolio, _React$Component7);

    function Portfolio() {
        _classCallCheck(this, Portfolio);

        return _possibleConstructorReturn(this, (Portfolio.__proto__ || Object.getPrototypeOf(Portfolio)).apply(this, arguments));
    }

    _createClass(Portfolio, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "section",
                { className: "portfolio", id: "portfolio" },
                React.createElement(
                    "div",
                    { className: "container text-center" },
                    React.createElement(
                        "h2",
                        null,
                        "Portfolio"
                    ),
                    React.createElement(
                        "p",
                        null,
                        "Voluptua scripserit per ad, laudem viderer sit ex. Ex alia corrumpit voluptatibus usu, sed unum convenire id. Ut cum nisl moderatius, Per nihil dicant commodo an."
                    )
                ),
                React.createElement(
                    "div",
                    { className: "portfolio-grid" },
                    React.createElement(
                        "div",
                        { className: "row" },
                        React.createElement(
                            "div",
                            { className: "col-lg-3 col-sm-6 col-xs-12" },
                            React.createElement(
                                "div",
                                { className: "card card-block" },
                                React.createElement(
                                    "a",
                                    { href: "#" },
                                    React.createElement("img", { alt: "", src: "img/porf-1.jpg" }),
                                    React.createElement(
                                        "div",
                                        { className: "portfolio-over" },
                                        React.createElement(
                                            "div",
                                            null,
                                            React.createElement(
                                                "h3",
                                                { className: "card-title" },
                                                "The Dude Rockin'"
                                            ),
                                            React.createElement(
                                                "p",
                                                { className: "card-text" },
                                                "Lorem ipsum dolor sit amet, eu sed suas eruditi honestatis."
                                            )
                                        )
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "col-lg-3 col-sm-6 col-xs-12" },
                            React.createElement(
                                "div",
                                { className: "card card-block" },
                                React.createElement(
                                    "a",
                                    { href: "#" },
                                    React.createElement("img", { alt: "", src: "img/porf-2.jpg" }),
                                    React.createElement(
                                        "div",
                                        { className: "portfolio-over" },
                                        React.createElement(
                                            "div",
                                            null,
                                            React.createElement(
                                                "h3",
                                                { className: "card-title" },
                                                "The Dude Rockin'"
                                            ),
                                            React.createElement(
                                                "p",
                                                { className: "card-text" },
                                                "Lorem ipsum dolor sit amet, eu sed suas eruditi honestatis."
                                            )
                                        )
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "col-lg-3 col-sm-6 col-xs-12" },
                            React.createElement(
                                "div",
                                { className: "card card-block" },
                                React.createElement(
                                    "a",
                                    { href: "#" },
                                    React.createElement("img", { alt: "", src: "img/porf-3.jpg" }),
                                    React.createElement(
                                        "div",
                                        { className: "portfolio-over" },
                                        React.createElement(
                                            "div",
                                            null,
                                            React.createElement(
                                                "h3",
                                                { className: "card-title" },
                                                "The Dude Rockin'"
                                            ),
                                            React.createElement(
                                                "p",
                                                { className: "card-text" },
                                                "Lorem ipsum dolor sit amet, eu sed suas eruditi honestatis."
                                            )
                                        )
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "col-lg-3 col-sm-6 col-xs-12" },
                            React.createElement(
                                "div",
                                { className: "card card-block" },
                                React.createElement(
                                    "a",
                                    { href: "#" },
                                    React.createElement("img", { alt: "", src: "img/porf-4.jpg" }),
                                    React.createElement(
                                        "div",
                                        { className: "portfolio-over" },
                                        React.createElement(
                                            "div",
                                            null,
                                            React.createElement(
                                                "h3",
                                                { className: "card-title" },
                                                "The Dude Rockin'"
                                            ),
                                            React.createElement(
                                                "p",
                                                { className: "card-text" },
                                                "Lorem ipsum dolor sit amet, eu sed suas eruditi honestatis."
                                            )
                                        )
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "col-lg-3 col-sm-6 col-xs-12" },
                            React.createElement(
                                "div",
                                { className: "card card-block" },
                                React.createElement(
                                    "a",
                                    { href: "#" },
                                    React.createElement("img", { alt: "", src: "img/porf-5.jpg" }),
                                    React.createElement(
                                        "div",
                                        { className: "portfolio-over" },
                                        React.createElement(
                                            "div",
                                            null,
                                            React.createElement(
                                                "h3",
                                                { className: "card-title" },
                                                "The Dude Rockin'"
                                            ),
                                            React.createElement(
                                                "p",
                                                { className: "card-text" },
                                                "Lorem ipsum dolor sit amet, eu sed suas eruditi honestatis."
                                            )
                                        )
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "col-lg-3 col-sm-6 col-xs-12" },
                            React.createElement(
                                "div",
                                { className: "card card-block" },
                                React.createElement(
                                    "a",
                                    { href: "#" },
                                    React.createElement("img", { alt: "", src: "img/porf-6.jpg" }),
                                    React.createElement(
                                        "div",
                                        { className: "portfolio-over" },
                                        React.createElement(
                                            "div",
                                            null,
                                            React.createElement(
                                                "h3",
                                                { className: "card-title" },
                                                "The Dude Rockin'"
                                            ),
                                            React.createElement(
                                                "p",
                                                { className: "card-text" },
                                                "Lorem ipsum dolor sit amet, eu sed suas eruditi honestatis."
                                            )
                                        )
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "col-lg-3 col-sm-6 col-xs-12" },
                            React.createElement(
                                "div",
                                { className: "card card-block" },
                                React.createElement(
                                    "a",
                                    { href: "#" },
                                    React.createElement("img", { alt: "", src: "img/porf-7.jpg" }),
                                    React.createElement(
                                        "div",
                                        { className: "portfolio-over" },
                                        React.createElement(
                                            "div",
                                            null,
                                            React.createElement(
                                                "h3",
                                                { className: "card-title" },
                                                "The Dude Rockin'"
                                            ),
                                            React.createElement(
                                                "p",
                                                { className: "card-text" },
                                                "Lorem ipsum dolor sit amet, eu sed suas eruditi honestatis."
                                            )
                                        )
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "col-lg-3 col-sm-6 col-xs-12" },
                            React.createElement(
                                "div",
                                { className: "card card-block" },
                                React.createElement(
                                    "a",
                                    { href: "#" },
                                    React.createElement("img", { alt: "", src: "img/porf-8.jpg" }),
                                    React.createElement(
                                        "div",
                                        { className: "portfolio-over" },
                                        React.createElement(
                                            "div",
                                            null,
                                            React.createElement(
                                                "h3",
                                                { className: "card-title" },
                                                "The Dude Rockin'"
                                            ),
                                            React.createElement(
                                                "p",
                                                { className: "card-text" },
                                                "Lorem ipsum dolor sit amet, eu sed suas eruditi honestatis."
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Portfolio;
}(React.Component);

var Team = function (_React$Component8) {
    _inherits(Team, _React$Component8);

    function Team() {
        _classCallCheck(this, Team);

        return _possibleConstructorReturn(this, (Team.__proto__ || Object.getPrototypeOf(Team)).apply(this, arguments));
    }

    _createClass(Team, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "section",
                { className: "team", id: "team" },
                React.createElement(
                    "div",
                    { className: "container" },
                    React.createElement(
                        "h2",
                        { className: "text-center" },
                        "Meet our team"
                    )
                ),
                React.createElement(
                    "div",
                    { className: "row" },
                    React.createElement(
                        "div",
                        { className: "col-sm-3 col-xs-6" },
                        React.createElement(
                            "div",
                            { className: "card card-block" },
                            React.createElement(
                                "a",
                                { href: "#" },
                                React.createElement("img", { alt: "", className: "team-img", src: "img/team-1.jpg" }),
                                React.createElement(
                                    "div",
                                    { className: "card-title-wrap" },
                                    React.createElement(
                                        "span",
                                        { className: "card-title" },
                                        "Sergio Fez"
                                    ),
                                    React.createElement(
                                        "span",
                                        { className: "card-text" },
                                        "Art Director"
                                    )
                                ),
                                React.createElement(
                                    "div",
                                    { classNam: "team-over" },
                                    React.createElement(
                                        "h4",
                                        { className: "hidden-md-down" },
                                        "Connect with me"
                                    ),
                                    React.createElement(
                                        "nav",
                                        { className: "social-nav" },
                                        React.createElement(
                                            "a",
                                            { href: "#" },
                                            React.createElement("i", { className: "fa fa-twitter" })
                                        ),
                                        React.createElement(
                                            "a",
                                            { href: "#" },
                                            React.createElement("i", { className: "fa fa-facebook" })
                                        ),
                                        React.createElement(
                                            "a",
                                            { href: "#" },
                                            React.createElement("i", { className: "fa fa-linkedin" })
                                        ),
                                        React.createElement(
                                            "a",
                                            { href: "#" },
                                            React.createElement("i", { className: "fa fa-envelope" })
                                        )
                                    ),
                                    React.createElement(
                                        "p",
                                        null,
                                        "Lorem ipsum dolor sit amet, eu sed suas eruditi honestatis."
                                    )
                                )
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "col-sm-3 col-xs-6" },
                        React.createElement(
                            "div",
                            { className: "card card-block" },
                            React.createElement(
                                "a",
                                { href: "#" },
                                React.createElement("img", { alt: "", className: "team-img", src: "img/team-2.jpg" }),
                                React.createElement(
                                    "div",
                                    { className: "card-title-wrap" },
                                    React.createElement(
                                        "span",
                                        { className: "card-title" },
                                        "Sergio Fez"
                                    ),
                                    React.createElement(
                                        "span",
                                        { className: "card-text" },
                                        "Art Director"
                                    )
                                ),
                                React.createElement(
                                    "div",
                                    { className: "team-over" },
                                    React.createElement(
                                        "h4",
                                        { className: "hidden-md-down" },
                                        "Connect with me"
                                    ),
                                    React.createElement(
                                        "nav",
                                        { className: "social-nav" },
                                        React.createElement(
                                            "a",
                                            { href: "#" },
                                            React.createElement("i", { className: "fa fa-twitter" })
                                        ),
                                        React.createElement(
                                            "a",
                                            { href: "#" },
                                            React.createElement("i", { className: "fa fa-facebook" })
                                        ),
                                        React.createElement(
                                            "a",
                                            { href: "#" },
                                            React.createElement("i", { className: "fa fa-linkedin" })
                                        ),
                                        React.createElement(
                                            "a",
                                            { href: "#" },
                                            React.createElement("i", { className: "fa fa-envelope" })
                                        )
                                    ),
                                    React.createElement(
                                        "p",
                                        null,
                                        "Lorem ipsum dolor sit amet, eu sed suas eruditi honestatis."
                                    )
                                )
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "col-sm-3 col-xs-6" },
                        React.createElement(
                            "div",
                            { className: "card card-block" },
                            React.createElement(
                                "a",
                                { href: "#" },
                                React.createElement("img", { alt: "", className: "team-img", src: "img/team-3.jpg" }),
                                React.createElement(
                                    "div",
                                    { className: "card-title-wrap" },
                                    React.createElement(
                                        "span",
                                        { className: "card-title" },
                                        "Sergio Fez"
                                    ),
                                    React.createElement(
                                        "span",
                                        { className: "card-text" },
                                        "Art Director"
                                    )
                                ),
                                React.createElement(
                                    "div",
                                    { className: "team-over" },
                                    React.createElement(
                                        "h4",
                                        { className: "hidden-md-down" },
                                        "Connect with me"
                                    ),
                                    React.createElement(
                                        "nav",
                                        { className: "social-nav" },
                                        React.createElement(
                                            "a",
                                            { href: "#" },
                                            React.createElement("i", { className: "fa fa-twitter" })
                                        ),
                                        React.createElement(
                                            "a",
                                            { href: "#" },
                                            React.createElement("i", { className: "fa fa-facebook" })
                                        ),
                                        React.createElement(
                                            "a",
                                            { href: "#" },
                                            React.createElement("i", { className: "fa fa-linkedin" })
                                        ),
                                        React.createElement(
                                            "a",
                                            { href: "#" },
                                            React.createElement("i", { className: "fa fa-envelope" })
                                        )
                                    ),
                                    React.createElement(
                                        "p",
                                        null,
                                        "Lorem ipsum dolor sit amet, eu sed suas eruditi honestatis."
                                    )
                                )
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "col-sm-3 col-xs-6" },
                        React.createElement(
                            "div",
                            { className: "card card-block" },
                            React.createElement(
                                "a",
                                { href: "#" },
                                React.createElement("img", { alt: "", className: "team-img", src: "img/team-4.jpg" }),
                                React.createElement(
                                    "div",
                                    { className: "card-title-wrap" },
                                    React.createElement(
                                        "span",
                                        { className: "card-title" },
                                        "Sergio Fez"
                                    ),
                                    React.createElement(
                                        "span",
                                        { className: "card-text" },
                                        "Art Director"
                                    )
                                ),
                                React.createElement(
                                    "div",
                                    { className: "team-over" },
                                    React.createElement(
                                        "h4",
                                        { className: "hidden-md-down" },
                                        "Connect with me"
                                    ),
                                    React.createElement(
                                        "nav",
                                        { className: "social-nav" },
                                        React.createElement(
                                            "a",
                                            { href: "#" },
                                            React.createElement("i", { className: "fa fa-twitter" })
                                        ),
                                        React.createElement(
                                            "a",
                                            { href: "#" },
                                            React.createElement("i", { className: "fa fa-facebook" })
                                        ),
                                        React.createElement(
                                            "a",
                                            { href: "#" },
                                            React.createElement("i", { className: "fa fa-linkedin" })
                                        ),
                                        React.createElement(
                                            "a",
                                            { href: "#" },
                                            React.createElement("i", { className: "fa fa-envelope" })
                                        )
                                    ),
                                    React.createElement(
                                        "p",
                                        null,
                                        "Lorem ipsum dolor sit amet, eu sed suas eruditi honestatis."
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Team;
}(React.Component);

var Contact = function (_React$Component9) {
    _inherits(Contact, _React$Component9);

    function Contact() {
        _classCallCheck(this, Contact);

        return _possibleConstructorReturn(this, (Contact.__proto__ || Object.getPrototypeOf(Contact)).apply(this, arguments));
    }

    _createClass(Contact, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "section",
                { id: "contact" },
                React.createElement(
                    "div",
                    { className: "container" },
                    React.createElement(
                        "div",
                        { className: "row" },
                        React.createElement(
                            "div",
                            { className: "col-md-12 text-center" },
                            React.createElement(
                                "h2",
                                { className: "section-title" },
                                "Contact Us"
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "row justify-content-center" },
                        React.createElement(
                            "div",
                            { className: "col-lg-3 col-md-4" },
                            React.createElement(
                                "div",
                                { className: "info" },
                                React.createElement(
                                    "div",
                                    null,
                                    React.createElement("i", { className: "fa fa-map-marker" }),
                                    React.createElement(
                                        "p",
                                        null,
                                        "A108 Adam Street",
                                        React.createElement("br", null),
                                        "New York, NY 535022"
                                    )
                                ),
                                React.createElement(
                                    "div",
                                    null,
                                    React.createElement("i", { className: "fa fa-envelope" }),
                                    React.createElement(
                                        "p",
                                        null,
                                        "info@example.com"
                                    )
                                ),
                                React.createElement(
                                    "div",
                                    null,
                                    React.createElement("i", { className: "fa fa-phone" }),
                                    React.createElement(
                                        "p",
                                        null,
                                        "+1 5589 55488 55s"
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            "div",
                            { className: "col-lg-5 col-md-8" },
                            React.createElement(
                                "div",
                                { className: "form" },
                                React.createElement(
                                    "div",
                                    { id: "sendmessage" },
                                    "Your message has been sent. Thank you!"
                                ),
                                React.createElement("div", { id: "errormessage" }),
                                React.createElement(
                                    "form",
                                    { action: "", method: "post", role: "form", className: "contactForm" },
                                    React.createElement(
                                        "div",
                                        { className: "form-group" },
                                        React.createElement("input", { type: "text", name: "name", className: "form-control", id: "name", placeholder: "Your Name", "data-rule": "minlen:4", "data-msg": "Please enter at least 4 chars" }),
                                        React.createElement("div", { className: "validation" })
                                    ),
                                    React.createElement(
                                        "div",
                                        { className: "form-group" },
                                        React.createElement("input", { type: "email", className: "form-control", name: "email", id: "email", placeholder: "Your Email", "data-rule": "email", "data-msg": "Please enter a valid email" }),
                                        React.createElement("div", { className: "validation" })
                                    ),
                                    React.createElement(
                                        "div",
                                        { className: "form-group" },
                                        React.createElement("input", { type: "text", className: "form-control", name: "subject", id: "subject", placeholder: "Subject", "data-rule": "minlen:4", "data-msg": "Please enter at least 8 chars of subject" }),
                                        React.createElement("div", { className: "validation" })
                                    ),
                                    React.createElement(
                                        "div",
                                        { className: "form-group" },
                                        React.createElement("textarea", { className: "form-control", name: "message", rows: "5", "data-rule": "required", "data-msg": "Please write something for us", placeholder: "Message" }),
                                        React.createElement("div", { className: "validation" })
                                    ),
                                    React.createElement(
                                        "div",
                                        { className: "text-center" },
                                        React.createElement(
                                            "button",
                                            { type: "submit" },
                                            "Send Message"
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Contact;
}(React.Component);

var Footer = function (_React$Component10) {
    _inherits(Footer, _React$Component10);

    function Footer() {
        _classCallCheck(this, Footer);

        return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
    }

    _createClass(Footer, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(Contact, null),
                React.createElement(
                    "footer",
                    { className: "site-footer" },
                    React.createElement(
                        "div",
                        { className: "bottom" },
                        React.createElement(
                            "div",
                            { className: "container" },
                            React.createElement(
                                "div",
                                { "class": "row" },
                                React.createElement(
                                    "div",
                                    { "class": "col-lg-6 col-xs-12 text-lg-left text-center" },
                                    React.createElement(
                                        "p",
                                        { "class": "copyright-text" },
                                        "\xA9 BELL Theme"
                                    ),
                                    React.createElement(
                                        "div",
                                        { "class": "credits" },
                                        "esigned by ",
                                        React.createElement(
                                            "a",
                                            { href: "https://bootstrapmade.com/" },
                                            "BootstrapMade"
                                        )
                                    )
                                ),
                                React.createElement(
                                    "div",
                                    { "class": "col-lg-6 col-xs-12 text-lg-right text-center" },
                                    React.createElement(
                                        "ul",
                                        { "class": "list-inline" },
                                        React.createElement(
                                            "li",
                                            { "class": "list-inline-item" },
                                            React.createElement(
                                                "a",
                                                { href: "index.html" },
                                                "Home"
                                            )
                                        ),
                                        React.createElement(
                                            "li",
                                            { "class": "list-inline-item" },
                                            React.createElement(
                                                "a",
                                                { href: "#about" },
                                                "About Us"
                                            )
                                        ),
                                        React.createElement(
                                            "li",
                                            { "class": "list-inline-item" },
                                            React.createElement(
                                                "a",
                                                { href: "#features" },
                                                "Features"
                                            )
                                        ),
                                        React.createElement(
                                            "li",
                                            { "class": "list-inline-item" },
                                            React.createElement(
                                                "a",
                                                { href: "#portfolio" },
                                                "Portfolio"
                                            )
                                        ),
                                        React.createElement(
                                            "li",
                                            { "class": "list-inline-item" },
                                            React.createElement(
                                                "a",
                                                { href: "#team" },
                                                "Team"
                                            )
                                        ),
                                        React.createElement(
                                            "li",
                                            { "class": "list-inline-item" },
                                            React.createElement(
                                                "a",
                                                { href: "#contact" },
                                                "Contact"
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Footer;
}(React.Component);

var Home = function (_React$Component11) {
    _inherits(Home, _React$Component11);

    function Home() {
        _classCallCheck(this, Home);

        return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
    }

    _createClass(Home, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(Slider, null),
                React.createElement(Header, null),
                React.createElement(About, null),
                React.createElement(Parallax, null),
                React.createElement(Features, null),
                React.createElement(Cta, null),
                React.createElement(Portfolio, null),
                React.createElement(Team, null),
                React.createElement(Footer, null)
            );
        }
    }]);

    return Home;
}(React.Component);

ReactDOM.render(React.createElement(Home, null), document.getElementById('home'));
