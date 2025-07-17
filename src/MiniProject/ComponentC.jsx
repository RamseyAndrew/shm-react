import ComponentE from "./ComponentE";
import ComponentD from "./ComponentD";

function ComponentC() {
  return (
    <div className="border-container">
      <ComponentD />
      <ComponentE />
    </div>
  );
}

export default ComponentC;
