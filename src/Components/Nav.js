import { Scale } from 'lucide-react';

const MyNav = () => {
    return (
        <div>
            <nav className="bg-[#d5fac4] fixed w-full text-black p-5 shadow-md">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-2xl font-bold flex items-center">
                        <Scale className="mr-2" /> Advogada Bianca Santos
                    </div>
                    <div className="space-x-4 hidden md:flex">
                        <a href="#home" className="hover:text-blue-200">Início</a>
                        <a href="#about" className="hover:text-blue-200">Sobre</a>
                        <a href="#publications" className="hover:text-blue-200">Publicações</a>
                        <a href="#contact" className="hover:text-blue-200">Contato</a>
                    </div>
                    {/* Mobile Menu Hamburger */}
                    <div className="md:hidden">
                        <button className="text-white focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    )
};

export default MyNav;