import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex flex-1 justify-center align-middle">
      <Text className="text-3xl">Aora</Text>
      <StatusBar style="auto" />
      <Link href="/profile">Go to Profile</Link>
    </View>
  );
}
