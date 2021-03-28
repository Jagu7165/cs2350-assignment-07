// Required by Webpack - do not touch
require.context('../', true, /\.(html|json|txt|dat)$/i)
require.context('../images/', true, /\.(gif|jpg|png|svg|eot|ttf|woff|woff2)$/i)
require.context('../stylesheets/', true, /\.(css|scss)$/i)

import 'bootstrap'

// JavaScript

//TODO

function render(){
    let c = document.querySelector('canvas')
    if (c.getContext){
        let ctx= c.getContext('2d')
        ctx.clearRect(0, 0, 600, 500)
        ctx.fillStyle='lightgrey'
        ctx.fillRect(5, 5, 590, 490)
        ctx.fillStyle = 'black'
        for (var i = 0; i < 27 ; i++) {
            ctx.fillRect(35 + i * 20, 40, 6, 6)
          }
        for (var i = 0; i < 27 ; i++) {
            ctx.strokeRect(35 + i * 20, 455, 6, 6)
        }
        ctx.fillStyle=document.getElementById('c').value
        ctx.beginPath()
        ctx.arc(document.getElementById('x').value, 250, 175, 0, Math.PI * 2, true)
        ctx.fill();
        ctx.fillStyle='green'
        ctx.fillRect(35, 50, 80, 400)
        ctx.fillRect(485, 50, 80, 400)


    }
}

document.body.onload = render
document.getElementById('x').onchange = render
document.getElementById('c').onchange = render