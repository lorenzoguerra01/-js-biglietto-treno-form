// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

let elName = document.getElementById('name');
let elKm = document.getElementById('km');
let elAge = document.getElementById('age');
let elBtnGenerate = document.getElementById('generate');
let elBtnCancel = document.getElementById('cancel');
let error = document.getElementById('error');
let printName = document.querySelector('.name');
let offer = document.querySelector('.offer');
let carriage = document.querySelector('.carriage');
let code = document.querySelector('.code');
let price = document.querySelector('.price');

let discountMinors = 0.2;
let discountOver65 = 0.4;


elBtnGenerate.addEventListener("click", function () {
    const name = elName.value;
    const km = elKm.value;
    const age = elAge.value;
    let priceStandard = (km * 0.21).toFixed(2);
    let priceMinors = (priceStandard - (priceStandard * discountMinors)).toFixed(2);
    let priceOver65 = (priceStandard - (priceStandard * discountOver65)).toFixed(2);

    console.log("name " + name);
    console.log("km " + km);
    console.log("age " + age);
    console.log("standard price " + priceStandard);
    console.log("minors price " + priceMinors);
    console.log("minors price " + priceMinors);
    console.log("btnGenerate " + elBtnGenerate);
    console.log("btn " + elBtnCancel);

    if (isNaN(km) || !isNaN(name) || (!km || !age || !name)) {
        console.log("Errore");
        error.classList.remove("d-none");
        error.innerHTML = "Campi non compilari correttamente";
        printName.classList.add("d-none");
        offer.classList.add("d-none");
        carriage.classList.add("d-none");
        code.classList.add("d-none");
        price.classList.add("d-none");
    } else {
        error.classList.add("d-none");
        printName.classList.remove("d-none");
        offer.classList.remove("d-none");
        carriage.classList.remove("d-none");
        code.classList.remove("d-none");
        price.classList.remove("d-none");
        printName.innerHTML = name
        carriage.innerHTML = getRndInteger(1, 12)
        code.innerHTML = getRndInteger(10000, 99999)
        if (age === "minors") {
            console.log(`Il prezzo Totale per comprare il biglietto è ${priceMinors} €`);
            price.innerHTML = priceMinors + "€"
            offer.innerHTML = "Biglietto Minorenni"
        } else if (age === "over65") {
            console.log(`Il prezzo Totale per comprare il biglietto è ${priceOver65} €`);
            price.innerHTML = priceOver65 + "€"
            offer.innerHTML = "Biglietto Over65"
        } else {
            console.log(`Il prezzo Totale per comprare il biglietto è ${priceStandard} €`);
            price.innerHTML = priceStandard + "€"
            offer.innerHTML = "Biglietto Standard"
        }
    }
});

elBtnCancel.addEventListener("click", function () {
    window.location.reload();
})

