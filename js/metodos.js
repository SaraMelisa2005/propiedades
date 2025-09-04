//forma 1 retorna
function multiplicar(num1,num2){
return num1*num2;
}
//invocacion:
console.log(multiplicar(2,3));
// no retorna
function suma (num1,num2){
    console.log(num1+num2);
}
suma (2, 5);
//forma 2 funciones anonimas:asignan ataves de variables
const sumar =function(num1,num2){
    return num1+num2;

}
//invocacion:
console.log(sumar(2,8));
//forma 3-recomendada
//retorna
const dividir=(num1, num2)=>{
return num1/num2;
};
//invocacion:
console.log(dividir(4,2));
//si el bloque es de una sola linea asi como el anterior 
const dividirDos =(num1,num2)=>num1/num2;
//invocacion:
console.log(dividirDos(8,2));

//para parametros opcionales o por defecto
const sumarDos=(num1,num2=10)=>{
    return num1+num2;

}
console.log(sumarDos(2));
console.log(sumarDos(2,8));//si se hace esto se queda con este 

//muchos parametros
console.log('ok',1,true,[],{},'pl',23);
const sumarTres=(...args)=>{
    let resl=0;
    for (let num of args){
        resl +=num;

    }return resl;};

console.log (sumarTres());
console.log (sumarTres(2));
console.log (sumarTres(2,3));
console.log (sumarTres(4,5,6));
console.log (sumarTres(4,5,6,7));
console.log (sumarTres(4,5,'a',true));
//coldbag
//definicion
const operaciones =(ejecutar)=>{
    return ejecutar();
}
//comportamiento
//metodo anomino
console.log(operaciones(() => 2+8));
//otro metodo
console.log(operacines (()=>{
return 5+6;
}));
//otrometodo
console.log(operaciones(function(){
    return 9/3;
}));
console.log(operaciones(()=>sumarTres(5,9,7)));
//definir una clase no se va a usar en la materia
class persona {
    constructor(nombre,edad){
        this.nombre=nombre;
        this.edad=edad;
    }
    toString(){
        return `${this.nombre}${this.edad}`;
    }
}
