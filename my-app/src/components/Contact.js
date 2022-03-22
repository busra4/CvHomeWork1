import React from "react";
import resim1 from "../1.jpg";
import { HiUserCircle } from "react-icons/hi";
import "./Contact.css";
export default function Contact() {
  return (
    <section id="contact">
      <div>
        <div style={{ backgroundColor: "#4e54c8", borderRadius: "25px" }}>
          <HiUserCircle
            style={{ width: "300px", height: "300px", color: "white" }}
          />
          <div style={{ color: "white", marginLeft: "15px" }}>
            <h2>ADDRESS</h2>
            <p>
              bla bla St. <br />
              bla bla
            </p>
          </div>
          <div style={{ color: "white", marginLeft: "15px" }}>
            <h2>EMAIL</h2>
            <a>abcd@email.com</a>
            <h2>PHONE</h2>
            <p>123-456-7890</p>
          </div>
        </div>
      </div>
    </section>
  );
}
