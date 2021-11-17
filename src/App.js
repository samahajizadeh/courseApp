import React, { useState } from "react";

import CourseGoalList from "./components/CourseGoals/CourseGoalList/CourseGoalList";
import CourseInput from "./components/CourseGoals/CourseInput/CourseInput";
import "./App.css";

const course = [
  { text: "Do all exercises!", id: "g1" },
  { text: "Finish the course!", id: "g2" },
  { text: "This is a page", id: "g3" },
];
const App = () => {
  const [courseGoals, setCourseGoals] = useState(course);

  const addGoalHandler = (enteredText) => {
    // setCourseGoals((prevGoals) => {
    //   const updatedGoals = [...prevGoals];
    //   updatedGoals.push({ text: enteredText, id: Math.random().toString() });
    //   return updatedGoals;
    // });

    let enteredObj = {text:enteredText, id: Math.random().toString()}
    setCourseGoals(prevState => {return [...prevState, enteredObj] })
  };

  const deleteItemHandler = (goalId) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId);
      return updatedGoals;
    });
  };

  let content = (
    <p style={{ textAlign: "center" }}>No goals found. Maybe add one?</p>
  );

  if (courseGoals.length > 0) {
    content = (
      <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
    <div>
      <section id="goal-form">
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">
        {content}
        {/* {courseGoals.length > 0 && (
          <CourseGoalList
            items={courseGoals}
            onDeleteItem={deleteItemHandler}
          />
        ) // <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
        } */}
      </section>
    </div>
  );
};

export default App;
