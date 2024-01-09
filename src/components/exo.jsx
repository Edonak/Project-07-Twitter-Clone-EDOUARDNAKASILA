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
