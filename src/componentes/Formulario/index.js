import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = () => {

    const times = [
        'Soldado',
        'Cabo'
    ]

    return (
        <section className="formulario">
            <form>
                <h2>Preencha o formulário para entrar para o clã DK</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome" />
                <CampoTexto label="Email" placeholder="Digite seu Email" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da sua imagem" />
                <ListaSuspensa label="Patente" itens={times}/>
            </form>
        </section>
    )
}

export default Formulario