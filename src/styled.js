import styled from "@emotion/styled";
import getty from "./Picture/getty.jpg";
function Header() {
  const Header = styled.div`
    background-color: #800000;
    width: 100vw;
    height: 30vh;
    margin: 0px;
    padding: 0px;
    margin-bottom: 20px;
    color: pink;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 25px;.
    
    border: 2px solid #FAFAD2;
  `;

  return <Header>My Profile</Header>;
}

export { Header };
