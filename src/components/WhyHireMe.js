import styled from "@emotion/styled";
import commu from "../Picture/commu.png";
import Collaborative from "../Picture/Collaborative.png";
import Client from "../Picture/Client.png";
import Professional from "../Picture/Professional.png";
function WhyHireMe() {
  const PictWhyHireMe = styled.img`
    width: 111px;
    height: 111px;

    display: flex;
    align-items: center;
  `;

  const BoxIcon = styled.div`
    width: 100vw ;
    height 35vh;
    display:flex;
    flex-direction:row;
    align-items: center;
    justify-content:center;
    flex-basic:1/5;
    justify-content: space-around;
    padding: 20px;
  `;
  const TextHeader = styled.div`
    width: 100vw;
    height: 15vh;
    color: #d9534f;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 35px;
  `;
  const BoxDetail = styled.div`
    font-size: 35px;
  `;

  return (
    <>
      <TextHeader id="2"> Why Hire Me 😄😄 </TextHeader>
      <BoxIcon>
        <div id="#3">
          <PictWhyHireMe src={commu}></PictWhyHireMe>
          <h4>Commuicative</h4>
        </div>
        <div>
          <PictWhyHireMe src={Professional}></PictWhyHireMe>
          <h4>Professional</h4>
        </div>

        <div>
          <PictWhyHireMe src={Collaborative}></PictWhyHireMe>
          <h4>Collaborative</h4>
        </div>
        <div>
          <PictWhyHireMe src={Client}></PictWhyHireMe>
          <h4>Client's Favourite</h4>
        </div>
      </BoxIcon>
    </>
  );
}
export { WhyHireMe };
