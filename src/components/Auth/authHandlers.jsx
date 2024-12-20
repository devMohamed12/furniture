import { supabase } from "../../supabase";
import { setUser } from "../../redux/userSlice";

export const handleSignUp = async ({ email, password, name } , dispatch) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        
        role: "ecommerce_user",
        name,
      },
    },
  });
  if (error) console.error("Error signing up:", error.message);
  else {
     dispatch(setUser(data));
  }
};

export const handleSignIn = async ({ email, password } , dispatch) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) console.error("Error signing in:", error.message);
  else {
     dispatch(setUser(data));
  }
};

