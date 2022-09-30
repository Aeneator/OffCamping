import React, { useState, useEffect } from "react";
import {
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
  ScrollView,
  useWindowDimensions,
} from "react-native";

import axios from "axios";

import CTextHeader from "../../CustomObjects/CTextHeader";
import CTextBody from "../../CustomObjects/CTextBody";
import Colors from "../../CustomObjects/Colors";

import WeatherIconIMG from "./day_cloudy.png";
import GrayBackground from "./LightGrayBackground.jpg";

const APIKEY = "b63d46049eaf8d051591ce2e7564fdb6";
//https://api.openweathermap.org/data/2.5/forecast?lat=1&lon=1&appid=b63d46049eaf8d051591ce2e7564fdb6&units=metric

const WeatherDay = [
  {
    id: 1,
    temperature: 0,
    weatherIconID: 0,
    description: "",
    data: "",
  },
  {
    id: 2,
    temperature: 0,
    weatherIconID: 0,
    description: "",
    data: "",
  },
  {
    id: 3,
    temperature: 0,
    weatherIconID: 0,
    description: "",
    data: "",
  },
  {
    id: 4,
    temperature: 0,
    weatherIconID: 0,
    description: "",
    data: "",
  },

  {
    id: 5,
    temperature: 0,
    weatherIconID: 0,
    description: "",
    data: "",
  },
];

const WeatherPopUp = ({ ShowWeather, setShowWeather, lat, long }) => {
  const { height, width } = useWindowDimensions();

  const [LatLongCode, setLatLongCode] = useState(0);
  const [WeatherInfo, setWeatherInfo] = useState(WeatherDay);

  return (
    <View style={{ marginVertical: 20 }}>
      <TouchableOpacity
        onPress={() => {
          setShowWeather(!ShowWeather);
          console.log(ShowWeather);
          if (!ShowWeather && LatLongCode != lat + long) {
            setLatLongCode(lat + long);
            axios
              .get(
                "https://api.openweathermap.org/data/2.5/forecast?lat=" +
                  lat +
                  "&lon=" +
                  long +
                  "&appid=" +
                  APIKEY +
                  "&units=metric"
              )
              .then((result) => {
                let ImportantIndex = [0, 0, 0, 0, 0];
                let count = 0;
                let date,
                  lastDate,
                  st = 0,
                  dr = 0;

                lastDate = result.data.list[0].dt_txt.substring(0, 10);
                for (var i = 0; i < 40; i++) {
                  date = result.data.list[i].dt_txt.substring(0, 10);
                  if (date != lastDate) {
                    dr = i;
                    ImportantIndex[count++] = parseInt(st + (dr - st + 2) / 2);
                    console.log(parseInt(st + (dr - st) / 2) + 1);
                    st = dr;
                  }
                  lastDate = date;
                }
                ImportantIndex[0] = 0;
                let newArr = [...WeatherInfo];

                newArr.forEach((day, index) => {
                  (day.temperature = Math.round(
                    result.data.list[ImportantIndex[index]].main.temp
                  )),
                    (day.weatherIconID =
                      result.data.list[ImportantIndex[index]].weather[0].icon);
                  day.description =
                    result.data.list[
                      ImportantIndex[index]
                    ].weather[0].description;
                  day.data = result.data.list[ImportantIndex[index]].dt_txt;
                });

                setWeatherInfo(newArr);

                console.log(result.data.list);
              });
          }
        }}
        style={{
          backgroundColor: "white",
          justifyContent: "center",
          flexDirection: "row",
          width: width / 1.8,
          height: height / 12,
          borderRadius: 8,
          borderColor: Colors.Black,
          borderWidth: 1,
          marginTop: 10,
          marginBottom: 10,

          alignSelf: "center",
        }}
      >
        <Image
          source={{ uri: Image.resolveAssetSource(WeatherIconIMG).uri }}
          style={{
            height: height / 14,
            width: width / 8,
            alignSelf: "center",
          }}
          resizeMode="contain"
        />
        <CTextHeader
          text={"Vreme"}
          style={{
            alignSelf: "center",
            color: Colors.Black,
            fontSize: width / 12,
          }}
        />
      </TouchableOpacity>

      <WeatherWindow
        ShowWeather={ShowWeather}
        WeatherInfo={WeatherInfo}
        height={height}
        width={width}
      />
    </View>
  );
};

const WeatherWindow = ({ height, width, ShowWeather, WeatherInfo }) => {
  if (ShowWeather)
    return (
      <ImageBackground
        source={{ uri: Image.resolveAssetSource(GrayBackground).uri }}
        resizeMode="cover"
        style={{
          width: width / 1.04,
          height: height / 2.4,
          marginBottom: 10,
        }}
      >
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{
            backgroundColor: "#CCCCCC",
            width: "100%",
            height: "100%",
            marginBottom: 10,
            position: "absolute",
          }}
        >
          {WeatherInfo.map((day) => (
            <WeatherBox
              key={day.id}
              WeatherInfo={day}
              height={height}
              width={width}
            />
          ))}
        </ScrollView>
      </ImageBackground>
    );
  else return null;
};

const WeatherBox = ({ WeatherInfo, height, width }) => {
  const weekday = [
    "Duminica",
    "Luni",
    "Marti",
    "Miercuri",
    "Joi",
    "Vineri",
    "Sambata",
  ];

  const d = new Date();
  let num = d.getDay() + WeatherInfo.id - 1;
  if (num >= 7) num -= 7;
  let dayOfTheWeek = weekday[num];

  return (
    <View
      style={{
        alignSelf: "center",
        alignItems: "center",
        borderWidth: WeatherInfo.id == 1 ? 2 : 0,
        borderRadius: 5,
        borderColor: "darkgray",
        width: width / 2.8,
        height: "100%",
      }}
    >
      <CTextHeader
        text={WeatherInfo.data}
        style={{
          color: "gray",
          fontSize: width / 34,
        }}
      />
      <CTextHeader
        text={dayOfTheWeek}
        style={{
          color: Colors.Black,
          fontSize: width / 20,
        }}
      />
      <ImageBackground
        source={{
          uri: `http://openweathermap.org/img/wn/${WeatherInfo.weatherIconID}@2x.png`,
        }}
        style={{
          height: height / 6.5,
          aspectRatio: 1,
        }}
      />
      <CTextHeader
        text={WeatherInfo.temperature + "°C"}
        style={{
          color: Colors.DarkGray,
          fontSize: width / 12,
        }}
      />
      <CTextBody
        text={WeatherInfo.description}
        style={{
          color: Colors.Black,
          fontSize: width / 19,
        }}
      />
    </View>
  );
};

export default WeatherPopUp;
