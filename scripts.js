
    // Get the input elements 
    // TODO 1: Create a function called updateCard()
    // This function should:
    // - Get values from all three inputs
    // - If ANY input is empty, show the placeholder message and set class to "empty"
    // - If ALL inputs are filled:
    //   * Show the message: "Hello [name]! You are [age] years old. You love [subject]!"
    //   * If age < 18: set card class to "young"
    //   * If age >= 18: set card class to "adult"


// YOUR CODE HERE

function updateCard(){

  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const subject = document.getElementById("subject").value;

  const card = document.getElementById("card");

// If any input is empty 
  if (!name || !age || !subject) {
    card.textContent = "Fill in the fields above to generate your card"
    card.className = "empty";
  } else {
   card.textContent = `Hello ${name} you are ${age} years old. You love ${subject}`
    
    console.log("Name:" + name);
    console.log("Age:" + age);
    console.log("Subject:" + subject);

    if (age < 18) {

  card.className = "young"
    } else {
card.className = "adult"
    }
  }
}

 // TODO 2: Add event listeners
    // When user types in ANY of the three input fields, the updateCard() function should run
    // Use: addEventListener("input", updateCard)

    // YOUR CODE HERE

    // Initial call
    updateCard();

document.getElementById("name").addEventListener("input", updateCard);
document.getElementById("age").addEventListener("input", updateCard);
document.getElementById("subject").addEventListener("input", updateCard);

