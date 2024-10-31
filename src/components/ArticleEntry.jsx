import { useState } from "react";

export default function ArticleEntry({ addArticle }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState(null);

  function submit(e) {
    setError(null);
    e.preventDefault();
    if (!title.trim() || !body.trim()) {
      setError("Both the title and body must be supplied");
    } else {
      addArticle({ title, body });
      setTitle(""); // Clear input fields after submission
      setBody("");
    }
  }

  return (
    <div className="article-entry">
      <form onSubmit={submit}>
        {error && <p className="error">{error}</p>}
        
        <label htmlFor="article-title">Title</label>
        <input
          id="article-title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter article title"
        />
        
        <label htmlFor="article-body">Body</label>
        <textarea
          id="article-body"
          rows="8"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Write your article here..."
        ></textarea>
        
        <button type="submit">Create</button>
      </form>
    </div>
  );
}