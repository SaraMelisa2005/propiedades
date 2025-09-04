//variable
const from = document.forms['multiplicarFrom'];
const result = document.getElementById('resultado');
localStorage.setItem('nameApp','Ejemplo de almacenamiento');
console.log(localStorage.getItem('nameApp'));
sessionStorage.setItem('sesion1','prueba');
console.log(localStorage.key(0));
console.log(JSON.parse('{"nombre": "pepe"}'));
//metodos
const multiplicar = (factorA, factorB) => {
    return factorA * factorB
};
const showResult = (num) => {
    result.textContent=`el resultado es ${num}`;
};
const savelog=(datos)=>{
 const log ={
    fecha :new Date(),
    operacion:datos,
 };
  const num=localStorage.length;
  const key =`operacion_${num+1}`;
  localStorage.setItem(key,JSON.stringify(log));
};
//eventos
from.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const factorA = from['factor1'].value;
    const factorB = from['factor2'].value;
    const res = multiplicar(Number(factorA), Number(factorB));
    showResult(res);
       const datos ={
        factorA,factorB,resultado:res
       };
       savelog(datos);
    from.reset(); 
});