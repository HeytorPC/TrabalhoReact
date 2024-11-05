import { useNavigate } from "react-router-dom";
import Styles from './NotFound.module.css';
import { Botao } from "../../components/Botao/Botao";

export function NotFound() {
  const navigate = useNavigate(); 

  const handleNavigation = (path) => navigate(path);

  return (
    <>
    <div className={Styles.containerPrincipal }>
      <div className={Styles.container}>
        <div className={Styles.MensagemDeErro}>
          <h1>Error 404: Not Found</h1>
        </div>
      </div>
      <div className={Styles.voltar}>
      <Botao onClick={() => handleNavigation('/principal')}>Voltar a página Inicial</Botao>
      </div>
      </div>
    </>
  );
}
