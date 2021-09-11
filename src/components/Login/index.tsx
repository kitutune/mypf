import { useEffect, useState } from 'react';
import { supabase } from 'libs/supabase';

export const Login = () => {
  const [session, setSession] = useState();

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
    });

    return () => {
      authListener.unsubscribe();
    };
  }, []);

  function signInWithGithub() {
    supabase.auth.signIn({ provider: 'github' });
  }

  function signOut() {
    supabase.auth.signOut();
  }

  return (
    <>
      {session ? (
        <button onClick={() => signOut()}>サインアウト</button>
      ) : (
        <button onClick={() => signInWithGithub()}>GitHubでログイン</button>
      )}
    </>
  );
};