/* Получаем все range */
const inputRangePrice = document.getElementById("input-range-price");
const inputRangeInitialPayment = document.getElementById("input-range-initialPayment");
const inputRangeYears = document.getElementById("input-range-years");
const inputRangeInitialPaymentFrom = document.getElementById("input-range-initialPayment-from");

/* Значения из текстовых инпутов */
const inputCounterPrice = document.getElementById("input-counter-price");
const inputCounterInitialPayment = document.getElementById("input-counter-initialPayment");
const inputCounterYears = document.getElementById("input-counter-years");

/* СберБанк */
const inputCounterPriceSberBank = document.getElementById("input-counter-price-sber-bank");

function calcIpoteka(price, pay, percent, years) {
    let i = parseFloat(percent / 100 / 12);
    let n = parseFloat(years * 12);
    let r = (price - pay) * ((i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1));
    return r.toFixed(2);
    price = inputRangePrice.value;
    pay = price * 10 / 100;
    percent = 9.1;
    years = inputRangeYears.value * 12;
}

function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

function zeroing() {
    if (inputCounterPrice.value < inputRangeInitialPayment.value) {
        inputRangeInitialPaymentFrom.textContent = 0;
    }
}

inputRangePrice.addEventListener("input", () => {
    inputCounterPrice.value = inputRangePrice.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    inputRangeInitialPaymentFrom.textContent = parseInt(calcIpoteka(inputRangePrice.value,
        inputRangeInitialPayment.value, 9.1,
        inputRangeYears.value)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " ₽";
    SberBank();
});

inputRangeInitialPayment.addEventListener("input", () => {
    inputCounterInitialPayment.value = inputRangeInitialPayment.value
        .toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    inputRangeInitialPaymentFrom.textContent = parseInt(calcIpoteka(inputRangePrice.value,
        inputRangeInitialPayment.value, 9.1,
        inputRangeYears.value)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " ₽";
    SberBank();
});

inputRangeYears.addEventListener("input", () => {
    inputCounterYears.value = inputRangeYears.value + " лет";
    inputRangeInitialPaymentFrom.textContent = parseInt(calcIpoteka(inputRangePrice.value,
        inputRangeInitialPayment.value, 9.1,
        inputRangeYears.value)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " ₽";
    SberBank();
});

function SberBank() {
    inputCounterPrice.value = inputRangePrice.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    inputCounterPriceSberBank.textContent = parseInt(calcIpoteka(inputRangePrice.value,
        inputRangeInitialPayment.value, 9.3,
        inputRangeYears.value)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " ₽";
}
