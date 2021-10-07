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



    
    return(
        <h1>Olá</h1>
    )
}