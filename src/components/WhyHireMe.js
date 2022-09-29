import styled from "@emotion/styled";
import commu from "../Picture/commu.png";
import Collaborative from "../Picture/Collaborative.png";
import Client from "../Picture/Client.png";
import Professional from "../Picture/Professional.png";
function WhyHireMe() {
  const PictWhyHireMe = styled.img`
    width: 90px;
    height: 90px;

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
    padding: 30;
  `;
  const TextHeader = styled.div`
    width: 100vw;
    height: 30vh;
  
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 35px;.
    
  `;
  const BoxDetail = styled.div`
    ont-size: 35px;
  `;
  return (
    <>
      <TextHeader> Why Hire Me 😄😄 </TextHeader>
      <BoxIcon>
        <div>
          <PictWhyHireMe src={commu}></PictWhyHireMe>
          <p>sdfsdf</p>
        </div>

        <PictWhyHireMe src={Professional}></PictWhyHireMe>

        <PictWhyHireMe src={Collaborative}></PictWhyHireMe>

        <PictWhyHireMe src={Client}></PictWhyHireMe>
      </BoxIcon>
    </>
  );
}
export { WhyHireMe };
