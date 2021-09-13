import { useEffect, useState } from 'react';
import { supabase } from 'libs/supabase';

export const useLogin = () => {
  const [session, setSession] = useState<object | null>();
  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
    });
    if (authListener === null) {
      return;
    }
    return () => {
      authListener.unsubscribe();
    };
  }, []);

  const signInWithGithub = () => {
    supabase.auth.signIn({ provider: 'github' });
  };

  const signOut = () => {
    supabase.auth.signOut();
  };
  return { session, signInWithGithub, signOut };
};