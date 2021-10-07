import Cookie from 'js-cookie'
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Container } from './styled'

export default function Detalhes(props){
    // const produto vai guardar o produto que eu cliquei, não todos os produtos q voltaram da minha api
const [produto,SetProduto] = useState(props.location.state);
const navigation = useHistory();

// Se tiver alguma coisa no meu carrinho, vou converter para JSON, para que eu possa usar os seus valores. Preciso fazer esta conversão pois os cookies retornam sempre uma string
function Comprar(){

    let carrinho = Cookie.get('carrinho');
    carrinho = carrinho !== undefined
            ? JSON.parse(carrinho)
            : []

            //Se existir algum item dentro da minha variável que o seu id seja diferente do produto que eu cliquei, vou add ele no meu carrinho
    if(carrinho.some(item => item.id === produto.id) === false)
      carrinho.push({...produto, qtd:1})


      Cookie.set('carrinho', JSON.stringify(carrinho));


      navigation.push('/carrinho')

}

    return (
    <Container>

        <div>
          <Link to="/"> Voltar </Link>
          <h1> Detalhes do Produto </h1>
          <br /> <br />

          <div> <img src={produto.imagem} alt="" /> </div>
          <div> <h1> {produto.titulo} </h1> </div>
          <div> <h3> {produto.preco} </h3> </div>
        </div>

        <div>
          <h2> Descrição </h2>
          <div> {produto.descricao} </div>

          <h2> Especificações </h2>
          <div> {produto.especificacoes} </div>

          <div> <button onClick={Comprar}> Comprar </button> </div>
        </div>

    </Container>
  )



  
}