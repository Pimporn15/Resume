import styled from "@emotion/styled";
import Kate from "../Picture/Kate.jpg";
import Email from "../Picture/Email.png";
import twitter from "../Picture/twitter.png";
import Facebook from "../Picture/Facebook.png";
import Instargram from "../Picture/Instargram.png";
import Github from "../Picture/Github.png";

function AboutMe() {
  const Detail = styled.div`
    width: 90vw;

    height: 35vh;
    display: flex;
    flex-direction: row;
    aling-items: space-around;
    color: #f158;
    font-size: 20px;
  `;
  const TextBox = styled.div`
    width: 40vw;
    height: 30vh;
    margin-left: 10%;
    margin-top: 3%;
    display: flex;
    flex-direction: column;
  `;
  const Image = styled.img`
    width: 400px;
    height: 400px;
    margin-left: 15%;
    margin-top: 1%;
    border-radius: 240px;
    box-shadow: 38px -71px 52px 23px rgba(0, 0, 0, 0.1);
  `;

  const FollowMePic = styled.img`
    width: 118px;
    height: 48px;
  `;
  const IconMedia = styled.img`
    width: 48px;
    height: 48px;
    display: flex;
    flex-direction: row;
    padding: 10px;

    justify-content: center;
  `;
  const IconBox = styled.div`
    width: 100vw;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
  `;

  return (
    <>
      <div>
        <Detail>
          <TextBox>
            <h2> Hi!!! I'm Pimporn Sakiya a FullStack developer </h2>I am coding
            with a clean and beautiful problem solving in mind and good
            communication . The projects I am participated: Syracuse, Titan,
            Blood donation administration etc., most of them are AI related and
            being funded by non-governmental agencies.
          </TextBox>

          <Image src={Kate}></Image>
          {/* <BackgroundBullet src={Bullet}></BackgroundBullet> */}
        </Detail>
        <IconBox>
          <a href="https://twitter.com/">
            <IconMedia src={twitter} />
          </a>
          <a href="https://github.com/Pimporn15" target="_blank">
            <IconMedia src={Github} />
          </a>
          <a href="https://www.facebook.com/" target="_blank">
            <IconMedia src={Facebook} />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <IconMedia src={Instargram} />
          </a>
        </IconBox>
      </div>
    </>
  );
}
export { AboutMe };
