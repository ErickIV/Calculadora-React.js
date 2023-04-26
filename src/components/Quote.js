import './quote.css';

const quot = 'A matemática é o alfabeto com o qual Deus escreveu o universo.';
const author = '– Galileu Galilei.';

const Quote = () => (
    <div className="block-container">
        <blockquote className="block">
            <h3>
                {quot}
            </h3>
            <h2>{author}</h2>
        </blockquote>
    </div>
);
export default Quote;