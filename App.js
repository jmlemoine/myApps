import React from "react";
import { StyleSheet, Text, View, Image, Button, Alert } from "react-native";

export default function App() {
  klk = () => {
    Alert.alert("Hola Jean Melvin");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image
            source={require("./assets/Perfil.jpeg")}
            style={styles.logo}
          ></Image>
        </View>

        <View style={styles.headerRight}>
          <Button title="Login" onPress={klk} />
        </View>
      </View>

      <View style={(styles.body, styles.alla)}>
        <Text>Hola Jean Melvin!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    //backgroundColor: "blue",
    alignItems: "center",
    //justifyContent: "center",*/
  },
  alla: {
    fontWeight: "bold",
  },
  header: {
    flex: 0.3,
    flexDirection: "row",
    marginTop: 40,
  },
  headerLeft: {
    flex: 1,
    //backgroundColor: "red",
  },
  headerRight: {
    flex: 1,
    //backgroundColor: "green",
  },
  body: {
    flex: 1,
    alignItems: "center",
    //backgroundColor: "yellow",
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    resizeMode: "contain",
  },
});
