import "./LoginPage.css";
import resim1 from "../1.jpg";
import React, { Text } from "react";
import ScrollUp from "./ScrollUp";
import { AiFillGithub, AiFillLinkedin, AiOutlineCode } from "react-icons/ai";
const openInNewTab = (url) => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};
function LoginPage() {
  const scrollDown = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };
  return (
    <section className="pls">
      <div class="area">
        <div className="txt-div">
          <h1 style={{ marginLeft: "150px", marginTop: "150px" }}>
            Hi, <AiOutlineCode />
            <br />
            My name is bla bla I'm Jr. developer ^-^
          </h1>
          <div style={{ marginLeft: "150px" }}>
            <AiFillGithub className="account-list__item gitHub"
        onClick={() => openInNewTab("https://github.com/gurkanucar")} /> <AiFillLinkedin />
            <ScrollUp />
          </div>
        </div>

        <ul class="sekil">
          <li>
            <AiOutlineCode style={{ width: "10px", height: "10px" }} />
          </li>
          <li>
            <AiOutlineCode style={{ width: "100px", height: "100px" }} />
          </li>
          <li>
            <AiOutlineCode style={{ width: "60px", height: "60px" }} />
          </li>
          <li>
            <AiOutlineCode style={{ width: "80px", height: "80px" }} />
          </li>
          <li>
            <AiOutlineCode style={{ width: "90px", height: "90px" }} />
          </li>
          <li>
            <AiOutlineCode style={{ width: "100px", height: "100px" }} />
          </li>
          <li>
            <AiOutlineCode style={{ width: "80px", height: "80px" }} />
          </li>
          <li>
            <AiOutlineCode style={{ width: "70px", height: "70px" }} />
          </li>
          <li>
            <AiOutlineCode style={{ width: "40px", height: "40px" }} />
          </li>
          <li>
            <AiOutlineCode style={{ width: "20px", height: "20px" }} />
          </li>
          <li>
            <AiOutlineCode style={{ width: "100px", height: "100px" }} />
          </li>
          <li>
            <AiOutlineCode style={{ width: "60px", height: "60px" }} />
          </li>
          <li>
            <AiOutlineCode style={{ width: "70px", height: "70px" }} />
          </li>
          <li>
            <AiOutlineCode style={{ width: "60px", height: "60px" }} />
          </li>
          <li>
            <AiOutlineCode style={{ width: "80px", height: "80px" }} />
          </li>
          <li>
            <AiOutlineCode style={{ width: "40px", height: "40px" }} />
          </li>

        </ul>
      </div>
    </section>
  );
}

export default LoginPage;
