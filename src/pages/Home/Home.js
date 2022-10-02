import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar/Navbar';
import Todolists from '../../components/Todolists';


const Home = () => {
   
    return (
        <div
            className="grid place-items-center bg-blue-100 h-screen px-6 font-sans"
        >
            <Navbar />
            <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
                <Header />
                <hr className="mt-4" />
                <Todolists />
                <hr className="mt-4" />
                <Footer />

            </div>
        </div>
    );
};

export default Home;