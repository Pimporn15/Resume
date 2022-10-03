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
    padding: 30px;
  `;
  const TextPortFolio = styled.div`
    background-color: #cdf0ea;
    magin: 20px;
    width: 100vw;
    height: 25vh;
    margin: 0px;
    padding: 0px;
    margin-bottom: 20px;
    color: #6f69ac;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 35px;
  `;
  const BoxPicture = styled.div`
    width: 100vw;
    height: 400px;
    display: flex;
    flex-direction: row;
    align-item: center;
    justify-content: center;
    magin: 15px;
    padding: 5px;
  `;
  const Footer = styled.div`
    width: 100vw;
    height: 15vh;
  `;
  return (
    <>
      <div id="4">
        <TextPortFolio>Portfolio</TextPortFolio>
        <BoxPicture>
          <PicPortfolio src={Image0}></PicPortfolio>
          <PicPortfolio src={Image1}></PicPortfolio>
          <PicPortfolio src={Image2}></PicPortfolio>
        </BoxPicture>
        <BoxPicture style={{ "background-color": " #f541" }}>
          <PicPortfolio src={Image3}></PicPortfolio>
          <PicPortfolio src={Image4}></PicPortfolio>
          <PicPortfolio src={Image5}></PicPortfolio>
        </BoxPicture>
        <Footer></Footer>
      </div>
    </>
  );
}
export { Portfolio };
