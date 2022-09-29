import styled from "@emotion/styled";
import Kate from "../Picture/Kate.jpg";
import Bullet from "../Picture/BulletPoints.png";
import Email from "../Picture/Email.png";
import twitter from "../Picture/twitter.png";
import Facebook from "../Picture/Facebook.png";
import Instargram from "../Picture/Instargram.png";
import Github from "../Picture/Github.png";
import FollowMe from "../Picture/Followme.png";

function AboutMe() {
  const Detail = styled.div`
    width: 0100vw;

    height: 50vh;
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
    width: 300px;
    height: 300px;
    margin-left: 15%;
    margin-top: 1%;
    border-radius: 180px;
    box-shadow: 38px -71px 52px 23px rgba(0, 0, 0, 0.1);
  `;
  //   const BackgroundBullet = styled.img`
  //     width: 220px;
  //     height: 220 px;
  //     magin: 30px;
  //     position: relative;
  //   `;
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
          {/* <FollowMePic src={FollowMe}></FollowMePic> */}
          <IconMedia src={Email}></IconMedia>
          <IconMedia src={twitter}></IconMedia>
          <IconMedia src={Github}></IconMedia>
          <IconMedia src={Facebook}></IconMedia>
          <IconMedia src={Instargram}></IconMedia>
        </IconBox>
      </div>
    </>
  );
}
export { AboutMe };
