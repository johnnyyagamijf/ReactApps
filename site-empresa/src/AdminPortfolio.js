import React, { Component } from 'react'

import config from './firebase-config'


class AdminPortfolio extends Component {
    constructor(props) {
        super(props)
    }
    cadastrarPortfolio(portifolio) {
        config.push(portifolio).then().catch()
    }
    render() {
        return (
            <div className='container'>
                <form>
                    <div className="form-group">
                        <label Htmlfor="nome">Informe o nome</label>
                        <input type="nome" className="form-control" id="nome" aria-describedby="emailHelp" placeholder="Nome" />
                        <small id="nome" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label Htmlfor="exampleInputPassword1">Informe a descrição</label>
                        <input type="text" className="form-control" id="descricao" placeholder="Descrição" />
                    </div>
                    <div className="input-group mb-3">
                        <div className="custom-file">
                            <input type="file" className="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01" />
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default AdminPortfolio