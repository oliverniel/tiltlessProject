import React from 'react';
import Hero from '../components/Hero/Hero';
import BrandNew from '../components/BrandNew/BrandNew';
import NewsLetter from '../components/NewsLetter.jsx/NewsLetter';


const Home = () => {
    return (
        <div>
            <Hero/>
            <BrandNew/>
            <NewsLetter />
        </div>
    );
}

export default Home;
