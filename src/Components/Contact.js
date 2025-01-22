import {  MessageCircle } from 'lucide-react';

const MyContact = () => {
    return (
        <div className="gap-2 bg-gradient-to-r from-[#a0d981] to-[#88bb6d] h-full pt-36 pb-10 mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 flex justify-center items-center text-black">
                <MessageCircle className="mr-4" /> Entre em Contato
            </h2>
            <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Nome</label>
                        <input
                            type="text"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Seu Nome"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Email</label>
                        <input
                            type="email"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="nome.email@example.com"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Mensagem</label>
                        <textarea
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            rows={4}
                            placeholder="Sua mensagem aqui..."
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-700 text-white py-3 rounded-md hover:bg-blue-800 transition"
                    >
                        Enviar Mensagem
                    </button>
                </form>
            </div>
        </div>
    )
};

export default MyContact;