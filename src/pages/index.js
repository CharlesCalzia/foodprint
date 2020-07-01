import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// React icons
import { FaPlay } from 'react-icons/fa';

// core components
import Header from "components/Header/Header.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";

// Sections for this page
import ProductSection from "./Sections/ProductSection.jsx";
import TeamSection from "./Sections/TeamSection.jsx";
import Helmet from "react-helmet";

class LandingPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div id="top">
        <Helmet>
            <meta charSet="utf-8" />
            <title>Foodprint</title>
            <meta name='description' content='We are Foodprint' />
        </Helmet>
        <Header
          color="transparent"
          
          brand="Foodprint"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />
        <Parallax filter image={require("assets/img/landing-bg.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>Find the truth about your food</h1>
                <h4 style={{fontFamily: "Roboto, Helvetica, Arial, sans-serif"}}>
                  Foodprint is an app that allows you to scan foods and find their environmental impact. We then suggest more environmentally products for you to purchase.
                </h4>
                <br />
                <Button
                  color="danger"
                  size="lg"
                  href="https://www.youtube.com/watch?v=FCc7p86W2dI"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaPlay/>
                  Watch video
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <ProductSection />
            <TeamSection />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(LandingPage);
