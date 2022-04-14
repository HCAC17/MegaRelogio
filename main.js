var botao = document.getElementById("button");
var paragrafo = document.getElementById("paragrafo");
var seg = 0;
var min = 0;
var minStr = '0'; 
var minuto;
var flag = true

botao.classList.add('start');
botao.innerHTML = 'Start'

function controlarRelogio(){
    if(flag){
        botao.classList.remove('start');
        botao.classList.add("pause");
        botao.innerHTML = 'Pause';
        flag = false;
    }else{
        botao.classList.remove("pause");
        botao.classList.add('start');
        botao.innerHTML = 'Start'
        flag = true
    }
    
    if(!flag){
        var relogio = setInterval(() => {
        
            paragrafo.innerHTML = '';

            minuto = minStr + min
            
            if(seg < 10){
                paragrafo.innerHTML = `${minuto}:0${seg}`;
            }else if(seg < 60){
                paragrafo.innerHTML = `${minuto}:${seg}`;
            }
            
            if(seg === 59 && min < 9){
                min++;
                seg = 0;
            }else if(seg === 59 && min < 59){
                min++;
                minStr = '';
                seg = 0;
            }
            //console.log(flag,minStr,min, seg);
            
            if(flag)
                clearInterval(relogio);

            seg++;
        }, 1000)
       
    }
}

function reset(){
    if(!flag){
        alert("!!!Pause o relógio antes de reiniciar o relógio!!!")
    }else{
        seg = 0;
        minStr = '0'; 
        min = 0;
        paragrafo.innerHTML = '00:00'
    }
}
