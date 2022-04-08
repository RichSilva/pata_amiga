

let Dogs = {
    render: async () => {
        let view = `
            <div class="dog-header">
                <h1>Escolha um amiguinho para ser seu</h1>
                <a href="/#/">Voltar para Home</a>
            </div>

            <div class="dog-container">
                <div class="dog-wrapper">
                    <img src="https://s2.glbimg.com/zv9Giu26ZNgHbs3O1eu5fuI8RFc=/0x0:607x426/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_ba3db981e6d14e54bb84be31c923b00c/internal_photos/bs/2021/x/L/vNU8n5S3icJhszkvj8QQ/2020-02-27-vira-lata.jpg" alt="Foto de um cachorro" />
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
                <div class="dog-wrapper">
                    <img src="https://blog.arbolez.com/wp-content/uploads/2018/07/adotar-um-cachorro-vira-lata.jpg" alt="Foto de um cachorro" />
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
                <div class="dog-wrapper">
                    <img src="https://i.pinimg.com/originals/16/4f/3f/164f3fac63718249e2c95270246a2496.jpg" alt="Foto de um cachorro" />
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
                <div class="dog-wrapper">
                    <img src="https://s2.glbimg.com/TMWV16YePUUoh7Vq1WwK7MTmeKY=/e.glbimg.com/og/ed/f/original/2019/02/22/border_cole_1.jpg" alt="Foto de um cachorro" />
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

export default Dogs;