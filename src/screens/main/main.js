import { View, Text, FlatList, Image } from "react-native";
import { Button } from "../../components/button";
import { removeIsUserLoggedIn } from "../../utilis/help";
import { db } from "../../services/firebaseConfig";
import { useEffect, useState } from "react";
import { collection, doc, getDocs } from "firebase/firestore";
import axios from "axios";

function Main({ navigation }) {
  {
    const attemptToLogout = () => {
      removeIsUserLoggedIn();
      navigation.replace("Login");
    };
  }
  const [users, setUsers] = useState();
  useEffect(() => {
    axios
      .get("https://api.github.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {});
  }, []);

  const __renderItem = ({ item }) => (
    <View
      style={{
        padding: 5,
        margin: 10,
        flexDirection: "row",
      }}
    >
      <Image
        style={{ width: 100, height: 100, borderRadius: 50, marginRight: 5 }}
        src={item.avatar_url}
      />
      <Text style={{ fontSize: 15 }}>{item.name}</Text>
      <Text style={{ fontSize: 15 }}>{item.login}</Text>
      <Text style={{ fontSize: 15 }}>{item.email}</Text>
    </View>
  );

  return (
    <View style={{ justifyContent: "center", flex: 1, marginTop: 30 }}>
      <FlatList data={users} renderItem={__renderItem} />
      {/* <Text></Text>
      <View style={{ flexDirection: "row" }}>
        <Button primary title={"Log out"} onPress={attemptToLogout} />
      </View>*/}
    </View>
  );
}
export { Main };
