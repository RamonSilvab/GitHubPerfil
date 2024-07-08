import { useState, useEffect } from "react";

const Formulario = () => {
    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);
    const [nome, setNome] = useState('');

    

    useEffect(() => {
        console.log('o componente iniciou');

        return () => {
            console.log('o componente finalizaou');
        }
    }, [])

    useEffect(() => {
        console.log('o estado nome mudou');
    }, [nome])

    useEffect(() => {
        console.log(`matéria A mudou para ${materiaA}`);
    }, [materiaA, materiaC, materiaB])

    const alteraNome = (evento) => {
        setNome(estadoAnterior => {

            return evento.target.value;
        })
    }

    const renderizaResultado = () => {
        const media = (materiaA + materiaB + materiaC) / 3;

        if (media >= 7) {
            return (
                <p>Olá {nome}, você foi aprovado</p>
            )
        } else {
            return (
                <p>Olá {nome}, você foi não aprovado</p>
            )
        }
    }

    return (
        <form>
            <ul>
                {[1,2,3,4,5].map(item => (
                    <li key={item}> {item} </li>
                ))}
            </ul>
            <input type="text"  placeholder="Seu nome" onChange={alteraNome} />
            <input type="number" placeholder="Nota matéria A" onChange={({target}) => setMateriaA(parseInt(target.value))} /> {/*desestruturação do evento*/}
            <input type="number" placeholder="Nota matéria B" onChange={evento => setMateriaB(parseInt(evento.target.value))} />
            <input type="number" placeholder="Nota matéria C" onChange={evento => setMateriaC(parseInt(evento.target.value))} />
            {renderizaResultado()}
        </form>
    )
}

export default Formulario;