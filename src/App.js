import "./App.css";
import styled from "@emotion/styled";
import { Header } from "./styled";
import { AboutMe } from "./components/aboutMe";
import { WhyHireMe } from "./components/WhyHireMe";
function App() {
  return (
    <div>
      <Header>My Profile</Header>
      <AboutMe>dfdf</AboutMe>
      <WhyHireMe></WhyHireMe>
    </div>
  );
}
export default App;
