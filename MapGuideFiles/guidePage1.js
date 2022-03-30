import React from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  useWindowDimensions,
  View,
} from "react-native";
import CTextBody from "../CustomObjects/CTextBody";

function guidePage1({ navigation }) {
  const { height, width } = useWindowDimensions();

  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          width: "85%",
          alignSelf: "center",
          marginVertical: "10%",
          justifyContent: "flex-end",
        }}
      >
        <CTextBody
          text={
            "Bun. Vrei sa mergi la camping.\nDar unde mai exact?\n\nPrimele lucruri pe care ar trebui sa le luăm în calcul sunt locația, pe care o poti gasi cu usurinta cu ajutorul aplicatiei, si variabilele care vin la pachet : sursa de apa, foc, vremea, ruta si data.\n\nDupa ce ti-ai ales locatia,  urmatorul pas ar fi sa-ti intocmesti o listă cu lucruri utile, consultand necesarul de camping : \n\nNecesar camp pentru fiecare persoana: \n\n1. Cort, izopren, sac de dormit (hamac)\n2. Bocanci de munte \n3. Doua rucsace (unul mic si unul mare). \n4. Ustensile de gatit (Lingura, furculita, briceag, castron de tabla, cana de tabla)\n5. Apa-statistica pentru consumul apei in timpul efortului \n6. Alimente suficiente pentru cate zile planuiesti sa stai \n7. Carnet si pix \n8. Haine calduroase (vremea poate fi foarte imprevizibila la munte deci un polar si pantaloni lungi chiar si pe timp de vara se vor dovedi folositori) \n9. Produse de igiena \n10. Sapca/basca \n11. Tricouri si sosete de schimb \n12. Carte de identitate (carnet de elev/student) \n13. Dezinfectant, protectie solara, spray antitantari \n14. Geaca impermeabila, pelerina de ploaie \n15. Frontala+baterii de rezerva \n\nNecesar camp grup (lucruri care trebuie luate de o persoana din grup) \n\n1. Trusa de prim-ajutor (fasa, plasturi, apa oxigenata, betadina, garou, esarfa, comprese sterile, pastile necesare-nurofen, smecta etc, o bucata de sfoara, aspirina, penseta, autan, claritin) \n2. Trusa de supravetuire(busola, cordelina, amnar, chibrituri, iasca (material care ia foc usor), saci de gunoi, tigaie, fluier, cuvertura de supravietuire) \n3. Arzator \n\nDe asemenea, este foarte important sa fii informat despre orice situatie neprevazuta. \n\nAstfel, te sfatuim sa accesezi sectiunea de situatii de urgenta din cadrul ghidului. \n\nAcum nu îți mai rămâne decât sa cauți cele mai pitorești trasee din împrejurime (de ținut cont de nivelul de dificultate) și să te urci în tren sau mașină."
          }
          style={{
            fontSize: width / 25,
            color: "black",
            textShadowOffset: { width: -0.1, height: 0.1 },
          }}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    //alignItems: "center",
    //justifyContent: "center",
  },
});

export default guidePage1;
