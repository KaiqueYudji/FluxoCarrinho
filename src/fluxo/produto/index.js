import { Container } from './styled';
import { Link } from 'react-router-dom';

export default function Produto(props){
    // button Saiba mais tá mandando o props do objeto que ele recebeu.
    return(
       
        <Container>
            <img className="capa" src={props.info.imagem} alt=""/>
            <div className="titulo">{props.info.titulo}</div>
            <div className="preco">{props.info.preco}</div>  

            <Link to={{
                pathname:"/detalhe",
                state:props.info
            }}>
                
                <button> Saiba mais</button>
                
                 </Link>
        </Container>
     
    )
}