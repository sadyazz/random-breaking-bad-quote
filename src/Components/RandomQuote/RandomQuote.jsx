import React, { useState } from 'react'
import './RandomQuote.css'
import reload from '../Assets/reload.png'
import fav_icon from '../Assets/fav_icon.png'

const RandomQuote = () =>{

    let quotes = [];

    async function loadQuotes(){
        const response = await fetch("https://api.breakingbadquotes.xyz/v1/quotes");//https://type.fit/api/quotes
        quotes = await response.json();

    //     const response = await fetch("https://api.breakingbadquotes.xyz/v1/quotes");
    // const data = await response.json();

    // // Assuming the API response is an array of objects with 'quote' and 'author' properties
    // quotes = data.map(quoteObj => quoteObj.quote);

    // // Display the quotes in the console
    // console.log(quotes);
    }

    const random = () =>{
        const select = quotes[Math.floor(Math.random()*quotes.length)];
        setQuote(select);
    }

    const [quote, setQuote] = useState({
        quote:"Most people are nothing but pawns on a chessboard led by an unknown hand",
        author:"Noah, Dark",
    });

    loadQuotes();
    return (
        <div className='container'>
            <div className="quote">{quote.quote}</div>
            <div>
                <div className="line"></div>
                <div className="bottom">
                    <div className="author">- {quote.author}</div>
                    <div className="icons">
                        <img src={reload} onClick={()=>{random()}} alt="" />
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RandomQuote