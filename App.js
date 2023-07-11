import { useState, useEffect } from "react";
import {
  NativeBaseProvider,
  Box,
  Text,
  KeyboardAvoidingView,
} from "native-base";
import Login from "./app/Login";
import TodoList from "./app/TodoList";
import { auth } from "./app/fbConfig";

export default function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    // on restart, check if already logged-in
    const _user = auth.currentUser;
    setUser(_user);
  }, [auth]);

  return (
    <NativeBaseProvider>
      <KeyboardAvoidingView
        h={{ base: "900px", lg: "auto " }}
        behavior="padding"
      >
        <Box
          bg="darkBlue.900"
          alignItems="center"
          justifyContent="center"
          flex={1}
        >
          <Text color="primary.400" fontSize="4xl">
            Chekov Todo
          </Text>
          {!user ? <Login setUser={setUser} /> : <TodoList user={user} />}
        </Box>
      </KeyboardAvoidingView>
    </NativeBaseProvider>
  );
}
