//permite capturae eventis,SOLO SI HAY SCRIPT EN EL head si esta en el body no
//document.addEventListener('DOMContentLoaded',()=>){
//codigo

//acceder al primer nodo,va a traer el valor que esta en ''
const titulo = document.getElementById('titulo-principal');
//para reemplazar en la edicion
titulo.textContent = "holiwis"
const sumar = (num1, num2) => {
    alert(num1 + num2);
}
//formulario
const form = document.forms['sumarForm'];
form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const num1 = Number(form['num-1'].value)
    const num2 = Number(form['num-2'].value)
    //lo del boton
    const modal = document.getElementById('error-msg');
    if (num1 > 0 & num2 > 0) {
        modal.classList.remove('show')
        realizarSuma(num1, num2);
        form.reset();
    } else {
        modal.classList.add('show');
    }
    //alert(num1+num2);

});
//historial
const realizarSuma = (num1, num2) => {
    const result = num1 + num2;//operacion
    const historial = document.getElementById('historial');//captura el historial
    const div = document.createElement('div');//selecciona el div
    div.textContent = `${num1} + ${num2} =`;
    const strong = document.createElement('strong');
    strong.textContent = result;
    div.appendChild(strong);
    historial.appendChild(div);
}
