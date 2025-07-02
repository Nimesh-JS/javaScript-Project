function calculateBMI(){
    const height = parseFloat(document.getElementById('height').value/100)
    const weight = parseFloat(document.getElementById('weight').value)
    if(!height || !weight || height <= 0){
        document.getElementById('result').textContent = "Please entre a corret height and weight"   
    }

   const bmi = weight / (height * height)
    let category = ""

    if(bmi < 18.0){
        category = "underWeight"
    }else if(bmi < 24.5){
        category = "normalWeight"
    }else if(bmi < 29.4){
        category = "overWeight"
    }else if(bmi < 30){
        category = "obese"
    }
    document.getElementById('result').textContent = `Your BMI is ${bmi.toFixed(2)} ${category}`
}