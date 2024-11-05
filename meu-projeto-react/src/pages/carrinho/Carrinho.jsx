import React, { useContext, useEffect } from 'react';
import { carrinhoContext } from '../../context/carrinhocontext';
import styles from './carrinho.module.css';

function Carrinho() {
  const {
    itensCarrinho,
    valorTotal,
    adicionarItens,
    removerItem,
    limparCarrinho,
    calcularValorTotal,
  } = useContext(carrinhoContext);

  // Recalcula o valor total quando o carrinho é atualizado
  useEffect(() => {
    calcularValorTotal();
  }, [itensCarrinho, calcularValorTotal]);

  return (
    <div className={styles.carrinhoContainer}>
      <h1>Carrinho de Compras</h1>

      {itensCarrinho.length === 0 ? (
        <p className={styles.emptyMessage}>Seu carrinho está vazio.</p>
      ) : (
        <div className={styles.itensLista}>
          {itensCarrinho.map((item) => (
            <div key={item.id} className={styles.item}>
              <span className={styles.nome}>{item.nome}</span>
              <span className={styles.quantidade}>Quantidade: {item.quantidade}</span>
              <span className={styles.preco}>Preço: R${item.preco.toFixed(2)}</span>
              <span className={styles.subtotal}>Subtotal: R${(item.quantidade * item.preco).toFixed(2)}</span>
              <button onClick={() => adicionarItens(item)}>Adicionar</button>
              <button onClick={() => removerItem(item.id)}>Remover</button>
            </div>
          ))}
          <div className={styles.total}>
            <strong>Total: R${valorTotal.toFixed(2)}</strong>
          </div>
          <button onClick={limparCarrinho} className={styles.clearButton}>
            Limpar Carrinho
          </button>
        </div>
      )}
    </div>
  );
}

export default Carrinho;
