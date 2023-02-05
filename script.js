const error1 = document.querySelector('.input span');
const error2 = document.querySelector('.input2 span');
const button1 = document.querySelector('.mail button');
const button2 = document.querySelector('.early-access button');
const input1 = document.querySelector('.mail input');
const input2 = document.querySelector('.early-access input');
error1.style.display = 'none';
error2.style.display = 'none';
const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1-3}\.[0-9]{1-3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

button1.addEventListener('click',()=>{
    if(re.test(input1.value)){
        error1.style.display = 'none';
    }else{
        error1.style.display = 'block';
    }

})

button2.addEventListener('click', ()=>{

        if(re.test(input2.value)){
        error2.style.display = 'none';
    }else{
        error2.style.display = 'block';
    }
})