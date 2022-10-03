import styled from "@emotion/styled";
import { Profiler } from "react";

function Header() {
  const Header = styled.div`
    background: linear-gradient(
      45deg,
      #ffa69e,
      #faf3dd,
      #b8f2e6,
      #aed9e0,
      #5e6472
    );
    width: 100vw;
    height: 25vh;
    margin: 0px;
    padding: 0px;
    margin-bottom: 20px;
    color: pink;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 35px;
  `;
  const Navbar = styled.span`
    font-size: 15px;
    border-left-width: "red";
    width: 100px;
    height: 5 %;
    padding: 20px;

    cursor: pointer;
  `;
  const BlockNav = styled.div`
    width: 100vw;
    height: 35px;
    font-width: 10px;
  `;

  return (
    <div>
      <BlockNav>
        <Navbar>
          <a
            href="#1"
            style={{
              "text-decoration": "none",
              color: "#FF6699",
            }}
          >
            About Me
          </a>
        </Navbar>

        <Navbar>
          <a href="#2" style={{ "text-decoration": "none", color: "#FFCC33		" }}>
            Why Hire Me
          </a>
        </Navbar>
        <a href="#2" style={{ "text-decoration": "none", color: "#7FBCD2	" }}>
          Portfolio
        </a>
        <Navbar></Navbar>
      </BlockNav>
      <Header>My Profile</Header>
    </div>
  );
}

export { Header };
