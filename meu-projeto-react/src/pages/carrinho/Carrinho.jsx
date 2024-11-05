import React, { useContext, useEffect } from 'react';
import { carrinhoContext } from '../../context/carrinhocontext';
import Styles from '../carrinho/Carrinho.module.css';

export function Carrinho() {
  const {
    itensCarrinho,
    valorTotal,
    adicionarItens,
    removerItem,
    limparCarrinho,
    calcularValorTotal,
  } = useContext(carrinhoContext);

  useEffect(() => {
    calcularValorTotal();
  }, [itensCarrinho, calcularValorTotal]);

  return (
    <div className={Styles.fundo}>
    <div className={Styles.carrinhoContainer}>
      <h1>Carrinho de Compras</h1>

      {itensCarrinho.length === 0 ? (
        <p className={Styles.emptyMessage}>Seu carrinho está vazio.</p>
      ) : (
        <div className={Styles.itensLista}>
          {itensCarrinho.map((item) => (
            <div key={item.id} className={Styles.item}>
              <span className={Styles.nome}>{item.nome}</span>
              <span className={Styles.quantidade}>Quantidade: {item.quantidade}</span>
              <span className={Styles.preco}>Preço: R${item.preco}</span>
              <span className={Styles.subtotal}>
                Subtotal: R${(item.quantidade * item.preco)}
              </span>
              <div className={Styles.Botoes}>
              <button onClick={() => adicionarItens(item)}>
                <button /> Adicionar
              </button>
              <button onClick={() => removerItem(item.id)}>
                <button /> Remover
              </button>
              </div>
            </div>
          ))}
          <div className={Styles.total}>
            <strong>Total: R${valorTotal}</strong>
          </div>
          <button onClick={limparCarrinho} className={Styles.clearButton}>
            Limpar Carrinho
          </button>
        </div>
        
      )}
    </div>
    </div>
  );
}

export default Carrinho;
