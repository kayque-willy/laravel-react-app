import axios from "axios";
import React, { useState } from "react";
import { createRoot } from "react-dom/client";

export default function Fact() {

    const [facts, setFacts] = useState([]);
    const [total, setTotal] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    const handleIncrement = () => {
        setTotal(total => total + 1);
    };

    const handleDecrement = () => {
        if (total > 1) {
            setTotal(total => total - 1);
        }
    };

    const clean = () => {
        setTotal(1);
        setFacts([]);
    }

    const loadFact = () => {
        let random = Math.floor(Math.random() * 7268) + 1;
        setIsLoading(true);
        axios.get('https://quote-garden.onrender.com/api/v3/quotes?limit=' + total + '&page=' + random)
            .then(function (response) {
                console.log(response.data.data);
                setFacts(response.data.data);
                setIsLoading(false);
            }).catch(function (error) {
                console.log(error);
            });
    }

    return (
        <section className="fact">
            {isLoading
                ? <div className="lds-dual-ring"></div>
                : <>
                    <nav className="counter">
                        <div>
                            {total == 1
                                ? <span>Uma frase! </span>
                                : <span>Total: {total} frases! </span>}
                        </div>
                        <div className="button-counter">
                            <button className="button-plus" onClick={handleDecrement}> - </button>
                            <button className="button-less" onClick={handleIncrement}> + </button>
                        </div>
                    </nav>
                    <div className="button-generate">
                        {total == 1
                            ? <button onClick={loadFact}>Me dê a frase!</button>
                            : <button onClick={loadFact}>Me dê as frases!</button>}
                    </div>
                    <div className="button-clean">
                        <button onClick={clean}>Limpar</button>
                    </div>
                    {facts && facts.map((fact, index) => {
                        return (
                            <article className="quote-article" key={index}>
                                <pre className="quote"><q>{fact.quoteText}</q></pre>
                                <cite className="quote-author">{fact.quoteAuthor}</cite>
                            </article>
                        );
                    })}
                </>
            }
        </section>
    );
}

const rootElement = document.getElementById("fact");
const root = createRoot(rootElement);

if (document.getElementById('fact')) {
    root.render(<Fact />);
}