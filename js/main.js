let year = [];

function createOptionYear(total) {
  for (let i = 2021; i > 1920; i--) {
    total = year.push(i);
    console.log(year);
  }
}

createOptionYear();

const select = document.getElementById("select");

year.forEach(function (element, value) {
  select.appendChild(new Option(element, value));
});

let day = [];

function createOptionDay(total) {
  for (let i = 1; i <= 31; i++) {
    total = day.push(i);
    console.log(day);
  }
}

createOptionDay();

const idDay = document.getElementById("idDay");

day.forEach(function (element, value) {
  idDay.appendChild(new Option(element, value));
});

let month = [
  "Jan",
  "Fev",
  "Mar",
  "Abr",
  "Mai",
  "Jun",
  "Jul",
  "Ago",
  "Set",
  "Out",
  "Nov"
];

const idMonth = document.getElementById("idMonth");

month.forEach(function (element, value) {
  idMonth.appendChild(new Option(element, value));
});
