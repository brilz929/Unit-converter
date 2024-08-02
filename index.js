const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const resetBtn = document.getElementById("reset-btn")
const lengthEl = document.getElementById("length")
const volumeEl = document.getElementById("volume")
const massEl = document.getElementById("mass")

//conversions: //
const conversionRates = {
    meterToFeet: 3.281,
    feetToMeter: 0.304,
    literToGallon: 0.264,
    gallonToLiter: 3.785,
    kiloToPound: 2.204,
    poundToKilo: 0.454
};

inputBtn.addEventListener("click", function() {
    const inputNumber = inputEl.value
    if (isNaN(inputNumber)) {
        alert("Please enter a valid number")
    }
    else if (inputNumber <= 1) {
        lengthEl.textContent = `${inputNumber} meter = ${(inputNumber * 3.281).toFixed(3)} feet | ${inputNumber} foot = ${(inputNumber * 0.304).toFixed(3)} meters`
        volumeEl.textContent = `${inputNumber} liter = ${(inputNumber * 0.264).toFixed(3)} gallon | ${inputNumber} gallon = ${(inputNumber * 3.785).toFixed(3)} liters`
        massEl.textContent = `${inputNumber} kilogram = ${(inputNumber * 2.204).toFixed(3)} pounds | ${inputNumber} pound = ${(inputNumber * 0.454).toFixed(3)} kilograms`
    } else {
    updateConversion(inputNumber, lengthEl, 'meters', 'feet', conversionRates.meterToFeet, conversionRates.feetToMeter)
    updateConversion(inputNumber, volumeEl, 'liters', 'gallons', conversionRates.literToGallon, conversionRates.gallonToLiter)
    updateConversion(inputNumber, massEl, 'kilograms', 'pounds', conversionRates.kiloToPound, conversionRates.poundToKilo)
    }
})

function updateConversion(input, element, unit1, unit2, rate1, rate2) {
    const unit1Text = unit1 
    const unit2Text = unit2
    element.textContent = `${input} ${unit1Text} = ${(input * rate1).toFixed(3)} ${unit2Text} | ${input} ${unit2Text} = ${(input * rate2).toFixed(3)} ${unit1Text}`
}

resetBtn.addEventListener("click", function() {
    lengthEl.textContent = ""
    volumeEl.textContent = ""
    massEl.textContent = ""
    inputEl.value = ""
})


//

//inputBtn.addEventListener("click", function() {
   // let numbers = inputEl.value
    //if (numbers <= 1) {
        //length.textContent = `${numbers} meter = ${numbers * meterToFeet.toFixed(3)} foot | ${numbers} foot = ${numbers * feetToMeter.toFixed(3)} meter`
       // volume.textContent = `${numbers} liter = ${numbers * literToGallon.toFixed(3)} gallon | ${numbers} gallon = ${numbers * gallonToLiter.toFixed(3)} liter`
       // mass.textContent = `${numbers} kilogram = ${numbers * kiloToPound.toFixed(3)} pound | ${numbers} pound = ${numbers * poundtoKilo.toFixed(3)} kilogram`
     
    //} else {
        //length.textContent = `${numbers} meters = ${numbers * meterToFeet.toFixed(3)} feet | ${numbers} feet = ${numbers * feetToMeter.toFixed(3)} meters`
      //  volume.textContent = `${numbers} liters = ${numbers * literToGallon.toFixed(3)} gallons | ${numbers} gallons = ${numbers * gallonToLiter.toFixed(3)} liters`
      //  mass.textContent = `${numbers} kilograms = ${numbers * kiloToPound.toFixed(3)} pounds | ${numbers} pounds = ${numbers * poundtoKilo.toFixed(3)} kilograms`
    //}
//})
