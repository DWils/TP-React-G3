import React, { useState } from 'react';

function ForgetPasswordForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Appel à l'API pour envoyer l'email de réinitialisation
    try {
      const response = await fetch('https://fakestoreapi.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error('Une erreur s\'est produite : ', error);
    }
  };

  return (
    <div>
      
      <h2>Mot de passe oublié</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email :
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <button type="submit">Réinitialiser le mot de passe</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default ForgetPasswordForm;