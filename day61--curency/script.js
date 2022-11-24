const cur1 = document.querySelector(".cur-1");
const cur2 = document.querySelector(".cur-2");
const cur1input = document.querySelector(".cur-1-input");
const cur2input = document.querySelector(".cur-2-input");

const baseRate = document.querySelector(".base");
const switchCur = document.querySelector(".switch-cur");

const countries = [
  {
    name: "EUR",
    flagUrl: "https://www.worldometers.info/img/flags/small/tn_fr-flag.gif",
  },
  {
    name: "GBP",
    flagUrl: "https://www.worldometers.info/img/flags/small/tn_uk-flag.gif",
  },
  {
    name: "USD",
    flagUrl: "https://www.worldometers.info/img/flags/small/tn_us-flag.gif",
  },
];

//https://v6.exchangerate-api.com/v6/d0e7c42204034c35056a8f50/latest/USD

const apiUrl = "https://v6.exchangerate-api.com/v6/";
const apiKey = "d0e7c42204034c35056a8f50";

// Get exchange rates
async function getExchangeRate() {
  const cur1Value = cur1.value;
  const cur2Value = cur2.value;

  const response = await fetch(`${apiUrl}${apiKey}/latest/${cur1Value}`);
  const data = await response.json();
  // console.log(data);
  const rate = data.conversion_rates[cur2Value];

  baseRate.textContent = `1 ${cur1Value} = ${rate.toFixed(2)} ${cur2Value}`;
  cur2input.value = (cur1input.value * rate).toFixed(2);
}

getExchangeRate();

// addEventListener

cur1.addEventListener("change", () => {
  getExchangeRate();
  getFlag();
});

cur2.addEventListener("change", () => {
  getExchangeRate();
  getFlag();
});

cur1input.addEventListener("input", getExchangeRate);
cur2input.addEventListener("input", getExchangeRate);

switchCur.addEventListener("click", () => {
  const cur1Val = cur1.value;
  cur1.value = cur2.value;
  cur2.value = cur1Val;
  switchCur.classList.toggle("rotate");
  getExchangeRate();
  getFlag();
});

//get Flag

function getFlag() {
  countries.forEach((country) => {
    // console.log(country.name);
    if (cur1.value == country.name) {
      const flag = document.querySelector(".from img");
      flag.setAttribute("src", country.flagUrl);
    }
    if (cur2.value == country.name) {
      const flag = document.querySelector(".to img");
      flag.setAttribute("src", country.flagUrl);
    }
  });
}
