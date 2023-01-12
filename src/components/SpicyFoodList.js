import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    const newlist = [...foods, newFood]
    setFoods(newlist)
  }

  function removeFood(id) {
    const newList = foods.filter(food => food.id !== id)
    setFoods(newList)
  }

  function addHeatLevel(id) {
    const newList = foods.map(food => {
      return food.id === id ? {...food, heatLevel: food.heatLevel + 1} : food
    })
    setFoods(newList)
  }

  console.log(foods)

  const foodList = foods.map((food) => (
    <li key={food.id}>
      {food.name} | Heat: {food.heatLevel} <button className="span" onClick={() => addHeatLevel(food.id)}>+</button> | Cuisine: {food.cuisine}
      <button className="remove span" onClick={() => removeFood(food.id)}>X</button>
    </li>
  ));

  return (
    <div>
      <button className="button" onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
