import Cachorros from '../../img/dogs/cachorros.jpg';
import Gatos from '../../img/cats/gatos.jpg';

let Home = {
    render: async () => {
        let view = `
            <div class="container">
                <div class="title">
                    <h1>Adote um amigo de 4 patas</h1>
                </div>
                <div class="animals">
                    <div class="dogs">
                        <img src="${Cachorros}" alt="cachorros" />
                        <a href="/#/dogs">Quero adotar</a>
                    </div>
                    <div class="line"></div>
                    <div class="cats">
                        <img src="${Gatos}" alt="gatos" />
                        <a href="/#/cats">Quero adotar</a>
                    </div>
                </div>
            </div>
            <div class="motives">
                <h1>10 motivos para adotar um pet</h1>
                <ul>
                    <li>Você estará salvando uma vida</li>
                    <li>Você deixará a vida dele mais feliz</li>
                    <li>Ele deixará sua vida mais feliz</li>
                    <li>Um pet é uma ótima companhia</li>
                    <li>Adotar ajuda a diminuir o número de animais abandonados e em abrigos</li>
                    <li>Faz bem pra saúde</li>
                    <li>Ajuda a desenvolver responsabilidade</li>
                    <li>Um pet pode ajudar na segurança do lar</li>
                    <li>Te ajuda a ser mais sociável</li>
                    <li>Quem vive com pets tem menos estresse</li>
                </ul>
            </div>
        `;
        return view;
    },
    after_render: async () => {}
}

export default Home;