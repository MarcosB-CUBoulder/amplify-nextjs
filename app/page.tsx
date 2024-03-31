// app/page.tsx
"use client";
import { withAuthenticator, WithAuthenticatorProps, TextField } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { useState } from 'react';

function App({ signOut, user }: WithAuthenticatorProps) {
    const [formState, setFormState] = useState({
        city: '',
        state: '',
        submitted: false
    });
    const handleLocationSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setFormState(prev => ({ ...prev, submitted: true }));
    };
    const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormState(prev => ({ ...prev, city: event.target.value }));
    };

    const handleStateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormState(prev => ({ ...prev, state: event.target.value }));
    };

  return (
      <>
          <h1>Hello, {user?.signInDetails?.loginId}{formState.submitted ? ` from ${formState.city}, ${formState.state}` : ''} 👋</h1>
          {!formState.submitted && (
              <form onSubmit={handleLocationSubmit}>
                  <label>
                      City:
                      <input type="text" value={formState.city} onChange={handleCityChange} required />
                  </label>
                  <label>
                      State:
                      <input type="text" value={formState.state} onChange={handleStateChange} required />
                  </label>
                  <button type="submit">Submit</button>
              </form>
          )}
          <button onClick={signOut}>Sign out</button>
      </>
  );
}

export default withAuthenticator(App);
