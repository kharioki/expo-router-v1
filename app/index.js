import { StyleSheet, Text, View } from "react-native";
import { Link } from 'expo-router'
export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Hello Moringa</Text>
        <Link href={{ pathname: "/about", params: { id: "123" } }} >
          <Text style={styles.subtitle}>Go to about.</Text>
        </Link>
        <Link href={{ pathname: "/234" }} >
          <Text style={styles.subtitle}>Go to 234.</Text>
        </Link>
        <Link href={{ pathname: "/765" }} >
          <Text style={styles.subtitle}>Go to 765.</Text>
        </Link>
        <Link href={{ pathname: "/987" }} >
          <Text style={styles.subtitle}>Go to 987.</Text>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
