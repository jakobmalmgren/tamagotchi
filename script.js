const spooky = {
  name: "jakob",
  maxHungry: 100,
  hungry: 0,
  maxSleepy: 100,
  sleepy: 0,
  maxBored: 100,
  notBored: 0,
};
//hungry
let face;
const hungerInterval = setInterval(() => {
  const hungryFace = handleHunger();
  handleFace(hungryFace);
}, 200);
const faceContainer = document.querySelector(".main__face-container");
const hungryBtn = document.querySelector(".main__btn--eat");
const ghost = document.querySelector(".fa-ghost");
hungryBtn.addEventListener("click", () => {
  ghost.classList.toggle("fa-ghost-toggle-food");
  setTimeout(() => {
    ghost.classList.remove("fa-ghost-toggle-food");
  }, 100);

  if (spooky.hungry >= 0) {
    console.log(hungry--);
  } else {
    return;
  }
});

function handleHunger() {
  spooky.hungry++;
  console.log(spooky.hungry);

  if (spooky.hungry <= 33) {
    // console.log("not hungry");
    face = "happy";
  } else if (spooky.hungry >= 34 && spooky.hungry <= 66) {
    // console.log("medium hungry");
    face = "medium glad";
  } else if (spooky.hungry >= 67 && spooky.hungry <= 99) {
    // console.log("very very hungry");
    face = "inte glad";
  } else if (spooky.hungry === spooky.maxHungry) {
    console.log("död");
    face = "död";
    clearInterval(hungerInterval);
  }

  return face;
}

function handleFace(hungryFace) {
  let changingFace = hungryFace;
  if (changingFace === "happy") {
    faceContainer.innerHTML = `<i class="fa-regular fa-face-smile"></i>`;
  } else if (changingFace === "medium glad") {
    faceContainer.innerHTML = `<i class="fa-regular fa-face-meh"></i>`;
  } else if (changingFace === "inte glad") {
    faceContainer.innerHTML = `   <i class="fa-regular fa-face-frown"></i>`;
  } else {
    faceContainer.innerHTML = `  <i class="fa-solid fa-skull"></i>`;
  }
}

//////////////////////////////////////////////////////////////////////
//tired
const sleepContainer = document.querySelector(".main__sleepy-container");
const sleepyBnt = document.querySelector(".main__btn--sleep");
let sleepyFace;
const sleepyInterval = setInterval(() => {
  // här va en grej, spara varibael
  // sen skicka den visa argument..MEN HUR SKA JA KUNNA VETA DEN SKA IN JUST
  ///HÄR SÅ JAG SKA SKICKA ARGMENTET HÄRIFRÅN?? DE JA OFTTA ÄR SNETT PÅ!! SOM
  //VISAS NEDANFÖR..SEN SKICKAS DE TIL HANDLESLEEPYFACE O TAR EMOT DE!
  //känner de v bara en slump att de båda funkttionerna är på samma plats o då går de bra men hur fan gör man annars?
  const face = handleSleep();
  handleSleepyFace(face);
}, 200);

function handleSleep() {
  spooky.sleepy++;
  console.log(spooky.sleepy);

  if (spooky.sleepy <= 25) {
    sleepyFace = "not tired";
  } else if (spooky.sleepy >= 26 && spooky.sleepy <= 50) {
    sleepyFace = "medium tired";
  } else if (spooky.sleepy >= 51 && spooky.sleepy <= 75) {
    sleepyFace = "litte more sleepy";
  } else if (spooky.sleepy >= 76 && spooky.sleepy <= 99) {
    sleepyFace = "very sleepy";
  } else if (spooky.sleepy >= 100) {
    sleepyFace = "deadly tired";
  }
  if (spooky.sleepy >= spooky.maxSleepy) {
    clearInterval(sleepyInterval);
  }
  return sleepyFace;
}

