import { useState } from "react";

export default function useArray(defaultValue) {
  const [array, setArray] = useState(defaultValue || []);

  function push(element) {
    console.log({ array });
    let included = array.filter((item) => item.productId === element.productId);
    console.log(included);
    if (included.length < 1) {
      setArray((a) => [...a, element]);
    }
    console.log(included)
  }

  function filter(callback) {
    setArray((a) => a.filter(callback));
  }

  function update( newElement) {
    // console.log(array, newElement);
    let index = -1;
    array.map((item, i) => {
      if (item?.productId === newElement?.productId) {
        index = i;
      }
    });
    console.log(index);
    setArray((a) => [
      ...a.slice(0, index),
      newElement,
      ...a.slice(index + 1, a.length),
    ]);
  }

  function remove(productId) {
    setArray((a) => a.filter((product) => product.productId !== productId));
  }

  function clear() {
    setArray([]);
  }

  return { array, push, filter, update, remove, clear };
}
