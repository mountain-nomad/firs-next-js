import { useRouter } from 'next/router';
import { data } from '../../../public/data/data';

const Article = () => {
  const router = useRouter();
  const { id } = router.query;
  const article = data.find((item) => item.id === parseInt(id));

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      <div className="flex items-start mb-4">
        <img className="w-16 h-16 rounded-full mr-4" src={article.photo} alt={`${article.author}'s photo`} />
        <div>
          <p className="text-gray-700">{article.author}</p>
          <small className="text-gray-400">Published on {article.date}</small>
        </div>
      </div>
      <p className="text-gray-500">{article.description}</p>
    </div>
  );
}

export default Article;
