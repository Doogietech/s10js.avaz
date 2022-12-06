// class Person {
//     constructor(nombre, apellido){
//     this.nombre = nombre;
//     this.apellido =apellido;

// }
// hablar= function(){
//     return this.nombre+ " " + this.apellido;


// }
// get nombre(){
//     return 'Mi nombre es' $(g)  ;

// }

// get nombre(name){
//     return this.nombre+ " " + this.apellido;

// }

// }


// Crear una clase Alumno con los atributos: código, nombre, nota1, nota2 y nota3; y las operaciones: promedio (), condicion () y obsequio (). Para calcular el promedio considere la siguiente fórmula:
// PROM = nota1(15%) + nota2(20%) + nota3(25%) + nota4(40%)
// Para la condición determine si es “Aprobado” o “Desaprobado” (se aprueba con nota mínima 12).
// Todo alumno que apruebe con nota mayor a 17 se le obsequiará una “Mochila”.





class alumno 
{
    
    constructor(codigo,nombre, nota1,nota2,nota3,nota4)
    {
    this.codigo = codigo
    this.nombre = nombre
    this.nota1 = nota1
    this.nota2 = nota2
    this.nota3 = nota3
    this.nota4 = nota4
    

    }
    promedio(){
                    return this.nota1*0.15 + this.nota2*0.2 + this.nota3*0.25 + this.nota4*0.4
    }   

    condicion(){
     if (this.promedio()>=12)
     {
    return "Aprobaste"

     }else{
    return"Desaprobaste"
        }
    }

    regalo(){

        if(this.promedio()>17){
    return "regalo una manzana"
                        }
        else{
            return"Falta poco para que llegues a los 17"
            }
    }
}    
const alumno1= new alumno(01, `Ricardo`,20,20,20,18)

console.log(`${alumno1.nombre} tienes de promedio ${alumno1.promedio()} su condicion es ${alumno1.condicion()} y ${alumno1.regalo()} `);
