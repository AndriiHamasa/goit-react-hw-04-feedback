import { useState } from "react";

export const useAddFeddBack = (prev) => {
  const [count, setCount] = useState(prev)
  const add = () => setCount(prev => prev + 1)

  return [count, add]
};
