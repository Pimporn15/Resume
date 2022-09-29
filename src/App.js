import "./App.css";
import styled from "@emotion/styled";
import { Header } from "./styled";
import { AboutMe } from "./components/aboutMe";
import { WhyHireMe } from "./components/WhyHireMe";
import { Portfolio } from "./components/Portfolio";
function App() {
  return (
    <div>
      <Header>My Profile</Header>
      <AboutMe></AboutMe>
      <WhyHireMe></WhyHireMe>
      <Portfolio></Portfolio>
    </div>
  );
}
export default App;
