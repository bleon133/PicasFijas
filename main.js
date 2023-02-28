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
var flag2 = false
var flag3 = false
var turnos = []
var numIntentos = 0
//Número ALeatorio
numeroAleatorios()


calcular.addEventListener('click',()=>{
    if(flag3 == false){
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
            
            //Numero Usuario
            var numeroUsuario = '' 
            numeroUsuario = ((number1.value)+(number2.value)+(number3.value)+(number4.value))
            //Picas
            let numPicas = 0
            for(i=0; i<4; i++){
                for(j=0; j<4; j++){
                    if(cadenaUsuario[i] == cadenaMaquina[j]){
                        numPicas += 1
                    }
                }
            }
            //Fijas
            let numFijas = 0
            if(cadenaUsuario[0] == cadenaMaquina[0]){
                numFijas += 1   
            }
            if(cadenaUsuario[1] == cadenaMaquina[1]){
                numFijas += 1
            }
            if(cadenaUsuario[2] == cadenaMaquina[2]){
                numFijas += 1
            }
            if(cadenaUsuario[3] == cadenaMaquina[3]){
                numFijas += 1
            }
            if(numFijas == 4){
                flag2 = true
            }
            //Almacenar turno
            turnos.push({numero:parseInt(`${numeroUsuario}`), picas:parseInt(`${numPicas}`), fijas:parseInt(`${numFijas}`)})
            //Limpiador
            number1.value = ''
            number2.value = ''
            number3.value = ''
            number4.value = ''
            //Numero de Intentos
            numIntentos += 1
            //Imprimir
            pantallas()
        }
    }else{
        alert('Error: ¡Ganaste!, para volver a jugar recarga la página')
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

function pantallas(){
    let contenedor1 = ``
    //Ganador - Perdedor
    if(flag2 == true){
        contenedor1 = `Intentos: ${numIntentos} - Estado: ¡Ganaste!`
        flag3 = true
    }else{
        contenedor1 = `Intentos: ${numIntentos} - Estado: Sigue Intentando`
    }
    status.innerHTML=contenedor1
    let contenedor2 = `<table><th>Números</th><th>Picas</th><th>Fijas</th>`
    turnos.forEach(intento => {
        contenedor2 += `<tr><td align="center">${intento.numero}</td><td align="center">${intento.picas}</td><td align="center">${intento.fijas}</td></tr>`
    })
    contenedor2 += `</table>`
    historial.innerHTML=contenedor2
}