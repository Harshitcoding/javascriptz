const form = document.querySelector("form")

form.addEventListener('submit',(e)=>{
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    if(height<0 || height === '' || isNaN(height) ){
        console.log('height is not valid ')
    }else if(weight<0 || weight === '' || isNaN(weight)){
        console.log('weight is not valid')
    }else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)
        results.innerHTML = `${bmi}`
    }
})