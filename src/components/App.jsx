import { useEffect, useState } from "react";
import Nav from "./Nav";
import Article from "./Article";
import ArticleEntry from "./ArticleEntry";
import { SignIn, SignOut } from "./Auth";
import { useAuthentication } from "../services/authService";
import { fetchArticles, createArticle } from "../services/articleService";
import "./App.css";

export default function App() {
  const [articles, setArticles] = useState([]);
  const [article, setArticle] = useState(null);
  const [writing, setWriting] = useState(false);
  const user = useAuthentication();

  useEffect(() => {
    if (user) {
      fetchArticles().then(setArticles);
    }
  }, [user]);

  function addArticle({ title, body }) {
    createArticle({ title, body }).then((article) => {
      setArticle(article);
      setArticles([article, ...articles]);
      setWriting(false);
    });
  }

  return (
    <div className="App">
      <header>
        <h1>The Blogger Site</h1>
        <div className="auth-controls">
          {user && (
            <button className="new-article-btn" onClick={() => setWriting(true)}>
              New Article
            </button>
          )}
          {!user ? <SignIn /> : <SignOut />}
        </div>
      </header>

      {user && (
        <div className="content">
          <Nav articles={articles} setArticle={setArticle} />
          <main className="main-content">
            {writing ? (
              <ArticleEntry addArticle={addArticle} />
            ) : (
              <Article article={article} />
            )}
          </main>
        </div>
      )}
    </div>
  );
}
