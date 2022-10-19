import { useCallback, useEffect, useState } from "react";
export const useCar = (type) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const cars = [
      {
        id: 1,
        name: "BMW",
      },
      {
        id: 2,
        name: "TESLA",
      },
      {
        id: 3,
        name: "VOLVO",
      },
    ];
    const books = [
      {
        id: 1,
        name: "MATH",
      },
      {
        id: 2,
        name: "ENG",
      },
      {
        id: 3,
        name: "BIO",
      },
    ];
    if (type === "cars") {
      setData(cars);
    } else {
      setData(books);
    }
  }, [type]);

  return {
    data,
  };
};

export const useCounter = (counterDefaultValue) => {
  const [count, setCount] = useState(counterDefaultValue || 0);
  const increment = () => {
    setCount((prevState) => prevState + 1);
  };
  const decrement = () => {
    if (count > 0) {
      setCount((prevState) => prevState - 1);
    } else {
      setCount(0);
    }
  };
  const reset = () => {
    setCount(counterDefaultValue || 0);
  };
  return [count, increment, decrement, reset];
};

function useBoolean(defaultValue) {
  const [value, setValue] = useState(!!defaultValue);

  const toggle = useCallback(() => setValue((prevValue) => !prevValue), []);
  return {
    value,
    toggle,
  };
}
export default useBoolean;
