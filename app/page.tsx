// app/page.tsx
"use client";
import { withAuthenticator, WithAuthenticatorProps } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

function App({signOut, user}: WithAuthenticatorProps) {
  return (
      <>
          <h1>Hello, {user?.username} 👋</h1>
          <button onClick={signOut}>Sign out</button>
      </>
  );
}

export default withAuthenticator(App);