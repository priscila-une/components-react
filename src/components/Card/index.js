import Button from '../Button';
import { useState } from 'react';

const Card = () => {

    const [valor , setValor] = useState(0);
    
    function Adicionar(){
        setValor(valor + 1)
    }
    
    function Remover(){
        setValor(valor - 1)
    }
    
    return (
        <div className="card mt-5">
            <div className="card-header">
                 Pequeno Contador
            </div>
        <div className="card-body">
    
            <p>Contador: <span>{valor}</span></p>
            <Button 
            className="btn btn-success m-2"
            onClick={Adicionar}>
                Adicionar
            </Button>
            <Button 
            className="btn btn-danger"
            onClick={Remover}>
                Remover
            </Button>
        </div>
        </div>
    )
}

export default Card;