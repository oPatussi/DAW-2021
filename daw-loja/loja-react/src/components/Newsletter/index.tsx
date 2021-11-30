import './style.css'

export function Newsletter(){
    return(
        <div className="newsletter">
          <div className="container">
            <h2>Newsletter</h2>
            <p className="fw-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <form>
              <input type="text" className="form-control form-control-lg" placeholder="INFORME O SEU EMAIL" />
              <button className="btn btn-primary btn-lg">Inscreva-se</button>
            </form>
          </div>

        </div>
    )

}