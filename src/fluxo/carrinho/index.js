import { Link } from "react-router-dom";
import { Container } from './styled'
import { useEffect, useState } from "react"

import Cookie from 'js-cookie'
import CarrinhoItem from './carrinhoItem'


export default function Carrinho(){
    const [produtos, SetProdutos] = useState([]);

    function CarregarCarrinho(){
        let carrinho = Cookie.get('carrinho');
        carrinho = carrinho !== undefined
                ? JSON.parse(carrinho)
                : []
        SetProdutos(carrinho)

    }

    useEffect(CarregarCarrinho,[]);

    return(
        <h1>Olá</h1>
    )
}