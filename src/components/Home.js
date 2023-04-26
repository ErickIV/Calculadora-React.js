import './home.css';

const paragraph = 'Este website é uma ferramenta online para cálculos matemáticos. Ele apresenta uma interface de usuário intuitiva e fácil de usar, com uma calculadora padrão na tela principal. A calculadora possui botões numéricos, operações básicas (adição, subtração, multiplicação e divisão) e funções avançadas (como raiz quadrada, logaritmo e trigonometria), permitindo que o usuário faça cálculos complexos de forma simples.';

const Home = () => (

    <div className="container">
        <h1 className="title">Bem Vindo a minha calculadora</h1>
        <p className="description">{paragraph}</p>

        <p className="description">{paragraph}</p>
    </div>
);

export default Home;
