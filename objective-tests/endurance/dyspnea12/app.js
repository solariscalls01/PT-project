let getRadioValue = document.getElementsByTagName("input");
let getRadioLength = getRadioValue.length;

// function to get the values from each checked radio value if true
function getTotal() {
  let total = 0;
  for (i = 0; i < getRadioLength; i++) {
    if (getRadioValue[i].checked) {
      console.dir(getRadioValue[i]);
      total += parseInt(getRadioValue[i].value);
    }
  }
  console.log(total);
  return total;
}

// iterate through the radio buttons
for (i = 0; i < getRadioLength; i++) {
  getRadioValue[i].addEventListener("click", getTotal);
}

// function to add innerhtml value to produce summary depending on score values
function getSummary() {
  const getDiv = document.getElementById("result");
  scoreResult = getTotal();
  if (scoreResult >= 21) {
    getDiv.innerHTML = `
        <h2><strong>Results: </strong>${scoreResult}</h2>
        <p>Individuals in this range experience frequent and often significant shortness of breath, 
        which has a substantial impact on their daily life, functional abilities, and emotional state</p>`;
  } else if (scoreResult >= 11 && scoreResult < 21) {
    getDiv.innerHTML = `
    <h2><strong>Results: </strong>${scoreResult}</h2>
    <p>These individuals likely experience shortness of breath more frequently and may find it 
    moderately affecting their daily activities and emotional well-being.</p>`;
  } else {
    getDiv.innerHTML = `
    <h2><strong>Results: </strong>${scoreResult}</h2>
    <p>Individuals with scores in this range may experience only occasional or minor shortness of breath, 
    and it may have minimal impact on their daily life and activities.</p>`;
  }
}
