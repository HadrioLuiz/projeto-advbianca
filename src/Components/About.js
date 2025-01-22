import Image from "next/image";
import BiancaPerfil from "../Img/BiancaPerfil.png";

const MyAbout = () => {
    return (
        <div className="grid grid-flow-col gap-1 bg-gradient-to-r from-green-200 to-green-300 h-full pt-36">
            <div className="ml-44 mt-[-50px] pb-32">
                <Image src={BiancaPerfil} alt="Bianca Santos de Souza" />
            </div>
            <div>
                <h1 className="text-black p-20">
                    Eu me chamo Bianca Santos e sou advogada (OAB 4419/AP), servidora da procuradoria estadual e
                    mestranda em justiça e direitos humanos. Tenho 28 anos e me divido entre as atividades acadêmicas e jurídicas.
                    Dois universos que adoro participar e nos quais eu me engajo para realizar o melhor apesar dos desafios:
                    seja nos projetos ou nas minutas processais. Sou experiente na área de recursos aos Tribunais Superiores e
                    espero poder colaborar nestas atividades com novos parceiros ou clientes!
                </h1>
            </div>
        </div>
    )
};

export default MyAbout;