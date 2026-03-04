import { useContext } from "react";
import { BioContext } from ".";

function About() {
  const { myName, myAge } = useContext(BioContext);
  return (
    <h5>
      Hello Context API(About Page). My name is: {myName}.And my age is {myAge}
    </h5>
  );
}
export default About;