function handleSleepyFace(face) {
  let sleepyExpression = face;
  if (sleepyExpression === "not tired") {
    sleepContainer.innerHTML = `<i class="fa-solid fa-battery-full battery"></i>`;
  } else if (sleepyExpression === "medium tired") {
    sleepContainer.innerHTML = `  <i class="fa-solid fa-battery-three-quarters battery"></i>`;
  } else if (sleepyExpression === "litte more sleepy") {
    sleepContainer.innerHTML = ` <i class="fa-solid fa-battery-half battery"></i>`;
  } else if (sleepyExpression === "very sleepy") {
    sleepContainer.innerHTML = `<i class="fa-solid fa-battery-quarter battery"></i>`;
  } else if (sleepyExpression === "deadly tired") {
    sleepContainer.innerHTML = `   <i class="fa-solid fa-battery-empty battery"></i>`;
  }
}

sleepyBnt.addEventListener("click", () => {
  ghost.classList.toggle("fa-ghost-toggle-bed");
  setTimeout(() => {
    ghost.classList.remove("fa-ghost-toggle-bed");
  }, 100);
  if (spooky.sleepy >= 0) {
    spooky.sleepy--;
  } else {
    return;
  }
});

// //////////////////////////////////////////////////////////////
//bored
const boredContainer = document.querySelector(".main__bored-container");
const boredBtn = document.querySelector(".main__btn--play");
boredBtn.addEventListener("click", () => {
  console.log("clicked bored");

  ghost.classList.toggle("fa-ghost-toggle-fun");
  setTimeout(() => {
    ghost.classList.remove("fa-ghost-toggle-fun");
  }, 100);
  if (spooky.notBored >= 0) {
    spooky.notBored--;
  } else {
    return;
  }
});

let boredFace;
const boredInterval = setInterval(() => {
  const boredFace = handleBored();
  handleBoredFace(boredFace);
  saveDataLocalStorage();
}, 2000);

function handleBored() {
  spooky.notBored++;
  console.log(spooky.notBored);

  if (spooky.notBored <= 35) {
    boredFace = "not bored";
  } else if (spooky.notBored >= 36 && spooky.notBored <= 70) {
    boredFace = "medium bored";
  } else if (spooky.notBored >= 71 && spooky.notBored <= 99) {
    boredFace = "mega bored";
  }
  if (spooky.notBored >= spooky.maxBored) {
    clearInterval(boredInterval);
  }
  return boredFace;
}

function handleBoredFace(boredFace) {
  let boredExpression = boredFace;
  if (boredExpression === "not bored") {
    boredContainer.innerHTML = `    <i class="fa-regular fa-face-grin-stars"></i>`;
  } else if (boredExpression === "medium bored") {
    boredContainer.innerHTML = `<i class="fa-regular fa-face-rolling-eyes"></i>`;
  } else if (boredExpression === "mega bored") {
    boredContainer.innerHTML = `   <i class="fa-regular fa-face-sad-cry"></i> `;
  }
}
//////////////////////////////////////////////////////////////////
//work
let money = 0;
const moneyContainer = document.querySelector(".main__money-section-amount");
moneyContainer.innerHTML = `${money}`;
const workBtn = document.querySelector(".main__btn--work");
workBtn.addEventListener("click", () => {
  money++;
  moneyContainer.innerHTML = `${money}`;
  ghost.classList.toggle("fa-ghost-toggle-work");
  setTimeout(() => {
    ghost.classList.remove("fa-ghost-toggle-work");
  }, 100);
  console.log(money);
});

function handleWork() {}

// för varje äta tryck ska de förvinna en dollar plus upp energi....
// för varje play ska icke utttråkad va uppe och energin ner..
//för varje jobbtryck energin ska gå ner snabbare el mer..plus pengar upp

// function saveDataLocalStorage() {
//   return localStorage.setItem("spooky", JSON.stringify(spooky));
// }

// function getDataLocalStorage() {
//   return JSON.parse(localStorage.getItem("spooky"));
// }

// console.log(getDataLocalStorage());
