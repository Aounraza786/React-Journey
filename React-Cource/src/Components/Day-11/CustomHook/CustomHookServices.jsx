import { useBioContext } from "./CustomHook";

function CustomHookServices() {
  const { profession } = useBioContext();

  return (
    <h5>
      Hello Custom Hook (Services). I am {profession} who devloped Websites,
      Apps and maintain debugging code.
    </h5>
  );
}
export default CustomHookServices;
