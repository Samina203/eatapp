import { View, Text, FlatList, Image } from "react-native";
import { Button } from "../../components/button";
import { removeIsUserLoggedIn } from "../../utilis/help";
import { db } from "../../services/firebaseConfig";
import { useEffect, useState } from "react";
import { collection, doc, getDocs } from "firebase/firestore";

function Main({ navigation }) {
  {
    const attemptToLogout = () => {
      removeIsUserLoggedIn();
      navigation.replace("Login");
    };
  }
  const [users, setUsers] = useState();
  useEffect(() => {
    const scrapData = [];
    getDocs(collection(db, "users"))
      .then((response) => {
        response.forEach((doc) => {
          scrapData.push(doc.data());
        });

        setUsers(scrapData);
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
        src={item.profileImgUrl}
      />
      <Text style={{ fontSize: 15 }}>{item.firstName}</Text>
      <Text style={{ fontSize: 15 }}>{item.lastName}</Text>
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
