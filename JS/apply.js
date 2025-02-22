document.addEventListener("DOMContentLoaded", initiation);

function initiation() {
  tech_title = document.querySelector("#tech_title");
  innovation_title = document.querySelector("#innovation_title");
  ecology_title = document.querySelector("#ecology_title");
  technology_zone = document.querySelector(".technology_zone");
  innovation_zone = document.querySelector(".innovation_zone");
  ecology_zone = document.querySelector(".ecology_zone");
  technology_form = document.querySelectorAll(".technology_zone > form");
  innovation_form = document.querySelectorAll(".innovation_zone > form");
  ecology_form = document.querySelectorAll(".ecology_zone > form");

  tech_title.addEventListener("click", techClicked);
  innovation_title.addEventListener("click", innovClicked);
  ecology_title.addEventListener("click", ecoClicked);

  tech_title.setAttribute("style", "background-color: white; color: black;");
  var select = "tech";
  chosenRanks = [];
  chosenCompanies = [];

  function techClicked() {
    select = "tech";
    tableDisplay();
  }

  function innovClicked() {
    select = "innov";
    tableDisplay();
  }

  function ecoClicked() {
    select = "eco";
    tableDisplay();
  }
  tableDisplay();

  // Technology Zone
  for (let i = 0; i < technology_form.length; i++) {
    const tech_click = technology_form[i];
    tech_click.addEventListener("submit", (e) => {
      e.preventDefault();
      let data = new FormData(tech_click);
      for (const [name, value] of data) {
        if (value % 1 != 0 || value == "") {
          alert("Please enter the rank of chosen company");
        } else if (value < 1 || value > 10) {
          alert("Please enter the rank of chosen between 1 and 10");
        } else if (chosenCompanies.includes(name)) {
          alert("You have already chosen this company");
        } else if (chosenRanks.includes(parseInt(value))) {
          alert("You have already chosen this rank");
        } else {
          if (value == 1) {
            alert(
              "You have chosen " +
                name +
                "as your 1st chosen company in Technology Zone successfully"
            );
          } else if (value == 2) {
            alert(
              "You have chosen " +
                name +
                "as your 2nd chosen company in Technology Zone successfully"
            );
          } else if (value == 3) {
            alert(
              "You have chosen " +
                name +
                "as your 3rd chosen company in Technology Zone successfully"
            );
          } else if (value > 3) {
            alert(
              "You have chosen " +
                name +
                "as your " +
                value +
                "th chosen company in Technology Zone successfully"
            );
          }
          zone = "zone" + value;
          company = "company" + value;
          chosenRanks.push(parseInt(value));
          chosenCompanies.push(name);
          updateTable(value, "Technology Zone", name);
        }
        technology_form[i].reset();
      }
    });
  }

  //Innovation
  for (let i = 0; i < innovation_form.length; i++) {
    const innov_click = innovation_form[i];
    innov_click.addEventListener("submit", (e) => {
      e.preventDefault();
      let data = new FormData(innov_click);
      for (const [name, value] of data) {
        if (value % 1 != 0 || value == "") {
          alert("Please enter the rank of chosen company");
        } else if (value < 1 || value > 10) {
          alert("Please enter the rank of chosen between 1 and 10");
        } else if (chosenCompanies.includes(name)) {
          alert("You have already chosen this company");
        } else if (chosenRanks.includes(parseInt(value))) {
          alert("You have already chosen this rank");
        } else {
          if (value == 1) {
            alert(
              "You have chosen " +
                name +
                "as your 1st chosen company in Innovation Zone successfully"
            );
          } else if (value == 2) {
            alert(
              "You have chosen " +
                name +
                "as your 2nd chosen company in Innovation Zone successfully"
            );
          } else if (value == 3) {
            alert(
              "You have chosen " +
                name +
                "as your 3rd chosen company in Innovation Zone successfully"
            );
          } else if (value > 3) {
            alert(
              "You have chosen " +
                name +
                "as your " +
                value +
                "th chosen company in Innovation Zone successfully"
            );
          }
          zone = "zone" + value;
          company = "company" + value;
          chosenRanks.push(parseInt(value));
          chosenCompanies.push(name);
          updateTable(value, "Innovation Zone", name);
        }
        innovation_form[i].reset();
      }
    });
  }

  //Ecology
  for (let i = 0; i < ecology_form.length; i++) {
    const eco_click = ecology_form[i];
    eco_click.addEventListener("submit", (e) => {
      e.preventDefault();
      let data = new FormData(eco_click);
      for (const [name, value] of data) {
        if (value % 1 != 0 || value == "") {
          alert("Please enter the rank of chosen company");
        } else if (value < 1 || value > 10) {
          alert("Please enter the rank of chosen between 1 and 10");
        } else if (chosenCompanies.includes(name)) {
          alert("You have already chosen this company");
        } else if (chosenRanks.includes(parseInt(value))) {
          alert("You have already chosen this rank");
        } else {
          if (value == 1) {
            alert(
              "You have chosen " +
                name +
                "as your 1st chosen company in Ecology Zone successfully"
            );
          } else if (value == 2) {
            alert(
              "You have chosen " +
                name +
                "as your 2nd chosen company in Ecology Zone successfully"
            );
          } else if (value == 3) {
            alert(
              "You have chosen " +
                name +
                "as your 3rd chosen company in Innovation Zone successfully"
            );
          } else if (value > 3) {
            alert(
              "You have chosen " +
                name +
                "as your " +
                value +
                "th chosen company in Ecology Zone successfully"
            );
          }
          zone = "zone" + value;
          company = "company" + value;
          chosenRanks.push(parseInt(value));
          chosenCompanies.push(name);
          updateTable(value, "Ecology Zone", name);
        }
        ecology_form[i].reset();
      }
    });
  }

  //Table Display
  function tableDisplay() {
    if (select == "tech") {
      console.log("Technology Zone");
      tech_title.setAttribute(
        "style",
        "background-color: white; color: black;"
      );
      innovation_title.setAttribute(
        "style",
        "background-color: #2e3a4b; color: white;"
      );
      ecology_title.setAttribute(
        "style",
        "background-color: #2e3a4b; color: white;"
      );
      technology_zone.setAttribute("style", "display: block;");
      innovation_zone.setAttribute("style", "display: none;");
      ecology_zone.setAttribute("style", "display: none;");
    } else if (select == "innov") {
      console.log("Innovation Zone");
      tech_title.setAttribute(
        "style",
        "background-color: #2e3a4b; color: white;"
      );
      innovation_title.setAttribute(
        "style",
        "background-color: white; color: black;"
      );
      ecology_title.setAttribute(
        "style",
        "background-color: #2e3a4b; color: white;"
      );
      technology_zone.setAttribute("style", "display: none;");
      innovation_zone.setAttribute("style", "display: block;");
      ecology_zone.setAttribute("style", "display: none;");
    } else if (select == "eco") {
      console.log("Ecology Zone");
      tech_title.setAttribute(
        "style",
        "background-color: #2e3a4b; color: white;"
      );
      innovation_title.setAttribute(
        "style",
        "background-color: #2e3a4b; color: white;"
      );
      ecology_title.setAttribute(
        "style",
        "background-color: white; color: black;"
      );
      technology_zone.setAttribute("style", "display: none;");
      innovation_zone.setAttribute("style", "display: none;");
      ecology_zone.setAttribute("style", "display: block;");
    }
  }

  var submitId = document.getElementById("submit_btn");
  submitId.addEventListener("click", whenSubmit);

  function whenSubmit() {
    console.log("submit clicked");
    var text = "";
    var gaps = [];
    for (let i = 1; i < Math.max(...chosenRanks); i++) {
      if (chosenRanks.includes(i) == false) {
        gaps.push(i);
      }
    }
    if (chosenRanks.length == 0 || chosenCompanies.length == 0) {
      document
        .getElementById("submit_notification")
        .setAttribute("style", "color:red; font-weight: 600");
      document.getElementById("submit_notification").innerHTML =
        "You have not chosen any company";
    } else if (gaps.length > 0) {
      if (gaps.length == 1) {
        if (gaps[0] == 1) {
          text += "1st";
        } else if (gaps[0] == 2) {
          text += "2nd";
        } else if (gaps[0] == 3) {
          text += "3rd";
        } else if (gaps[0] == 4) {
          text += "4rd";
        } else if (gaps[0] == 5) {
          text += "5th";
        } else if (gaps[0] == 6) {
          text += "6th";
        } else if (gaps[0] == 7) {
          text += "7th";
        } else if (gaps[0] == 8) {
          text += "8th";
        } else if (gaps[0] == 9) {
          text += "9th";
        } else if (gaps[0] == 10) {
          text += "10th";
        }
      } else {
        for (let i = 0; i < gaps.length - 1; i++) {
          if (gaps[i] == 1) {
            text += "1st, ";
          } else if (gaps[i] == 2) {
            text += "2nd, ";
          } else if (gaps[i] == 3) {
            text += "3rd, ";
          } else if (gaps[i] == 4) {
            text += "4rd, ";
          } else if (gaps[i] == 5) {
            text += "5th, ";
          } else if (gaps[i] == 6) {
            text += "6th, ";
          } else if (gaps[i] == 7) {
            text += "7th, ";
          } else if (gaps[i] == 8) {
            text += "8th, ";
          } else if (gaps[i] == 9) {
            text += "9th, ";
          } else if (gaps[i] == 10) {
            text += "10th, ";
          }
        }
        if (gaps[gaps.length - 1] == 2) {
          text += " and 2nd ";
        } else if (gaps[gaps.length - 1] == 3) {
          text += " and 3rd ";
        } else {
          text += " and " + String(gaps[gaps.length - 1]) + "th";
        }
      }
      document
        .getElementById("submit_notification")
        .setAttribute("style", "color:red; font-weight: 600");
      document.getElementById("submit_notification").innerHTML =
        "You have not chose your " +
        text +
        " company, you cannot leave any gaps between your chosen companies";
    } else {
      let waktu = new Date();
      document
        .getElementById("submit_notification")
        .setAttribute("style", "color:red; font-weight: 600");
      document.getElementById("submit_notification").innerHTML =
        "You have successfully submitted your application at time " + waktu;
    }
  }
  var resetId = document.getElementById("clear_btn");
  resetId.addEventListener("click", resetButton);

  function resetButton() {
    console.log("reset clicked");
    for (let r = 1; r < 11; r++) {
      document.getElementById("zone" + String(r)).innerHTML = "";
      document.getElementById("company" + String(r)).innerHTML = "";
    }
    chosenRanks = [];
    chosenCompanies = [];
    let timeChosen = document.querySelector(".time_title");
    timeChosen.innerHTML = "Last Change time: " + new Date();
    let totalChosen = document.querySelector(".result_title");
    totalChosen.innerHTML = "Total number of completed choices: 0";
  }
  function updateTable(rank, zone, company) {
    let zoneChosen = document.getElementById("zone" + rank);
    zoneChosen.innerHTML = zone;
    let companyChosen = document.getElementById("company" + rank);
    companyChosen.innerHTML = company;
    var chosenCompaniesLength = chosenCompanies.length;
    let totalChosen = document.querySelector(".result_title");
    totalChosen.innerHTML =
      "Total number of completed choices: " + String(chosenCompaniesLength);
    let timeChosen = document.querySelector(".time_title");
    timeChosen.innerHTML = "Last Change time: " + new Date();
  }
}
