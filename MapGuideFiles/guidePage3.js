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

const lista1 = [
  {
    id: 1,
    header: "Bagajul personal",
    text: "Acesta trebuie sa fie strans și verificat. (Consutati inca o data necesarul de camp si asigurati-va ca aveti toate elementele)",
  },
  {
    id: 2,
    header: "Împachetarea cortului",
    text: "Verificati daca ati strans toate lucrurile din cort. După ce totul este in regula puteți sa incepeti sa-l curatati si sa-l strangeti. Dacă aveți dificultăți, verificati instrucțiunile acestuia.",
  },
  {
    id: 3,
    header: "Colectarea gunoaielor",
    text: "Este important sa verificati imprejurimile pentru a menține frumusețea și sănătatea naturii. Pentru resturile biodegradabile, puteți să faceți o groapa, in care sa le acoperiti. Acest lucru fertilizeaza pamantul, astfel, limitand infestarea mediului înconjurător cu deșeuri menajere.",
  },
  {
    id: 4,
    header: "Asigurarea stingerii focului",
    text: "Luați masuri pentru a vă asigura că nu se vor creea alte accidente,din cauza carbunilor aprinsi, acoperiti vatra cu pamant sau nisip.",
  },
  {
    id: 5,
    header: "Cel mai important",
    text: "Înainte să plecați, nu uitați sa mai verificati o dată zona de camping, pentru a fi siguri ca ati ținut cont de toți pașii.Inaite de a pleca din locul de campat, aveti grija sa lasati locul asa cum l-ati gasit. Aruncati gunoaiele la cea mai apropiata pubelă.",
  },
];

function GuidePage3({ navigation }) {
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
            "Dupa ce aventura dumneavoastra a luat sfarsit, trebuie sa tineti cont de următoarele aspecte importante:\n"
          }
          style={{ fontSize: TextSize, textAlign: "auto" }}
        />
        {lista1.map((item) => (
          <View key={item.id} style={{ marginVertical: "2%", width: "95%" }}>
            <CTextHeader
              text={item.header}
              style={{
                fontSize: TextSize,
                marginTop: "10%",
              }}
            />
            <CTextBody
              text={item.text}
              style={{ fontSize: TextSize, textAlign: "auto" }}
            />
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

export default GuidePage3;
