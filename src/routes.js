import Home from './fluxo/home'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import detalhe from './fluxo/detalhesProduto'
import carrinho from './fluxo/carrinho'

export default function Routes(){
    return(
    <BrowserRouter>
       <Switch>
        <Route path="/" exact={true} component={Home}/>
        <Route path="/detalhe" component={detalhe}/>
        <Route path="/carrinho" component={carrinho}/>
       </Switch>
   </BrowserRouter>
    )
}