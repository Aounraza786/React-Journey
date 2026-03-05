import { useBioContext } from "./CustomHook";

function CustomHookHome() {
  const { myName, myAge, city } = useBioContext();
  return (
    <h5>
      Hello Custom Hook. My name is: {myName}.And my age is {myAge}. I am born
      in {city}
    </h5>
  );
}
export default CustomHookHome;
