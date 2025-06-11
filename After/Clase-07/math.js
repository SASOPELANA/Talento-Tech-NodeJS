// para exportar o importar la función debe tener un nombre o debe ser una función flecha con la constante adelante

const datos = [];

/* 
   export default (a,b) => {
      return a + b
   }
 */

export default function sumar(a, b) {
  return a + b;
}

export const restar = (a, b) => a - b;
