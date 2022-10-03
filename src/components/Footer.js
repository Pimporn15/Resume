import styled from "@emotion/styled";
import Tel from "../Picture/Tel.png";
import email from "../Picture/email.png";
import Discord from "../Picture/Discord.png";
import React from "react";
function Footer() {
  const BlockFooter = styled.div`
    background-color: LightGray;
    height: 25vh;
    width: 100vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    justify-content: space-around;
    padding: 5px;
  `;
  const IconBox = styled.img`
    width: 38px;
    height: 38px;
    display: flex;
    flex-direction: row;
    align-item: center;
  `;
  const SetBox = styled.div`
  display:flex;
  flex-direction:column;
  align-items :center
  justify-content:center
 `;

  return (
    <>
      <BlockFooter>
        <SetBox>
          <h4 style={{ color: "#5D787B" }}>📨 pimporn.kate@gmail.com</h4>
        </SetBox>

        <SetBox>
          <h4 style={{ color: "#5D787B" }}>☎️ 064-427-4xxx</h4>
        </SetBox>
      </BlockFooter>
    </>
  );
}

export { Footer };
