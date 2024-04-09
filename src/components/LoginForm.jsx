import { Button, Text, TextInput, View } from 'react-native';

export default function LoginForm() {
  return (
    <View>
      <Text>Login</Text>
      <TextInput placeholder="Email" />
      <TextInput placeholder="PassWord" />
      <Button title="Entrar" onPress={() => console.log("press")} />
    </View>
  );
}
