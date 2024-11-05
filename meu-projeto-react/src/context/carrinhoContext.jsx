import { createContext, useState } from "react";

const carrinhoContext = createContext();

const CarrinhoProvider = (props) => {

    const [itensCarrinho, setItensCarrinho] = useState([]);
    const [valorTotal, setValorTotal] = useState(0);

    function adicionarItens(novoItem) {
        const produtoExistente = itensCarrinho.find(produto => produto.id === novoItem.id);
        let novosItens;
        
        if (produtoExistente) {
            novosItens = itensCarrinho.map(item => {
                if (item.id === novoItem.id) {
                    return { ...item, quantidade: item.quantidade + 1 };
                }
                return item;
            });
        } else {
            novosItens = [...itensCarrinho, { ...novoItem, quantidade: 1 }];
        }
        
        setItensCarrinho(novosItens);
    }


    function removerItem(id) {
        const novosItens = itensCarrinho.map(item => {
            if (item.id === id) {
                return { ...item, quantidade: item.quantidade - 1 };
            }
            return item;
        }).filter(item => item.quantidade > 0); // Remove itens com quantidade zero
    
        setItensCarrinho(novosItens);
    }

    function limparCarrinho(){
        setItensCarrinho([]);
    }

    function calcularValorTotal(){
        let total = 0;
        itensCarrinho.forEach((item)=>{
            total += item.quantidade * item.preco;
        });

        setValorTotal(total)
    }

    return(
        <carrinhoContext.Provider
                value={{
                    itensCarrinho,
                    valorTotal,
                    adicionarItens,
                    removerItem,
                    limparCarrinho,
                    calcularValorTotal,
                }}
        >
            {props.children}
        </carrinhoContext.Provider>
    );
};

export {carrinhoContext, CarrinhoProvider}
