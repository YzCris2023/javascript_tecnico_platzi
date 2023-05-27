//console.log('Hola mundo')
//seleccionar etiquetas igual que en css
const h1= document.querySelector('h1');
const p= document.querySelector('.parrafito');
const pid= document.querySelector('#pid');
input=document.querySelector('input');

console.log({
    h1,p,pid
});

//modificar html 
h1.innerText='Patito <br> Feo';
//es menos seguro porque puede dar lugar
//a taques
h1.innerHTML='Patito <br> Feo';
//lee los atributos, o clases 
h1.getAttribute('');

//modificar los atributos 
h1.setAttribute('class','rojo');
//agregarle una clase
h1.classList.add('rojo');
// eliminar la clase que indiquemos
h1.classList.remove('verde');
//odificar el valor del input

input.value='456'

//crear el html que queramos
const img=document.createElement('img');

img.setAttribute('src','https://i.blogs.es/ceda9c/dalle/1366_2000.jpg');
//meter la imagen en un div o algo
 pid.append(img)