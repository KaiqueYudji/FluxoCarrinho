import { Link } from "react-router-dom";
import { Container } from './styled'
import { useEffect, useState } from "react"

import Cookie from 'js-cookie'
import CarrinhoItem from './carrinhoItem'


export default function Carrinho(){
    const [produtos, SetProdutos] = useState([]);

    useEffect(CarregarCarrinho,[]);

    function CarregarCarrinho(){
        let carrinho = Cookie.get('carrinho');
        carrinho = carrinho !== undefined
                ? JSON.parse(carrinho)
                : []
        SetProdutos(carrinho)
    }

    function RemoverProduto(id){
       // vai filtarr todos os itens que eu tenho dentro do meu carrinho,
       // fiçtrando os itesn do meu carrinho que tyem o id diferente do que o que eu passei pra função(do item que eu cliquei em remover), removendo o item que eu passei como parâmetro
        let carrinho = produtos.filter(item => item.id !== id )
        // quando eu atualizo o meu cookie, tirando o item que foi filtrado
        Cookie.set('carrinho', JSON.stringify(carrinho))

           // Estou passando pra variavel produto o cookie atualizado(filtrado)
            SetProdutos([...carrinho])
    }

    function AlterarProduto(id,qtd){
        // estou filtrando todos os itens do meu carrinho que o seu id seja igual o id do produto q estou alterando a qtd, o que retornar será o item q estou alterando
        let produtoAlterado = produtos.filter(item => item.id === id)[0]
        produtoAlterado.qtd = qtd

        Cookie.set('carrinho', JSON.stringify(produtos))
    }



    
    return(
        <Container>
        <h1> Carrinho </h1>
  
        <Link to="/"> Voltar </Link>
        <div className="itens">
        {produtos.map(item => 
            <CarrinhoItem key={item.id} 
                info={item} 
                onUpdate={AlterarProduto} 
                onRemove={RemoverProduto} />
        )}
        </div>
 
     </Container>
   )
 
}