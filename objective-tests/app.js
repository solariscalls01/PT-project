let getRadioValue = document.getElementsByTagName("input");

//
function getTotal() {
  let total = 0;
  for (i = 0; i < getRadioValue.length; i++) {
    if (getRadioValue[i].checked) {
      // console.log('this was clicked')
      console.dir(getRadioValue[i].value);
      total += parseInt(getRadioValue[i].value);
    }
    // console.log(total)
  }
  return total;
}

for (i = 0; i < getRadioValue.length; i++) {
  getRadioValue[i].addEventListener("click", getTotal);
}

// function to display results.
function summary() {
  const getDiv = document.getElementById("result");
  scoreResult = getTotal(); //get the int value and provide appropriate summary based on score
  if (scoreResult >= 41) {
    getDiv.innerHTML =`
      <h2>Results: ${scoreResult}</h2>
      <p>A person with a score indicates a <strong class="result-statement">lower risk of falling.</strong> Individuals demonstrate better balance control and are less likely to experience falls during daily activities.</p>`
  } else if (scoreResult <= 40 && scoreResult >=21) {
    getDiv.innerHTML =
      `<h2>Results: ${scoreResult}</h2>
      <p>A person with a score indicates a <strong class="result-statement">moderate risk</strong> of falling. They exhibit some balance difficulties and may need interventions or exercises to improve their balance and reduce the risk of falls.</p>`
  } else {
      getDiv.innerHTML =
      `<h2>Results: ${scoreResult}</h2>
      <p id="results">A person with a score indicates <strong class="result-statement">high risk of falling</strong>. Individuals scoring in this range may have significant balance impairments and are more likely to experience falls during daily activities.</p>`
    }
}
