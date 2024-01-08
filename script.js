"use strict";

const daily = document.querySelector(".daily");
const weekly = document.querySelector(".weekly");
const monthly = document.querySelector(".monthly");
const work_card = document.querySelector(".work_card");
const play_card = document.querySelector(".play_card");
const study_card = document.querySelector(".study_card");
const exercise_card = document.querySelector(".exercise_card");
const social_card = document.querySelector(".social_card");
const sfcare_card = document.querySelector(".sfcare_card");

// on page load run function
document.addEventListener("DOMContentLoaded", function () {
  // work_card start
  insertData(work_card, "20hrs", "30hrs", "weekly");
  // work_card end

  // play card start
  insertData(play_card, "10hrs", "8hrs", "weekly");
  // play card end

  //   study card start
  insertData(study_card, "4hrs", "7hrs", "weekly");
  //   study card end

  //   exercise card start
  insertData(exercise_card, "4hrs", "5hrs", "weekly");
  //  exercise card end

  //   social_card start
  insertData(social_card, "5hrs", "10hrs", "weekly");
  //   social_card end

  //   sfcare_card start
  insertData(sfcare_card, "2hrs", "2hrs", "weekly");
  //   sfcare_card end
});

// function for daily button
// Original function
function insertData(mainClass, current, previous, duration) {
  // selecting the inner class
  const inner = mainClass.firstElementChild;
  //   current content
  let titleText =
    mainClass.firstElementChild.firstElementChild.nextElementSibling
      .firstElementChild;
  titleText.textContent = current;
  //   last day footer text
  let footerText = inner.lastElementChild.firstElementChild;
  if (duration === "daily") {
    footerText.textContent = "Last day - " + previous;
  } else if (duration === "weekly") {
    footerText.textContent = "Last week - " + previous;
  } else if (duration === "monthly") {
    footerText.textContent = "Last month - " + previous;
  }
}

// event listeners

// daily input
daily.addEventListener("click", function () {
  // work card start
  insertData(work_card, "5hr", "7hrs", "daily");
  //   work card end

  // play card start
  insertData(play_card, "1hrs", "2hrs", "daily");
  // play card end

  //   study card start
  insertData(study_card, "0hrs", "1hrs", "daily");
  //   study card end

  //   exercise card start
  insertData(exercise_card, "1hrs", "1hrs", "daily");
  //  exercise card end

  //   social_card start
  insertData(social_card, "1hrs", "3hrs", "daily");
  //   social_card end

  //   sfcare_card start
  insertData(sfcare_card, "0hrs", "1hrs", "daily");
  //   sfcare_card end
});
// weekly input
weekly.addEventListener("click", function () {
  // work_card start
  insertData(work_card, "20hrs", "30hrs", "weekly");
  // work_card end

  // play card start
  insertData(play_card, "10hrs", "8hrs", "weekly");
  // play card end

  //   study card start
  insertData(study_card, "4hrs", "7hrs", "weekly");
  //   study card end

  //   exercise card start
  insertData(exercise_card, "4hrs", "5hrs", "weekly");
  //  exercise card end

  //   social_card start
  insertData(social_card, "5hrs", "10hrs", "weekly");
  //   social_card end

  //   sfcare_card start
  insertData(sfcare_card, "2hrs", "2hrs", "weekly");
  //   sfcare_card end
});
// monthly input
monthly.addEventListener("click", function () {
  // work_card start
  insertData(work_card, "103hrs", "128hrs", "monthly");
  // work_card end

  // play card start
  insertData(play_card, "23hrs", "29hrs", "monthly");
  // play card end

  //   study card start
  insertData(study_card, "13hrs", "19hrs", "monthly");
  //   study card end

  //   exercise card start
  insertData(exercise_card, "11hrs", "18hrs", "monthly");
  //  exercise card end

  //   social_card start
  insertData(social_card, "21hrs", "23hrs", "monthly");
  //   social_card end

  //   sfcare_card start
  insertData(sfcare_card, "7hrs", "11hrs", "monthly");
  //   sfcare_card end
});
