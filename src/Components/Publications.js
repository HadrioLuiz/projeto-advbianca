import { Book } from 'lucide-react';

const MyPublications = () => {
    return (
        <div className="gap-2 bg-gradient-to-r from-green-200 to-green-300 h-full p-5 pt-36 pb-10 mx-auto">
            <h2 className="text-3xl font-bold text-center text-black mb-12 flex justify-center items-center">
                <Book className="mr-4" /> Minhas Publicações
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
                {[
                    {
                        title: "Navigating Corporate Law",
                        excerpt: "A comprehensive guide to understanding corporate legal landscapes.",
                        date: "January 15, 2024"
                    },
                    {
                        title: "Intellectual Property Rights",
                        excerpt: "Key strategies for protecting intellectual assets in the digital age.",
                        date: "February 3, 2024"
                    },
                    {
                        title: "Employment Law Insights",
                        excerpt: "Critical updates and trends in workplace legal frameworks.",
                        date: "March 22, 2024"
                    }
                ].map((pub, index) => (
                    <div
                        key={index}
                        className="bg-gray-100 text-black p-6 rounded-lg shadow-md hover:shadow-xl transition"
                    >
                        <h3 className="text-xl font-semibold mb-2">{pub.title}</h3>
                        <p className="text-gray-600 mb-4">{pub.excerpt}</p>
                        <div className="text-sm text-gray-500">{pub.date}</div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default MyPublications;