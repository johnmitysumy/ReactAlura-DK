import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = () => {

    const times = [
        'Soldado',
        'Cabo'
    ]

    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log('Solicitação enviada')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha o formulário para entrar para o clã DK</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome (identificação)" />
                <CampoTexto obrigatorio={true} label="Email" placeholder="Digite seu Email" />
                <CampoTexto obrigatorio={true} label="Idade" placeholder="Digite a sua idade" />
                <Botao>
                    Enviar Solicitação
                </Botao>
            </form>
        </section>
    )
}

export default Formulario