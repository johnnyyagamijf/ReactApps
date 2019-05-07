import React, {Component} from 'react'

class CadastroUsuario extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className='container'>
            <form>
                <div className="form-group">
                    <label Htmlfor="email">Inform o email</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Nome" />
                    <small id="email" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label Htmlfor="exampleInputPassword1">Informe a senha</label>
                    <input type="text" className="form-control" id="senha" placeholder="senha" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
        )
    }
}

export default CadastroUsuario