// Dans le fichier Components/NotFound.jsx
import React from 'react';
import notFoundImage from '/src/assets/images/not.jpg'; // Assurez-vous de mettre le bon chemin d'accès à l'image

function NotFound() {
  return (
    <div>
      <img src={notFoundImage} alt="404 Not Found" />
      <p>Page not found.</p>
    </div>
  );
}

export default NotFound;
