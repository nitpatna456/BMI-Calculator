const form =document.querySelector('form')
const desp =document.querySelector('.description')
  console.log(desp);
  
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')
    const guide = document.querySelector('#guide')
    if(height===''||height<0||isNaN(height)){
        result.innerHTML = `please enter valid height`
    }else if(weight===''||weight<0||isNaN(weight)){
        result.innerHTML = `please enter valid weight`
    }else{
        const bmi = (weight/((height*height)/10000)).toFixed(1)
        result.innerHTML = `<span>${bmi}</span>`
        if(bmi<18.6){
            guide.innerHTML = "Under weight"
            guide.style.backgroundColor = "yellow"
        
        }else if(bmi>=18.6 && bmi<24.9){
            guide.innerHTML = "Normal range"
             guide.style.backgroundColor = "green"
        }else{
            guide.innerHTML = "Over weight"
             guide.style.backgroundColor = "red"
        }
    }
})