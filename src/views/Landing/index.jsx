import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../assets/css/landing.css'
import '../../assets/css/card.css'
import Img from '../../assets/img/word.webp'

class Landing extends Component {
    render() {
        return (
            <>
                <div className='word'>
                <img className="d-block w-100" src={Img} alt=""/>
                </div>
                <div class="card">
                <div class="card-body">
                <h5 class="card-title">Pacote Office</h5>
                <h6 class="card-subtitle mb-2 text-muted">word</h6>
                <p class="card-text">O Microsoft Word é um processador de texto produzido
                                        pela Microsoft Office foi criado por Richard Brodie
                                        para computadores IBM PC com o sistema operacional DOS em 1983.
                                        Mais tarde foram criadas versões para o Apple Macintosh, SCO UNIX e Microsoft Windows.
                                        Faz parte do conjunto de aplicativos Microsoft Office.</p>

                                        <h5>Visão geral:<br></br></h5>
                                        <h6>Com o Word no PC, Mac ou dispositivo móvel, você pode:<br></br></h6>
                                        <br></br>
                                        - Criar e formatar os seus documentos com Temas.<br></br>
                                        - Revisar o trabalho com Controlar Alterações.<br></br>
                                        - Refinar as suas palavras com revisores de texto como o Editor.<br></br>
                                        - Salvar no OneDrive para acessar seus documentos no computador, tablet ou celular.<br></br>
                                        - Compartilhar seu trabalho para conversar, comentar e colaborar com outras pessoas onde quer que elas estejam.<br></br>
                                        <br></br>
                                        
                <a href="#/" class="card-link">Comprar</a>
                <a href="#/" class="card-link">Pacotes</a>
                </div>
                </div>
            </>
        );
    }
}

export default Landing;