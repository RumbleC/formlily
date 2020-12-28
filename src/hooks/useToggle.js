import { useState } from "react";

const useToggle = (initialValue = false) => {
  const [state, setState] = useState(initialValue);
  return [state, () => setState((currentValue) => !currentValue)];
};

export default useToggle;
