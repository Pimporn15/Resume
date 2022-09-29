import styled from "@emotion/styled";
import Image0 from "../Picture/Image0.png";
import Image1 from "../Picture/Image1.png";
import Image2 from "../Picture/Image2.png";
import Image3 from "../Picture/Image3.png";
import Image4 from "../Picture/Image4.png";
import Image5 from "../Picture/Image5.png";

function Portfolio() {
  const PicPortfolio = styled.img``;
  const TextPortFolio = styled.div`
    font-size: 20px;
  `;
  return (
    <>
      <TextPortFolio>Portfolio</TextPortFolio>
      <PicPortfolio src={Image0}></PicPortfolio>
      <PicPortfolio src={Image1}></PicPortfolio>
      <PicPortfolio src={Image2}></PicPortfolio>
      <PicPortfolio src={Image3}></PicPortfolio>
      <PicPortfolio src={Image4}></PicPortfolio>
      <PicPortfolio src={Image5}></PicPortfolio>
    </>
  );
}
export { Portfolio };
