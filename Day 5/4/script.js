console.log("Attached");

const url =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/delhi?key=DS5HL5ELEXJLQMHRHHYY6FF4M";
function fetchAPI(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      renderUI(data);
    });
}

fetchAPI(url);

const root = document.getElementById("root");
function renderUI(data) {
  const day = data.days;
  console.log(day[0]);




  const tr = document.createElement("tr");
  const dateTd = document.createElement("th");
  dateTd.innerText = "Date";
  tr.appendChild(dateTd);
  const conditionTd = document.createElement("th");
  conditionTd.innerText = "Condition";
  tr.appendChild(conditionTd);
  const descriptionTd = document.createElement("th");
  descriptionTd.innerText = "Description";
  tr.appendChild(descriptionTd);
  const sunriseTd = document.createElement("th");
  sunriseTd.innerText = "Sun Rise";
  tr.appendChild(sunriseTd);
  const sunsetTd = document.createElement("th");
  sunsetTd.innerText = "Sun Set";
  tr.appendChild(sunsetTd);
  root.append(tr);





  for (var i = 0; i < day.length; i++) {
    const tr = document.createElement("tr");
    const dateTd = document.createElement("td");
    dateTd.innerText = day[i].datetime;
    tr.appendChild(dateTd);
    const conditionTd = document.createElement("td");
    conditionTd.innerText = day[i].conditions;
    tr.appendChild(conditionTd);
    const descriptionTd = document.createElement("td");
    descriptionTd.innerText = day[i].description;
    tr.appendChild(descriptionTd);
    const sunriseTd = document.createElement("td");
    sunriseTd.innerText = day[i].sunrise;
    tr.appendChild(sunriseTd);
    const sunsetTd = document.createElement("td");
    sunsetTd.innerText = day[i].sunset;
    tr.appendChild(sunsetTd);
    root.append(tr);
  }
}

// For ABC

// const url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/delhi?key=DS5HL5ELEXJLQMHRHHYY6FF4M";

//         function fetchAPI(url) {
//             fetch(url)
//                 .then(res => res.json())
//                 .then(data => {
//                     renderUI(data);
//                 });
//         }

//         fetchAPI(url);

//         function renderUI(data) {
//             const days = data.days;

//             const tbody = document.getElementById("weatherData");

//             days.forEach(day => {
//                 const tr = document.createElement("tr");

//                 const dateTd = document.createElement("td");
//                 dateTd.innerText = day.datetime;
//                 tr.appendChild(dateTd);

//                 const conditionsTd = document.createElement("td");
//                 conditionsTd.innerText = day.conditions;
//                 tr.appendChild(conditionsTd);

//                 const descriptionTd = document.createElement("td");
//                 descriptionTd.innerText = day.description;
//                 tr.appendChild(descriptionTd);

//                 const sunsetTd = document.createElement("td");
//                 sunsetTd.innerText = day.sunset;
//                 tr.appendChild(sunsetTd);

//                 const sunriseTd = document.createElement("td");
//                 sunriseTd.innerText = day.sunrise;
//                 tr.appendChild(sunriseTd);

//                 tbody.appendChild(tr);
//             });
//         }
