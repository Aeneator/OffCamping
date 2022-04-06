import React from "react";
import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import CTextBody from "../CustomObjects/CTextBody";
import CTextBullet from "../CustomObjects/CTextBullet";
import CTextHeader from "../CustomObjects/CTextHeader";
import BouncyCheckbox from "react-native-bouncy-checkbox";

function GuidePage2({ navigation }) {
  const { height, width } = useWindowDimensions();

  let TextSize = width / 20;

  return (
    <ScrollView>
      <View
        style={{
          width: "90%",
          alignSelf: "center",
          marginVertical: "10%",
        }}
      >
        <CTextBody
          text={
            "După ce ti-ai gasit locul de camping in aplicatie, ti-ai luat toate cele necesare pentru aventura ta in natura si ai ajuns la destinatie, urmatorul pas este sa instalezi cortul.\n\nPoti incepe prin a gasi un loc bun de campat, o zona cu cat mai putine denivelari și care este pozitionata intr-un punct mai inalt al platoului(in caz de inundatii), ferit totusi de vant.\nNu uita sa citesti cu atentie instructiunile cortului si sa fixezi cuiele in pamant.\nPe tot parcursul excursiei inchide plasa cortului pentru a dormi intr-un spatiu confortabil, fara insecte, iar noaptea sau daca ploua inchide si usa acestuia. \n\nCând te cheamă natura este preferabil să nu îi răspunzi la propriu.\nAsigură-te  în prealabil că există un spațiu pe care îl poți folosi.\n\nIn caz de ploaie si daca nu exista niciun adapost in jur asigurati-va ca aveti posibilitatea desfasurarii activitatilor (gatit, foc).\nO solutie poate fi utilizarea unei prelate.\n\nCel mai important lucru de luat in considerare este locul unde se va face focul.\nAsigurati-va ca in perimetrul respectiv este permisa realizarea acestuia si aprindeti-l doar in zone special amenanjate, deoarece puteti pune in pericol atat vegetatia, cat si propria persoana."
          }
          style={{ fontSize: TextSize, textAlign: "auto" }}
        />
      </View>
    </ScrollView>
  );
}

export default GuidePage2;
