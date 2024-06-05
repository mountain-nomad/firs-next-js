import Link from 'next/link';

const Card = ({ id, title, description, author, date, photo }) => {
    return(        
        <div className="bg-gray-200 p-6 rounded-xl shadow-lg flex flex-col justify-between w-full h-80 max-w-xs mx-auto">
            <div className="flex items-start">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                    <img className="w-full h-full object-cover" src={photo} alt={`${author}'s photo`} />
                </div>
                <div className="flex-1">
                    <h2 className="text-lg font-semibold">{title}</h2>
                    <p className="text-gray-700">{author}</p>
                </div>
            </div>
            <div className="mt-4">
                <p className="text-gray-500">{description}</p>
            </div>
            <div className="mt-2 text-right">
                <small className="text-gray-400">Published on {date}</small>
            </div>
            <div className="mt-4 text-right">
                <Link href={`./articles/${id}`} legacyBehavior>
                    <a className="text-blue-500 hover:underline">Learn More &rarr;</a>
                </Link>
            </div>
        </div>
    );
}

export default Card;
