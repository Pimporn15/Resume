import styled from "@emotion/styled";
import { Profiler } from "react";

function Header() {
  const Header = styled.div`
  background: linear-gradient(45deg,  #ffa69e, #faf3dd, #b8f2e6, #aed9e0, #5e6472);
    width: 100vw;
    height: 20vh;
    margin: 0px;
    padding: 0px;
    margin-bottom: 20px;
    color: pink;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 35px;.
    
   
  `;

  return (
    <div>
      <Header>My Profile</Header>
    </div>
  );
}

export { Header };
