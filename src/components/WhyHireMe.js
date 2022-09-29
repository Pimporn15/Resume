import styled from "@emotion/styled";
import commu from "../Picture/commu.png";

function WhyHireMe() {
  const BGWhyHireMe = styled.div`
    width: 95px;
    height: 95px;
    display: flex;
    aling-item: center;
    backgrounds-color: grey;
    border-radius: 180px;
  `;
  const PictWhyHireMe = styled.img`
    width: 80px;
    height: 90px;
    aling-item: center;
    display: flex;
  `;

  return (
    <BGWhyHireMe>
      <PictWhyHireMe src={commu}></PictWhyHireMe>
    </BGWhyHireMe>
  );
}
export { WhyHireMe };
