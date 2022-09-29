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
    border: 2px red solid;
    width: 0100vw;

    height: 30vw;
    display: flex;
    flex-direction: row;
    aling-items: space-around;
    color: #f158;
    font-size: 20px;
  `;
  const TextBox = styled.div`
    border: 2px red solid;
    width: 40vw;
    height: 30vh;
    margin-left: 10px;

    display: flex;
    flex-direction: column;
    align-items: flex-end;
  `;
  const Image = styled.img`
    border: 2px red solid;
    width: 300px;
    height: 300px;

    border-radius: 180px;

    right: 20px;
  `;
  //   const BackgroundBullet = styled.img`
  //     width: 220px;
  //     height: 220 px;
  //     magin: 30px;
  //     position: relative;
  //   `;
  const FollowMePic = styled.img`
    border: 2px red solid;
    width: 118px;
    height: 48px;
  `;
  const IconMedia = styled.img`
    border: 2px red solid;
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
            communication
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
        <div>Why Hire Me ??</div>
      </div>
    </>
  );
}
export { AboutMe };
