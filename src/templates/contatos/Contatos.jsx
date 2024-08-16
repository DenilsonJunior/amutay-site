import { ContainerContatos } from './styles.js';

function Contatos() {

    return (
        <ContainerContatos className='max-conteudo'>
            <div className='redes'>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                    <img src="./assets/img/ico-mail.png" alt="" />
                </a>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                    <img src="./assets/img/ico-linkdin.png" alt="" />
                </a>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                    <img src="./assets/img/ico-whats.png" alt="" />
                </a>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                    <img src="./assets/img/ico-insta.png" alt="" />
                </a>
            </div>
            <p>Rua Nascimento Silva, 107 - Rio de JAneiro / RJ</p>
            <p>Telefone: (21) 99999-9999 ! amutay@amutay.com.br</p>
        </ContainerContatos>
    );
}

export default Contatos;
