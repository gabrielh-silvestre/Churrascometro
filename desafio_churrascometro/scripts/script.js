// Carne - 400 gr por pessoa + de 6 horas - 650
// Cerveja - 1200ml por pessoa + de 6 horas - 2000ml
// Refrigerante/agua - 1000ml por pessoa + de 6 horas 1500ml

// crianças valem 0,5 (meio)


var input_adults = document.getElementById("adults");
var input_kids = document.getElementById("childrens");
var input_time = document.getElementById("duration")

function calculation_general() {
    let adults = parseInt(input_adults.value);
    let kids = parseInt(input_kids.value) / 2;
    let time = parseInt(input_time.value);

    let beef = (meat_total(time) * adults) + (meat_total(time) * kids);
    let beer = beer_total(time) * adults;
    let soda = (soda_total(time) * adults) + (soda_total(time) * kids);

    let beef_kg = Math.ceil(beef / 1000);
    let beer_can = Math.ceil(beer / 300);
    let soda_bottle = Math.ceil(soda / 2000);

    document.getElementById("shopping_list").innerHTML = `<li>${beef_kg} Kg de carne</li>`      //beef_kg + " Kg de carne"
    document.getElementById("shopping_list").innerHTML += "<li>" + beer_can + " latas de cerveja</li>"
    document.getElementById("shopping_list").innerHTML += "<li>" + soda_bottle + " garrafas de refrigerante</li>"
    
    return beef_kg
}


function meat_division(kg) {
    let chinken = kg * 0.25; // 25%
    let bull_beaf = kg * 0.5; // 50%
    let pork = kg * 0.25; // 25%

    document.getElementById("division_list").innerHTML = `<li>${chinken} Kg de frango</li>`
    document.getElementById("division_list").innerHTML += `<li>${bull_beaf} Kg de carne bovina</li>`
    document.getElementById("division_list").innerHTML += `<li>${pork} Kg de porco</li>`
}






function meat_total(hour) {
    if (hour >= 6){
        return 650;
    } else {
        return 400;
    }
}

function beer_total(hour) {
    if (hour >= 6){
        return 2000;
    } else {
        return 1200;
    }
}

function soda_total(hour) {
    if (hour >= 6){
        return 1500;
    } else {
        return 1000;
    }
}

