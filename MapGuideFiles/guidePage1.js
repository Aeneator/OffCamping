import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  useWindowDimensions,
  View,
  FlatList,
} from "react-native";
import CTextBody from "../CustomObjects/CTextBody";
import CTextBullet from "../CustomObjects/CTextBullet";
import CTextHeader from "../CustomObjects/CTextHeader";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Colors from "../CustomObjects/Colors";

let List1Check = new Array();
let List2Check = new Array();

const lista1 = [
  { id: 1, text: "Cort, izopren, sac de dormit" },
  { id: 2, text: "Bocanci de munte" },
  { id: 3, text: "Doua rucsace (unul mic si unul mare)" },
  {
    id: 4,
    text: "Ustensile de gatit \n(Lingura, furculita, briceag, castron, cana)",
  },
  {
    id: 5,
    text: "Apa (in functie de cat de consum, minim 1L)",
  },
  {
    id: 6,
    text: "Alimente suficiente pentru cate zile planuiesti sa stai",
  },
  { id: 7, text: "Carnet si pix" },
  {
    id: 8,
    text: "Haine calduroase \n(vremea poate fi foarte imprevizibila)",
  },
  { id: 9, text: "Produse de igiena" },
  { id: 10, text: "Sapca/basca" },
  { id: 11, text: "Tricouri si sosete de schimb" },
  { id: 12, text: "Carte de identitate (carnet de elev/student)" },
  { id: 13, text: "Dezinfectant, protectie solara, spray antitantari" },
  { id: 14, text: "Geaca impermeabila, pelerina de ploaie" },
  { id: 15, text: "Lanterna frontala si baterii de rezerva" },
];

const lista2 = [
  {
    id: 1,
    text: "Trusa de prim-ajutor (fasa, plasturi, apa oxigenata, betadina, garou, esarfa, comprese sterile, pastile necesare-nurofen, smecta etc, o bucata de sfoara, aspirina, penseta, autan, claritin)",
  },
  {
    id: 2,
    text: "Trusa de supravetuire(busola, cordelina, amnar, chibrituri, iasca (material care ia foc usor), saci de gunoi, tigaie, fluier, cuvertura de supravietuire)",
  },
  { id: 3, text: "Arzator" },
];

function GuidePage1({ navigation }) {
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
            "Bun.\nVrei sa mergi la camping.\nDar unde mai exact?\n\nPrimele lucruri pe care ar trebui sa le luăm în calcul sunt locația, pe care o poti gasi cu usurinta cu ajutorul aplicatiei, si variabilele care vin la pachet : sursa de apa, foc, vremea, ruta si data.\n\nDupa ce ti-ai ales locatia,  urmatorul pas ar fi sa-ti intocmesti o listă cu lucruri utile, consultand necesarul de camping. \n "
          }
          style={{ fontSize: TextSize, textAlign: "auto" }}
        />
        <CTextHeader
          text={"Lista necesitati:"}
          style={{ fontSize: TextSize, alignSelf: "center" }}
        />
        {lista1.map((item) => (
          <View key={item.id} style={{ marginVertical: "2%", width: "95%" }}>
            <BouncyCheckbox
              size={25}
              fillColor={Colors.Primary}
              unfillColor="#FFFFFF"
              isChecked={List1Check[item.id]}
              onPress={() => (List1Check[item.id] = !List1Check[item.id])}
              text={item.text}
              iconStyle={{ borderColor: Colors.Primary }}
              textStyle={{
                fontFamily: "Poppins-Light",
                color: "black",
                fontSize: width / 22,
              }}
            />
          </View>
        ))}
        <CTextHeader
          text={"Necesar camp grup:"}
          style={{ fontSize: TextSize, alignSelf: "center", marginTop: "10%" }}
        />
        {lista2.map((item) => (
          <View key={item.id} style={{ marginVertical: "2%", width: "95%" }}>
            <BouncyCheckbox
              size={25}
              fillColor={Colors.Primary}
              unfillColor="#FFFFFF"
              isChecked={List2Check[item.id]}
              onPress={() => (List2Check[item.id] = !List2Check[item.id])}
              text={item.text}
              iconStyle={{ borderColor: Colors.Primary }}
              textStyle={{
                fontFamily: "Poppins-Light",
                color: "black",
                fontSize: width / 22,
              }}
            />
          </View>
        ))}
        <CTextBody
          text={
            "De asemenea, este foarte important sa fii informat despre orice situatie neprevazuta.\n\nAstfel, te sfatuim sa accesezi sectiunea de situatii de urgenta din cadrul ghidului.\n\nAcum nu îți mai rămâne decât sa cauți cele mai pitorești trasee din împrejurime (de ținut cont de nivelul de dificultate) și să te urci în tren sau mașină.\n "
          }
          style={{ fontSize: TextSize, textAlign: "auto", marginTop: "10%" }}
        />
      </View>
    </ScrollView>
  );
}

export default GuidePage1;
