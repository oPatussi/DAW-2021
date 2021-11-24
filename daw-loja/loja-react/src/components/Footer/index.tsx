import './style.css';

export function Footer(){
    return(
        <footer>
        <div className="container row">
          <div className="col">
            <h5>Contato</h5>
            <ul>
              <li>+55 46 9999-9999</li>
              <li>Rua Mato Grosso, 200</li>
              <li>Pato Branco - PR</li>
            </ul>
          </div>

          <div className="col">
            <h5>Institucional</h5>
            <ul>
              <li><a href="#">Quem somos</a></li>
              <li><a href="#">Nossas lojas</a></li>
              <li><a href="#">Trabalham conosco</a></li>
              <li><a href="#">Parceiros e Fornecedores</a></li>
            </ul>
          </div>

          <div className="col">
            <h5>Atendimento</h5>
            <ul>
              <li><a href="#">Atendimento</a></li>
              <li><a href="#">Meus pedidos</a></li>
              <li><a href="#">Devoluções</a></li>
              <li><a href="#">Assistencia Técnica</a></li>
              <li><a href="#">Política de privacidade</a></li>
            </ul>
          </div>

        </div>
      </footer>
    )
}