//llamar al id matrix y decirle que use 2 dimenciones

let elemento = document.getElementById('letras')
let ctx = elemento.getContext('2d')

//

let width = document.body.clientWidth

let height = document.body.clientHeight

elemento.width = width
elemento.height = height


//crear una variable e igualarla a un Array  de 300 caracteres, unirlos con join parametro cero y con una separacion vacia 

let position = Array(300).join(0).split('')


// funcion 

function initial_matrix() {  
    ctx.fillStyle = 'rgba(50, 30, 1, 0.09)'
	ctx.fillRect(0, 0, width, height)
	ctx.fillStyle = '#37cc05'
    ctx.Font = '11pt arial'


    
    position.map(function(y, index) {
        let text = String.fromCharCode(1e2 + Math.random() * 30)
        let x = (index * 20) + 15

        letras.getContext('2d').fillText(text, x, y)

        if(y > 100 + Math.random() * 1e5){
            position[index] = 0
        }else{
            position[index] = y + 15
        }
    })
}

setInterval(initial_matrix, 50)