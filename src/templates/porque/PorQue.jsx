import { ContainerPorQue } from './styles.js';

function PorQue() {

    return (
        <ContainerPorQue className='max-conteudo'>
            <img className='fumaca' src="./assets/img/fmc2.png" alt="" />

            <h2>Porque Amutay?</h2>
            <video src="" controls poster='./assets/img/video.png'></video>
            <div className="boxText1">
                <p><b>Amutay representa nosso compromisso de construir e compartilhar conhecimento</b></p>
                <p>Desenvolvemos um <b>trabalho personalizado</b>, pois sabemos que realidades distintas demandam <b>soluções específicas</b>.</p>
                <p>Nossa <b>estratégia metodológica</b> permite perceber e <b>compreender diferentes contextos</b>, tornando as experiências educativas mais significativas e potentes.</p>
            </div>
        </ContainerPorQue>
    );
}

export default PorQue;
