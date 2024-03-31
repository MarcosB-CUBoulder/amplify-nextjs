// app/page.tsx
"use client";
import { withAuthenticator, WithAuthenticatorProps, TextField } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { useState } from 'react';

function App({ signOut, user }: WithAuthenticatorProps) {
    const [location, setLocation] = useState({ city: '', state: '' });

    const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLocation(prev => ({ ...prev, city: event.target.value }));
    };

    const handleStateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLocation(prev => ({ ...prev, state: event.target.value }));
    };

  return (
      <>
          <h1>Hello, {user?.signInDetails?.loginId} from {location.city}, {location.state} 👋</h1>
          <TextField label="City" placeholder="Enter your city" onChange={handleCityChange} />
          <TextField label="State" placeholder="Enter your state" onChange={handleStateChange} />
          <button onClick={signOut}>Sign out</button>
      </>
  );
}

export default withAuthenticator(App);
