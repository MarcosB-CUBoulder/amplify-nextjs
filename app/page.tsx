// app/page.tsx
"use client";
import { withAuthenticator, WithAuthenticatorProps, TextField } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { useState } from 'react';

function App({ signOut, user }: WithAuthenticatorProps) {
    const [location, setLocation] = useState({ city: '', state: '' });
    const [submitted, setSubmitted] = useState(false);
    const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLocation(prev => ({ ...prev, city: event.target.value }));
    };

    const handleStateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLocation(prev => ({ ...prev, state: event.target.value }));
    };

  return (
      <>
          <h1>Hello, {user?.signInDetails?.loginId}{submitted ? ` from ${location.city}, ${location.state}` : ''} 👋</h1>
          {!submitted && (
              <form onSubmit={handleLocationSubmit}>
                  <label>
                      City:
                      <input type="text" name="city" required />
                  </label>
                  <label>
                      State:
                      <input type="text" name="state" required />
                  </label>
                  <button type="submit">Submit</button>
              </form>
          )}
          <button onClick={signOut}>Sign out</button>
      </>
  );
}

export default withAuthenticator(App);
