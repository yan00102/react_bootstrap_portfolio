import React, { useState } from "react";
import CardInfo from "../components/CardInfo";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ReactPlayer from "react-player";
import "../style/Card.css";

export default function Card(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div
      className="d-inline-block g-card"
      onClick={(e) => props.click(props.item)}
    >
      <div className="card_imageAndbutton">
        <img
          className="card_image"
          src={props.item.imgSrc}
          alt={props.item.imgSrc}
        />

        <button onClick={handleShow} className="card_button">
          Live Demo
        </button>
        <Modal show={show} onHide={handleClose} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Live Demo Video</Modal.Title>
          </Modal.Header>
          <Modal.Body className="modal_body">
            <ReactPlayer width="770px" url={props.videoSrc} controls={true} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      {props.item.selected && (
        <CardInfo
          title={props.item.title}
          subTitle={props.item.subTitle}
          link={props.item.link}
          introduction={props.item.introduction}
        />
      )}
    </div>
  );
}
