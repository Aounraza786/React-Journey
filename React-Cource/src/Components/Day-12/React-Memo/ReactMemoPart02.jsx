/* eslint-disable react-hooks/refs */
import { memo } from "react";
import { useRef } from "react";

function ReactMNemoPart02() {
  const renderCount = useRef(0);
  console.log(renderCount);

  return (
    <>
      <p>
        Nothing Changed here but I have Now rendered:{" "}
        <span>{renderCount.current++} time(s)</span>{" "}
        {/*// If we not use Memo then
        this component again and again which we not want. */}
      </p>
    </>
  );
}
export default memo(ReactMNemoPart02);
