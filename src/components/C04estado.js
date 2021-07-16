import React, {useState} from 'react';

const EjemploDeEstado = () => {
    //"numero"  nombre del estado y puede iniciar como numero,
    //boleano, objeto, matriz, etc.
    //"setNumero" es el modificador de estado "numero"

    const [numero, setNumero] = useState(0);

    //Definiendo función flecha que incrementa un valor
    const aumentar = () =>{
        console.log("Hacer clic");
        setNumero(numero + 1);
    }

    //Dentro de HTML, se da lectura en llaves a las variables
    //Se puede devolver sólo UN elemento..., caso contrario
    //Se puede usar <Fragment> ó <div>
    //En el evento onclick se llama a la función flecha entre llaves
    return(
        <div style={{backgroundColor:'yellowgreen'}}>
            <h4>Componente 4. Ejemplo con definición de estado</h4>

            <h3>Muestra incremento de valor... {numero} </h3>

            <button onClick={aumentar} >Aumentar en 1</button>

            <hr/>
        </div>
    );
}
export default EjemploDeEstado;