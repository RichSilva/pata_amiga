let Contact = {
    render: async () => {
        let view = `
            <div class="contact">
                <div class="contact-header">
                    <a href="/#/">Voltar para Home</a>
                </div>
                <div class="contact-container">
                    <h4>Informe seus dados que entraremos em contato para tratar da adoção</h4>
                    <form>
                        <input type="text" placeholder="Informe seu nome" />
                        <input type="text" placeholder="Informe seu email" />
                        <input type="text" placeholder="Informe seu whatsapp" />
                        <button id="submitDataForm">Enviar</button>
                    </form>
                </div>
            </div>
        `;
        return view;
    },
    after_render: async () => {
        document.getElementById('submitDataForm').addEventListener('click', () => {
            window.alert('Dados enviados com sucesso. Obrigado!');
        })
    }
}

export default Contact;