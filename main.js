//Entradas
const number1 = document.getElementById('num1')
const number2 = document.getElementById('num2')
const number3 = document.getElementById('num3')
const number4 = document.getElementById('num4')
//Boton
const calcular = document.getElementById('calcular')
//Salidas
const status = document.getElementById('marcador')
const historial = document.getElementById('results')
//Variables
const cadenaUsuario = []
const cadenaMaquina = []
var flag = true
var numeros = []
var picas = []
var fijas = []
//Número ALeatorio
numeroAleatorios()


calcular.addEventListener('click',()=>{
    flag = true
    cadenaUsuario[0] = number1.value
    cadenaUsuario[1] = number2.value
    cadenaUsuario[2] = number3.value
    cadenaUsuario[3] = number4.value
    if((cadenaUsuario[0] > 9 || cadenaUsuario[0] < 0) || (cadenaUsuario[1] > 9 || cadenaUsuario[1] < 0) || (cadenaUsuario[2] > 9 || cadenaUsuario[2] < 0) || (cadenaUsuario[3] > 9 || cadenaUsuario[3] < 0)){
        alert('Error: Los 4 números no pueden ser mayor a 9 ni menor a 0.')
    }else{
        for(i=0;i<4;i++){
            for(j=0;j<4;j++){
                if(i==j){
                    continue
                }else{
                    if(cadenaUsuario[i] == cadenaUsuario[j]){
                        alert('Error: Ningún número puede ser igual.')
                        flag = false
                        break
                    }
                }
            }
        }
    }
    if(flag == true){
        numeros.push((number1.value)+(number2.value)+(number3.value)+(number4.value))
        numeroPicas()
        numeroFijas()
    } 
})

function numeroAleatorios(){
    while(cadenaMaquina[0] == cadenaMaquina[1] || cadenaMaquina[0] == cadenaMaquina[2] || cadenaMaquina[0] == cadenaMaquina[3] || cadenaMaquina[1] == cadenaMaquina[2] || cadenaMaquina[1] == cadenaMaquina[3] || cadenaMaquina[2] == cadenaMaquina[3]){
        cadenaMaquina[0] = Math.floor(Math.random()*(10-1)+1)
        cadenaMaquina[1] = Math.floor(Math.random()*(10-1)+1)
        cadenaMaquina[2] = Math.floor(Math.random()*(10-1)+1)
        cadenaMaquina[3] = Math.floor(Math.random()*(10-1)+1)
    } 
}

function numeroPicas(){

}

function numeroFijas(){
    let numFijas = 0
}