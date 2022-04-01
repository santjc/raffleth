import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
export default function App() {
    return (
        <div>
            <Navbar></Navbar>
            <Hero headline={"Welcome to RafflETH"} subheadline={"A Raffle service running on Ethereum Blockchain"} ctatext={"Get Started!"}></Hero>
        </div>
    );
}
