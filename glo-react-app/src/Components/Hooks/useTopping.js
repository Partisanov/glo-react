import { useState } from "react";

const getTopping = (toppings) =>
  toppings.map((item) => ({ name: item, chacked: false }));

export function useToppings(openItem) {
  const readyTopping = openItem.toppings ? getTopping(openItem.toppings) : [];

  const [toppings, setToppings] = useState(getTopping(readyTopping));

  const checkToppings = (index) => {
    setToppings(
      toppings.map((item, i) => {
        if (i === index) {
          item.checked = !item.checked;
        }
        return item;
      })
    );
  };

  return { toppings, checkToppings };
}
