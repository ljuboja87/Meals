import React, { useEffect, useState } from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import MealAxios from "../../apis/MealAxios";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(false);

  useEffect(() => {
    getMeals();
  }, []);

  const getMeals = () => {
    MealAxios.get('meals.json')
      .then((res) => {
        console.log(res);
        setMeals(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setHttpError(true);
        //  alert('Error occurred. Try again.')
      });
  };

  if(httpError) {
    return(
      <section className={classes.hasError}>
        <p>Error occurred. Try again.</p>
      </section>
  )
  }

  if (isLoading) {
    return (
      <section className={classes.isLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes["meals"]}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
