let spooky = {
  name: "Jakob",
  maxHungry: 100,
  hungry: 0,
  maxSleepy: 100,
  sleepy: 0,
  maxBored: 100,
  notBored: 0,
  money: 0,
  dateNow: Date.now(),
};

const ghostContainer = document.querySelector(".main__screen-ghost-container");
const moneyContainer = document.querySelector(".main__money-section-amount");
const faceContainer = document.querySelector(".main__face-container");
const boredContainer = document.querySelector(".main__bored-container");
const boredBtn = document.querySelector(".main__btn--play");
const workBtn = document.querySelector(".main__btn--work");
const sleepyBnt = document.querySelector(".main__btn--sleep");
const hungryBtn = document.querySelector(".main__btn--eat");
const sleepContainer = document.querySelector(".main__sleepy-container");
ghostContainer.innerHTML = `<i class="fa-solid fa-ghost"></i>`;
const info = document.querySelector(".main__info-container__p");

info.innerHTML = `Name : ${spooky.name}`;
const restartBtn = document.querySelector(".main__power-btn");
restartBtn.addEventListener("click", () => {
  localStorage.clear();
  location.reload();
});

//hungry section///////////////////////////////////////////////////////////////////////
let face;

const hungerInterval = setInterval(() => {
  /// göra en func här som bara kör inttervall upp ttill 100 o if sattsen i den
  console.log(spooky);
  // if (
  //   spooky.notBored === spooky.maxBored ||
  //   spooky.sleepy === spooky.maxSleepy
  // ) {
  // } else {
  //   const hungryFace = handleHunger();
  //   handleFace(hungryFace);
  //   saveDataLocalStorage();
  // }

  const hungryFace = handleHunger();
  handleFace(hungryFace);
  saveDataLocalStorage();
}, 300);

hungryBtn.addEventListener("click", () => {
  if (spooky.money >= 1) {
    spooky.money--;
    moneyContainer.innerHTML = `: ${spooky.money}`;
  } else {
    return;
  }
  // console.log(spooky.money);

  ghostContainer.classList.toggle("fa-ghost-toggle-food");
  setTimeout(() => {
    ghostContainer.classList.remove("fa-ghost-toggle-food");
  }, 100);

  if (spooky.hungry >= 0) {
    spooky.hungry--;
  } else {
    return;
  }
});

function handleHunger() {
  spooky.hungry++;

  console.log(`hungrig : ${spooky.hungry}`);
  dead();

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
  }
}

// sleepy section ///////////////////////////////////////////////////////////////////////

let sleepyFace;
const sleepyInterval = setInterval(() => {
  // if (
  //   spooky.hungry === spooky.maxHungry ||
  //   spooky.notBored === spooky.maxBored
  // ) {
  // } else {
  //   const face = handleSleep(); ///////////
  //   handleSleepyFace(face);
  //   saveDataLocalStorage();
  // }

  const face = handleSleep(); ///////////
  handleSleepyFace(face);
  saveDataLocalStorage();
}, 3500);

function handleSleep() {
  spooky.sleepy++;
  console.log(`sömnig : ${spooky.sleepy}`);
  dead();

  if (spooky.sleepy <= 25) {
    sleepyFace = "not tired";
  } else if (spooky.sleepy >= 26 && spooky.sleepy <= 50) {
    sleepyFace = "medium tired";
  } else if (spooky.sleepy >= 51 && spooky.sleepy <= 75) {
    sleepyFace = "litte more sleepy";
  } else if (spooky.sleepy >= 76 && spooky.sleepy <= 99) {
    sleepyFace = "very sleepy";
  } else if ((spooky.sleepy = spooky.maxSleepy)) {
    sleepyFace = "deadly tired";
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
  ghostContainer.classList.toggle("fa-ghost-toggle-bed");
  setTimeout(() => {
    ghostContainer.classList.remove("fa-ghost-toggle-bed");
  }, 100);
  if (spooky.sleepy >= 0) {
    spooky.sleepy--;
  } else {
    return;
  }
});

// bored section ///////////////////////////////////////////////////////////////////////////////

boredBtn.addEventListener("click", () => {
  console.log("clicked bored");

  ghostContainer.classList.toggle("fa-ghost-toggle-fun");
  setTimeout(() => {
    ghostContainer.classList.remove("fa-ghost-toggle-fun");
  }, 100);
  if (spooky.notBored >= 0) {
    spooky.notBored--;
  } else {
    return;
  }
});

let boredFace;
const boredInterval = setInterval(() => {
  // if (
  //   spooky.hungry === spooky.maxHungry ||
  //   spooky.sleepy === spooky.maxSleepy
  // ) {
  // } else {
  //   const boredFace = handleBored();
  //   handleBoredFace(boredFace);
  //   saveDataLocalStorage();
  // }

  const boredFace = handleBored();
  handleBoredFace(boredFace);
  saveDataLocalStorage();
}, 2000);

function handleBored() {
  spooky.notBored++;
  console.log(`uttråkad : ${spooky.notBored}`);
  dead();

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
// work section //////////////////////////////////////////////////////////////////////
moneyContainer.innerHTML = `: ${spooky.money}`;
workBtn.addEventListener("click", () => {
  spooky.money = spooky.money + 4;
  spooky.sleepy = spooky.sleepy + 2;
  spooky.notBored++;
  moneyContainer.innerHTML = `: ${spooky.money}`;
  ghostContainer.classList.toggle("fa-ghost-toggle-work");
  setTimeout(() => {
    ghostContainer.classList.remove("fa-ghost-toggle-work");
  }, 100);
});

function dead() {
  if (
    spooky.hungry === spooky.maxHungry ||
    spooky.sleepy === spooky.maxSleepy ||
    spooky.notBored === spooky.maxBored
  ) {
    hungryBtn.setAttribute("disabled", "disabled");
    boredBtn.setAttribute("disabled", "disabled");
    workBtn.setAttribute("disabled", "disabled");
    sleepyBnt.setAttribute("disabled", "disabled");
    ghostContainer.innerHTML = `<i class="fa-solid fa-skull-crossbones"></i>`;
    clearInterval(boredInterval);
    clearInterval(sleepyInterval);
    clearInterval(hungerInterval);
  } else {
    // behöver man skriva nåt?
  }
}

// localstorage //////////////////////////////////////////////////////////////////////////
function saveDataLocalStorage() {
  spooky.dateNow = Date.now();
  localStorage.setItem("spooky", JSON.stringify(spooky));
}

function getDataLocalStorage() {
  return JSON.parse(localStorage.getItem("spooky"));
}
console.log(getDataLocalStorage()); //////

if (getDataLocalStorage()) {
  spooky = JSON.parse(localStorage.getItem("spooky"));
  const timeInBetweenSeconds = Math.round((Date.now() - spooky.dateNow) / 1000);

  spooky.hungry += timeInBetweenSeconds;
  spooky.sleepy += timeInBetweenSeconds;
  spooky.notBored += timeInBetweenSeconds;
  moneyContainer.innerHTML = `${spooky.money}`;
} else {
  spooky = {
    name: "Jakob",
    maxHungry: 100,
    hungry: 0,
    maxSleepy: 100,
    sleepy: 0,
    maxBored: 100,
    notBored: 0,
    money: 0,
  };
}
