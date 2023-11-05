

// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
  // getInstruction("mashedPotatoes", 0, (step1) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 1, (step2) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 2, (step3) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 3, (step4) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 4, (step5) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
  //   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  // }, (error) => console.log(error));
  //I comment above to avoid repeation
  



// Iteration 1 - using callbacks
getInstruction('mashedPotatoes', 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;
  getInstruction('mashedPotatoes', 1, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
    getInstruction('mashedPotatoes', 2, (step2) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
      getInstruction('mashedPotatoes', 3, (step3) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
        getInstruction('mashedPotatoes', 4, (step4) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
          document.querySelector("#mashedPotatoes").removeAttribute("hidden");
          document.querySelector("#mashedPotatoes").innerHTML += "<li>Mashed potatoes are ready!</li>"; // Add this line
        }, (error) => console.log(error));
      }, (error) => console.log(error));
    }, (error) => console.log(error));
  }, (error) => console.log(error));
}, (error) => console.log(error));



// Iteration 2 - using promises
obtainInstruction('steak', 0)
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
    return obtainInstruction('steak', 1);
  })
  .then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
    return obtainInstruction('steak', 2);
  })
  .then((step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
    return obtainInstruction('steak', 3);
  })
  .then((step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
    return obtainInstruction('steak', 4);
  })
  .then((step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
    return obtainInstruction('steak', 5);
  })
  .then((step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
    return obtainInstruction('steak', 6);
  })
  .then((step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
    return obtainInstruction('steak', 7);
  })
  .then((step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`;
    document.querySelector("#steak").removeAttribute("hidden");
  })
  .catch((error) => console.log(error));




// // Iteration 3 using async/await
// I use for looping 
async function makeBroccoli() {
  try {
    for (let i = 0; i < broccoli.length; i++) {
      const step = await obtainInstruction('broccoli', i);
      document.querySelector("#broccoli").innerHTML += `<li>${step}</li>`;
    }
    
    document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`;
    document.querySelector("#broccoli").removeAttribute("hidden");
  } catch (error) {
    console.log(error);
  }
}

makeBroccoli();









// Bonus 2 - Promise all


async function makeBrussels() {
  try {
    let response0 = await obtainInstruction("brusselsSprouts", 0);
    document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>${response0}</li>`;
    let response1 = await obtainInstruction("brusselsSprouts", 1);
    document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>${response1}</li>`;
    let response2 = await obtainInstruction("brusselsSprouts", 2);
    document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>${response2}</li>`;
    let response3 = await obtainInstruction("brusselsSprouts", 3);
    document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>${response3}</li>`;
    let response4 = await obtainInstruction("brusselsSprouts", 4);
    document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>${response4}</li>`;
    let response5 = await obtainInstruction("brusselsSprouts", 5);
    document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>${response5}</li>`;
    let response6 = await obtainInstruction("brusselsSprouts", 6);
    document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>${response6}</li>`;
    let response7 = await obtainInstruction("brusselsSprouts", 7);
    document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>${response7}</li>`;
    let response8 = await obtainInstruction("brusselsSprouts", 8);
    document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>${response8}</li>`;
  } catch (error) {
    console.log(error);
  }
  let response9 = "Brussels sprouts are ready";
  document.querySelector(
    "#brusselsSprouts"
  ).innerHTML += `<li>${response9}</li>`;
}
Promise.all([
  obtainInstruction("brusselsSprouts", 0),
  obtainInstruction("brusselsSprouts", 1),
  obtainInstruction("brusselsSprouts", 2),
  obtainInstruction("brusselsSprouts", 3),
  obtainInstruction("brusselsSprouts", 4),
  obtainInstruction("brusselsSprouts", 5),
  obtainInstruction("brusselsSprouts", 6),
  obtainInstruction("brusselsSprouts", 7)
])
  .then((response) => {
    document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>${response[0]}</li>`;
    document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>${response[1]}</li>`;
    document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>${response[2]}</li>`;
    document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>${response[3]}</li>`;
    document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>${response[4]}</li>`;
    document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>${response[5]}</li>`;
    document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>${response[6]}</li>`;
    document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>${response[7]}</li>`;
    document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>Brussels sprouts are ready</li>`;
    document.querySelector("#brusselsSproutsImg").style.display = "block";
  })
  .catch((error) => {
    console.log(error);
  });
