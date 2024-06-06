import { data } from '@/data';


const Article = () => {
  const articles = data;

  return ( 
    <div>
    {articles.map(article => (
      if(article.id == slug){

      }
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
    
    <div className="container mx-auto p-4">
      
    </div></div>
  );
}

export default Article;