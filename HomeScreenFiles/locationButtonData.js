import { Image } from "react-native";

import Img1 from "./Imagini/img1.jpg";
import Img2 from "./Imagini/img2.jpg";
import Img3 from "./Imagini/img3.jpg";
import Img4 from "./Imagini/img4.jpg";
import Img5 from "./Imagini/img5.jpg";
import Img6 from "./Imagini/img6.jpg";
import Img7 from "./Imagini/img7.jpg";
import Img8 from "./Imagini/img8.jpg";
import Img9 from "./Imagini/img9.jpg";

export default [
  {
    id: "00",
    nume: "Munții Piatra Craiului",
    imagine: Image.resolveAssetSource(Img1).uri,
    latitudine: 45.538212,
    longitudine: 25.219833,
    zoom: 0.2,
  },
  {
    id: "01",
    nume: "Munții Leaota",
    imagine: Image.resolveAssetSource(Img2).uri,
    latitudine: 45.321905,
    longitudine: 25.314555,
    zoom: 0.2,
  },
  {
    id: "02",
    nume: "Vatra Dornei",
    imagine: Image.resolveAssetSource(Img3).uri,
    latitudine: 47.346216,
    longitudine: 25.35564,
    zoom: 0.2,
  },
  {
    id: "03",
    nume: "Munții Iezer-Păpușa",
    imagine: Image.resolveAssetSource(Img4).uri,
    latitudine: 45.498146,
    longitudine: 24.998244,
    zoom: 0.2,
  },
  {
    id: "04",
    nume: "Masivul Ghițu",
    imagine: Image.resolveAssetSource(Img5).uri,
    latitudine: 45.355476,
    longitudine: 24.69461,
    zoom: 0.2,
  },
  {
    id: "05",
    nume: "Munţii Rodnei",
    imagine: Image.resolveAssetSource(Img6).uri,
    latitudine: 47.538883,
    longitudine: 24.562023,
    zoom: 0.1,
  },
  {
    id: "06",
    nume: "Parcul Natural Apuseni",
    imagine: Image.resolveAssetSource(Img7).uri,
    latitudine: 46.592888,
    longitudine: 22.769414,
    zoom: 0.2,
  },
  {
    id: "07",
    nume: "Munții Făgărașului",
    imagine: Image.resolveAssetSource(Img8).uri,
    latitudine: 45.582761,
    longitudine: 24.749656,
    zoom: 0.2,
  },
  {
    id: "08",
    nume: "Masivul Cozia",
    imagine: Image.resolveAssetSource(Img9).uri,
    latitudine: 45.316002,
    longitudine: 24.33329,
    zoom: 0.2,
  },
];
