import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

// Un composant qui affiche le profil d'un utilisateur
function Profile(props) {
  return (
    <div>
      <h1>Profil de {props.match.params.name}</h1>
      <p>Voici quelques informations sur {props.match.params.name}.</p>
    </div>
  );
}

// Un composant qui affiche la liste des utilisateurs avec leurs avatars
function Users() {
  // Un tableau qui contient les noms et les images des utilisateurs
  const users = [
    { name: "Alice", image: "alice.jpg" },
    { name: "Bob", image: "bob.jpg" },
    { name: "Charlie", image: "charlie.jpg" },
  ];

  return (
    <div>
      <h1>Liste des utilisateurs</h1>
      <ul>
        {users.map((user) => (
          <li key={user.name}>
            {/* Un lien qui redirige vers le profil de l'utilisateur */}
            <Link to={`/profile/${user.name}`}>
              {/* L'avatar de l'utilisateur */}
              <img src={user.image} alt={user.name} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Le composant principal qui utilise React Router
function App() {
  return (
    <BrowserRouter>
      <div>
        {/* Une route qui affiche le composant Users par défaut */}
        <Route exact path="/" component={Users} />
        {/* Une route qui affiche le composant Profile en fonction du paramètre name */}
        <Route path="/profile/:name" component={Profile} />
      </div>
    </BrowserRouter>
  );
}

export default App;










import React, {useState, useContext} from 'react';
import CommentIcon from './../images/commentIcon.svg';
import RetweetIcon from './../images/retweetIcon .svg';
import LikeIcon from './../images/like.svg';
import ShareIcon from './../images/shareIcon.svg';

// Créer un contexte pour stocker le nombre de likes
const LikeContext = React.createContext(0);

 function TweetActions({comment, retweet, like}) {

    const [color1, setColor1] = useState("");
    const [color2, setColor2] = useState("");
    const [color3, setColor3] = useState("");
  
    const handleClick1 = () => {
      setColor1("green");
    };
  
    const handleClick2 = () => {
      setColor2("blue");
    };
  
    const handleClick3 = () => {
      setColor3("red");
    };
  
    // Utiliser le contexte pour accéder et modifier le nombre de likes
    const [likes, setLikes] = useContext(LikeContext);

    // Définir une fonction pour incrémenter le nombre de likes
    const incrementLikes = () => {
      setLikes(likes + 1);
    };

  return (
    <div className="tweet-actions">
    <div className="tweet-action" title="Comments" onClick={handleClick1} style={{color: color1 }}>
        <img src={CommentIcon} alt="" style={{color: color1 }}/>
        {comment}
    </div>
    <div className="tweet-action" title="Retweets"  onClick={handleClick2} style={{ color: color2 }}>
        <img src={RetweetIcon} alt="" />
        {retweet}
    </div>
    <div className="tweet-action" title="Likes"  onClick={handleClick3} style={{ color: color3 }}>
        <img src={LikeIcon} alt="" />
        {likes} // Afficher le nombre de likes du contexte
    </div>
    <div className="tweet-action" title="Share">
        <img src={ShareIcon} alt="" />
    </div>
</div>
  )
}
