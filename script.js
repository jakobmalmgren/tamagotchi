// const maxHungry = 100;
// let hungry = 0;
// let face;
// const hungerInterval = setInterval(() => {
//   const hungryFace = handleHunger();
//   handleFace(hungryFace);
// }, 200);
// const faceContainer = document.querySelector(".main__face-container");
// const hungryBtn = document.querySelector(".main__btn--eat");
// hungryBtn.addEventListener("click", () => {
//   if (hungry >= 0) {
//     console.log(hungry--);
//   } else {
//     return;
//   }
// });

// function handleHunger() {
//   hungry++;
//   console.log(hungry);

//   if (hungry <= 33) {
//     // console.log("not hungry");
//     face = "happy";
//   } else if (hungry >= 34 && hungry <= 66) {
//     // console.log("medium hungry");
//     face = "medium glad";
//   } else if (hungry >= 67 && hungry <= 99) {
//     // console.log("very very hungry");
//     face = "inte glad";
//   } else if (hungry === maxHungry) {
//     console.log("död");
//     face = "död";
//     clearInterval(hungerInterval);
//   }

//   return face;
// }

// function handleFace(hungryFace) {
//   let changingFace = hungryFace;
//   if (changingFace === "happy") {
//     faceContainer.innerHTML = `<i class="fa-regular fa-face-smile"></i>`;
//   } else if (changingFace === "medium glad") {
//     faceContainer.innerHTML = `<i class="fa-regular fa-face-meh"></i>`;
//   } else if (changingFace === "inte glad") {
//     faceContainer.innerHTML = `   <i class="fa-regular fa-face-frown"></i>`;
//   } else {
//     faceContainer.innerHTML = `  <i class="fa-solid fa-skull"></i>`;
//   }
// }

// ////////////////////////////////////////////////////////////////////////
// const sleepContainer = document.querySelector(".main__sleepy-container");
// const sleepyBnt = document.querySelector(".main__btn--sleep");
// const maxSleepy = 100;
// let sleepy = 0;
// let sleepyFace;
// const sleepyInterval = setInterval(() => {
//   // här va en grej, spara varibael
//   // sen skicka den visa argument..MEN HUR SKA JA KUNNA VETA DEN SKA IN JUST
//   ///HÄR SÅ JAG SKA SKICKA ARGMENTET HÄRIFRÅN?? DE JA OFTTA ÄR SNETT PÅ!! SOM
//   //VISAS NEDANFÖR..SEN SKICKAS DE TIL HANDLESLEEPYFACE O TAR EMOT DE!
//   const face = handleSleep();
//   handleSleepyFace(face);
// }, 200);

// function handleSleep() {
//   sleepy++;
//   console.log(sleepy);

//   if (sleepy <= 25) {
//     sleepyFace = "not tired";
//   } else if (sleepy >= 26 && sleepy <= 50) {
//     sleepyFace = "medium tired";
//   } else if (sleepy >= 51 && sleepy <= 75) {
//     sleepyFace = "litte more sleepy";
//   } else if (sleepy >= 76 && sleepy <= 99) {
//     sleepyFace = "very sleepy";
//   } else if (sleepy >= 100) {
//     sleepyFace = "deadly tired";
//   }
//   if (sleepy >= maxSleepy) {
//     clearInterval(sleepyInterval);
//   }
//   return sleepyFace;
// }

// function handleSleepyFace(face) {
//   let sleepyExpression = face;
//   if (sleepyExpression === "not tired") {
//     sleepContainer.innerHTML = `<i class="fa-solid fa-battery-full battery"></i>`;
//   } else if (sleepyExpression === "medium tired") {
//     sleepContainer.innerHTML = `  <i class="fa-solid fa-battery-three-quarters battery"></i>`;
//   } else if (sleepyExpression === "litte more sleepy") {
//     sleepContainer.innerHTML = ` <i class="fa-solid fa-battery-half battery"></i>`;
//   } else if (sleepyExpression === "very sleepy") {
//     sleepContainer.innerHTML = `<i class="fa-solid fa-battery-quarter battery"></i>`;
//   } else if (sleepyExpression === "deadly tired") {
//     sleepContainer.innerHTML = `   <i class="fa-solid fa-battery-empty battery"></i>`;
//   }
// }

// sleepyBnt.addEventListener("click", () => {
//   if (sleepy >= 0) {
//     sleepy--;
//   } else {
//     return;
//   }
// });

//////////////////////////////////////////////////////////////

const workContainer = document.querySelector(".main__work-container");
const workBnt = document.querySelector(".main__btn--work");
const maxHandleWork = 100;
let energyToWork = 0;
let workFace;
const workInterval = setInterval(() => {
  const workFace = handleWork();
  handleWorkFace(workFace);
}, 200);

function handleWork() {
  energyToWork++;
  console.log(energyToWork);

  if (energyToWork <= 35) {
    workFace = "not tired";
  } else if (energyToWork >= 36 && energyToWork <= 70) {
    workFace = "medium tired";
  } else if (energyToWork >= 71 && energyToWork <= 99) {
    workFace = "exhuasted";
  }
  if (workFace >= maxHandleWork) {
    clearInterval(workInterval);
  }
  return workFace;
}

function handleWorkFace(workFace) {
  let workExpression = workFace;
  if (workExpression === "not tired") {
    workContainer.innerHTML = `<i class="fa-regular fa-face-laugh-wink"></i>`;
  } else if (workExpression === "medium tired") {
    workContainer.innerHTML = ` <i class="fa-regular fa-face-grin-beam-sweat"></i>`;
  } else if (workExpression === "exhuasted") {
    workContainer.innerHTML = `    <i class="fa-regular fa-face-tired"></i>`;
  }
}

workBnt.addEventListener("click", () => {});
