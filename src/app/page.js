import { data } from "../data";
import Card from "../components/card";

export default function Home() {
  const articles = data;
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Articles</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {articles.map(article => (
          <li key={article.id}>
            <Card 
              id={article.id}
              title={article.title}
              description={article.description}
              author={article.author}
              date={article.date}
              photo={article.photo}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}