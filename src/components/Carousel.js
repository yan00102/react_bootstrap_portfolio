import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import tundraCover from "../assets/images/tundra.png";
import giftrCover from "../assets/images/giftr.png";
import reviewerCover from "../assets/images/reviewer.png";
import movieCover from "../assets/images/movie.png";
import yelpCover from "../assets/images/yelp.png";
import premergency from "../assets/images/premergency.png";

import Card from "../components/Card";

import "../style/Carousel.css";

export default class Carousel extends Component {
  state = {
    items: [
      {
        id: 0,
        title: "Project 1 - Cordova App",
        subTitle: "Tundra",
        imgSrc: tundraCover,
        videoSrc: "https://youtu.be/ysSSqwzIHd0",
        introduction:
          "This two screen Single Page app that will run on both Android and iOS platforms. Usage of sessionStorage to retrieve data. Users can make like/unlike gestures through swipe right/left.",
        link: "https://github.com/yan00102/tundra",
        selected: false,
      },
      {
        id: 1,
        title: "Project 2 - Progressive Web App",
        subTitle: "Giftr",
        imgSrc: giftrCover,
        videoSrc: "https://youtu.be/8kQKI-I3juo",
        introduction:
          "This Single Page application will save a list of people and their birthdates. For each person that user will be able to create a list of gift ideas. This web app has two themes with dark/light mode.",
        link: "https://yan00102.github.io/Gifr-PWA/",
        selected: false,
      },
      {
        id: 2,
        title: "Project 3 - Cordova App",
        subTitle: "Reviewer",
        imgSrc: reviewerCover,
        videoSrc: "https://youtu.be/n3p0eyqRlrw",
        introduction:
          "This is a single page application built on MacOS that allows the user to take a picture of anything and review it.",
        link: "https://github.com/yan00102/reviewer",
        selected: false,
      },
      {
        id: 3,
        title: "Project 4 - React App",
        subTitle: "Movie-Actors",
        imgSrc: movieCover,
        videoSrc: "https://youtu.be/jpt6lzVFn5E",
        introduction:
          "This is a Single Page web application built by ReactJS. Users can enter an actor's name and start the movie search for matching names.",
        link: "https://github.com/yan00102/movie-react-app",
        selected: false,
      },
      {
        id: 4,
        title: "Project 5 - React Native App",
        subTitle: "Yelp",
        imgSrc: yelpCover,
        videoSrc: "https://youtu.be/6fXZpmZxj9M",
        introduction:
          "A React Native app to search nearby restaurants which is built by Expo-cli and using the Yelp Fusion API. ",
        link: "https://github.com/yan00102/mad9135-f20-p2-react-native-yelp",
        selected: false,
      },
      {
        id: 5,
        title: "Latest Project - React Native App",
        subTitle: "Premergency-Mobile",
        imgSrc: premergency,
        videoSrc: "https://youtu.be/Y_tU64F0suU",
        introduction:
          "This is a final term project which was designed & developed by Team ES Appify. This app is aim to switch from paper-based assessment to mobile app. It is a powerful tool for storing and creating new assessment modules.",
        link:
          "https://github.com/yan00102/ESAppifyTeamProject_Premergency_mobile",
        selected: false,
      },
    ],
  };

  handleCardClick = (id, card) => {
    // console.log(id);
    let items = [...this.state.items];
    console.log("items is ??", items);
    items[id].selected = items[id].selected ? false : true;
    items.forEach((item) => {
      if (item.id !== id) {
        item.selected = false;
      }
    });

    this.setState({
      items,
    });
  };

  makeItems = (items) => {
    return items.map((item) => {
      return (
        <Card
          item={item}
          click={(e) => this.handleCardClick(item.id, e)}
          key={item.id}
          introduction={item.introduction}
          videoSrc={item.videoSrc}
        />
      );
    });
  };

  render() {
    return (
      <Container fluid={true}>
        <Row className="col-sm-12 justify-content-around">
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}
