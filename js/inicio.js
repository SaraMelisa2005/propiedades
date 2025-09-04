console.log('hola desde java script');
//console.error('ok 2 formato error se usa para identificar los errores en consola');
/**variables:var:la mas antigua  let const:modernas*/
let nombre="pepe";
let apellido ="perez";
let p ='1234';
//forma 1 y mehor para concatenar
const nombrecompleto= `${nombre} ${apellido}`;//ojo con el const siempre va a ser constante con let si se puede
//forma 2 
//nombrecompleto=nombre +''+apellido;
//console.log(p) esto da error
alert(nombrecompleto);//ventanas 
let edad =25;//number
let salario =25.5 //numbrer o float
let mayorEdad =true;//Boolean
let a =null;//nula
let b =undefined;//variable no tiene valor exacto
console.log(apellido)
//array
let numeros=[];//forma 1 array vacio
numero =new Array(12);//forma 2 vacio pero se le asigna cantidad de elementos 
numeros=[1,2,3,4,5,6,7,8,9,0];//forma 3 con los elementos del array
let otro=['ashsh',12,12.5,true,[1,2,3]];//array con muchos tipos
//objetos
let persona ={
    nombre:nombrecompleto,
    apellido:'gomez',
    edad:30,
    mayorEdad:true,
    jobs:[]

};
//manejo de array
console.log (numeros[1])//posicion del elemento
//manejo de objetos
console.log(persona.nombre);//como el key 
persona.nombre ='ana maria';
console.log(persona.nombre,persona.apellido)
//ciclos 
console.log('ciclos.............')
console.log('for -----------------')
for(let index=0;index<numeros.length;index ++){
    const mod=numeros[index]%2;
    if(mod ==0){
        console.log(numeros [index],'par');
    }else{
         console.log(numeros [index],'impar');
    }
}
console.log('for in- no se ve la posicion----------------');
for (let index in numeros){
     const mod=numeros[index]%2;
    if(mod ==0){
        console.log(numeros [index],'par');
    }else{
         console.log(numeros [index],'impar');
    }
}
console.log('for off- captura el valor----------------');
for (let numero in numeros){
     const mod=numeros %2;
    if(mod ==0){
        console.log(numero,'par');
    }else{
         console.log(numero,'impar');
    }
}
console.log('while----------------');
let index =0;
while(index< numeros.length){
    const mod=numeros[index]%2;
    if(mod ==0){
        console.log(numeros [index],'par');
    }else{
         console.log(numeros [index],'impar');
    }
    index++;
}
console.log(' do while----------------');
index =0;
do{

     const mod=numeros %2;
    if(mod ==0){
        console.log(numero,'par');
    }else{
         console.log(numero,'impar');
    }
    index++;
}while(index< numeros.length);
//valor,posicion
console.log('foreach----------------');
numeros.forEach((val,pos)=>{
console.log(pos,";",val);

});
//estructoras de control ifelse y switch
if(numeros[0]<0){
    //codigo
}else if(numeros[0]<5){
    //codigo
}else{

}
//switch
const categoria ='a';
switch(categoria){
    case 'a':
        //codigo
        break;
    case 'b':
        break;
        default:
            //codigo
        break;
}
