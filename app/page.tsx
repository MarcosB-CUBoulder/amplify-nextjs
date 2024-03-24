// app/page.tsx
"use client";
import type { AppProps } from "next/app";
import { withAuthenticator } from "@aws-amplify/ui-react";
//import { Amplify } from 'aws-amplify';
//import config from '@/amplifyconfiguration.json';
import "@aws-amplify/ui-react/styles.css";
import type { WithAuthenticatorProps } from '@aws-amplify/ui-react';

//Amplify.configure(config);
function App({signOut, user}: WithAuthenticatorProps & AppProps) {
  return (
      <>
          <h1>Hello, {user?.username} 👋</h1>
          <button onClick={signOut}>Sign out</button>
      </>
  );
}

export default withAuthenticator(App);