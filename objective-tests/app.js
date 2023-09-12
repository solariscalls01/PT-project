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
    getDiv.innerHTML =
      "<h2>Results:</h2>" +
      scoreResult +
      "<p>A person with a score in this range is considered independent and should be able to move around safely without assistance.</p>";
  } else if (scoreResult >= 21 || scoreResult <= 40) {
    getDiv.innerHTML =
      "<h2>Results:</h2>" +
      scoreResult +
      "<p>A person with a score in this range will need some type of walking assistance, such as a cane or a walker.</p>";
  } else {
    getDiv.innerHTML =
      "<h2>Results:</h2>" +
      scoreResult +
      "<p>A person with a score in this range will likely need the assistance of a wheelchair to move around safely.</p>";
  }
}
