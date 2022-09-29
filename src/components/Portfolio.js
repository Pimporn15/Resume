import styled from "@emotion/styled";
import Image0 from "../Picture/Image0.png";
import Image1 from "../Picture/Image1.png";
import Image2 from "../Picture/Image2.png";
import Image3 from "../Picture/Image3.png";
import Image4 from "../Picture/Image4.png";
import Image5 from "../Picture/Image5.png";

function Portfolio() {
  const PicPortfolio = styled.img`
    width: 310px;
    height: 310 px;
  `;
  const TextPortFolio = styled.div`
    width: 100vw;
    height: 30vh;
    font-size: 40px;
    align-item: center;
    background-color: #e8879f;
    magin: 20px;
  `;
  const BoxPicture = styled.div`
    width: 100vw;
    height: 310px;
    display: flex;
    flex-direction: row;
    align-item: center;
    justify-content: center;
    magin: 5px;
    padding: 5px;
  `;
  const Footer = styled.div`
    width: 100vw;
    height: 15vh;
  `;
  return (
    <>
      <TextPortFolio>Portfolio</TextPortFolio>
      <BoxPicture>
        <PicPortfolio src={Image0}></PicPortfolio>
        <PicPortfolio src={Image1}></PicPortfolio>
        <PicPortfolio src={Image2}></PicPortfolio>
      </BoxPicture>
      <BoxPicture>
        <PicPortfolio src={Image3}></PicPortfolio>
        <PicPortfolio src={Image4}></PicPortfolio>
        <PicPortfolio src={Image5}></PicPortfolio>
      </BoxPicture>
      <Footer></Footer>
    </>
  );
}
export { Portfolio };
