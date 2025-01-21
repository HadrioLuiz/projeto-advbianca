import React from "react";
import Image from "next/image";
import Justice from  "../Img/Justice.png"

const MyHome = () => {
    return (
        <div className="grid grid-flow-col gap-2 bg-gradient-to-r from-green-200 to-green-300 h-full pt-36 mx-auto px-4">
            <div className="justify-center items-center ml-64 pb-32">
                <Image
                    src={Justice}
                    alt="Bianca Santos"
                    height={500}
                />
            </div>
            <div className="text-center justify-center mt-32 mr-44">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Texto aqui</h1>
                <p className="text-xl mb-8">Texto aqui</p>
                <a
                    href="#contact"
                    className="bg-white text-blue-800 px-8 py-3 rounded-full font-bold hover:bg-blue-100 transition"
                >
                    Fale Comigo
                </a>
            </div>
        </div>
    )
};

export default MyHome;