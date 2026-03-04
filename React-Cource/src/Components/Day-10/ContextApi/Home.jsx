import { useContext } from "react";
import { BioContext } from ".";

function Home() {
  const { myName, myAge } = useContext(BioContext);
  return (
    <h5>
      Hello Context API. My name is: {myName}.And my age is {myAge}
    </h5>
  );
}
export default Home;
