

let Cats = {
    render: async () => {
        let view = `
            <div class="cat-header">
                <h1>Escolha um amiguinho para ser seu</h1>
                <a href="/#/">Voltar para Home</a>
            </div>

            <div class="cat-container">
                <div class="cat-wrapper">
                    <img src="https://guialimeira.com.br/wp-content/uploads/2019/02/gato02.jpg" alt="Foto de um gato" />
                    <div class="info">
                        <h4>Nome: Lorem Ipsum</h4>
                        <p>Idade: Lorem Ipsum</p>
                        <p>Peso: Lorem Ipsum</p>
                        <p>Tamanho: Lorem Ipsum</p>
                    </div>
                    <div class="button">
                        <a href="/#/Contact">Quero adotar esse</a>
                    </div>
                </div>
                <div class="cat-wrapper">
                    <img src="https://www.azpetshop.com.br/blog/wp-content/uploads/2020/06/adotar-gato.jpeg" alt="Foto de um gato" />
                    <div class="info">
                        <h4>Nome: Lorem Ipsum</h4>
                        <p>Idade: Lorem Ipsum</p>
                        <p>Peso: Lorem Ipsum</p>
                        <p>Tamanho: Lorem Ipsum</p>
                    </div>
                    <div class="button">
                        <a href="/#/Contact">Quero adotar esse</a>
                    </div>
                </div>
                <div class="cat-wrapper">
                    <img src="https://i2.wp.com/gatinhobranco.com/wp-content/uploads/2016/07/casey-elise-gatos-pretos-1.jpg?fit=1100%2C734&ssl=1" alt="Foto de um gato" />
                    <div class="info">
                        <h4>Nome: Lorem Ipsum</h4>
                        <p>Idade: Lorem Ipsum</p>
                        <p>Peso: Lorem Ipsum</p>
                        <p>Tamanho: Lorem Ipsum</p>
                    </div>
                    <div class="button">
                        <a href="/#/Contact">Quero adotar esse</a>
                    </div>
                </div>
                <div class="cat-wrapper">
                    <img src="https://t2.ea.ltmcdn.com/pt/posts/7/9/3/nomes_para_gatos_pretos_22397_orig.jpg" alt="Foto de um gato" />
                    <div class="info">
                        <h4>Nome: Lorem Ipsum</h4>
                        <p>Idade: Lorem Ipsum</p>
                        <p>Peso: Lorem Ipsum</p>
                        <p>Tamanho: Lorem Ipsum</p>
                    </div>
                    <div class="button">
                        <a href="/#/Contact">Quero adotar esse</a>
                    </div>
                </div>
            </div>
        `;
        return view;
    },
    after_render: async () => {}
}

export default Cats;