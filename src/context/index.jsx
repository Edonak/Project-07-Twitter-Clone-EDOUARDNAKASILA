const LikeContext = React.createContext({likes: 0, incrementLikes: () => {}});

// Créer un composant qui fournit le contexte aux composants enfants
function LikeProvider(props) {
  const [likes, setLikes] = React.useState(0);

  function incrementLikes() {
    setLikes(likes + 1);
  }

  // Renvoyer le Provider avec la valeur du contexte
  return (
    <LikeContext.Provider value={{likes, incrementLikes}}>
      {props.children}
    </LikeContext.Provider>
  );
}

// Créer un composant qui affiche le nombre de j'aimes et un bouton pour l'augmenter
function LikeButton() {
  // Utiliser le hook useContext pour accéder au contexte
  const {likes, incrementLikes} = React.useContext(LikeContext);

  // Renvoyer le composant avec le nombre de j'aimes et le bouton
  return (
    <div>
      <p>Nombre de j'aimes : {likes}</p>
      <button onClick={incrementLikes}>J'aime</button>
    </div>
  );
}

// Utiliser le composant LikeProvider pour englober le composant LikeButton
function App() {
  return (
    <LikeProvider>
      <LikeButton />
    </LikeProvider>
  );
}
