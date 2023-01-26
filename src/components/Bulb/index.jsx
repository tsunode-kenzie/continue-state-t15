import { useState } from "react";
import { AiFillBulb } from "react-icons/ai";

export function Bulb() {
  const [isLight, setIsLight] = useState(false);

  return (
    <>
      <div>Vazia</div>
      {isLight ? (
        <AiFillBulb size={100} color="red" />
      ) : (
        <AiFillBulb size={100} color="gray" />
      )}

      <AiFillBulb size={100} color={isLight ? "red" : "gray"} />

      <button type="button" onClick={() => setIsLight(!isLight)}>
        {isLight ? "off" : "on"}
      </button>
    </>
  );
}
