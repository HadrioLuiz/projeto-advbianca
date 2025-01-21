import Image from "next/image";
import BiancaPerfil from "../Img/BiancaPerfil.png";

const MyAbout = () => {
    return (
        <div className="grid grid-flow-col gap-1 bg-gradient-to-r from-green-200 to-green-300 h-full pt-36">
            <div className="ml-44 mt-[-50px] pb-32">
                <Image src={BiancaPerfil} alt="Bianca Santos de Souza" />
            </div>
            <div>
                <h1 className="text-black">Texto sobre mim</h1>
            </div>
        </div>
    )
};

export default MyAbout;