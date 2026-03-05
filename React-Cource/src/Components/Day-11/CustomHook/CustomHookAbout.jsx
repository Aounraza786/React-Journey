import { useBioContext } from "./CustomHook";

function CustomHookAbout() {
  const { myName, myAge, city } = useBioContext();

  return (
    <h5>
      Hello Custom Hook (About Page). My name is: {myName}.And my age is {myAge}
      . I am belonging from {city}
    </h5>
  );
}
export default CustomHookAbout;
