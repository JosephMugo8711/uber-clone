import { Link, Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  link: {
    // Add your styles here
    color: "blue",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <View>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>
          This screen doesn't exist.
        </Text>
        <Link href="/" style={styles.link}>
          <Text>Go to home screen!</Text>
        </Link>
      </View>
    </>
  );
}
