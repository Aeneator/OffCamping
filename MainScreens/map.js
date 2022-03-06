import React, { useState, useEffect } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  useWindowDimensions,
  StatusBar,
  View,
  Image,
} from "react-native";

import MapView, { Marker, Circle } from "react-native-maps";

import { getDistance } from "geolib";

import locationMarkerData from "../MapFiles/LocationMarkerData.js";
import SelectMarkerPopUp from "../MapFiles/SelectMarkerPopUp.js";

import SearchAreaButton from "../MapFiles/SearchAreaButton.js";
import MarkerScreen from "../MapFiles/MarkerScreenFiles/MarkerScreen.js";

import OptionsButton from "../MapFiles/OptionsButton.js";
import OptionsScreen from "../MapFiles/OptionsScreen.js";

let UserZoom = 1;
let UserRegion = { latitude: 46.0243, longitude: 24.799112 };

let CenterPoint = { latitude: 0, longitude: 0 };

let cont = 0;

function MapScreen({ route, navigation }) {
  const { height, width } = useWindowDimensions();

  // Options Menu
  const [OptionsVisible, setOptionsVisible] = useState(false);
  const [OptionsBG, setOptionsBG] = useState(true);
  const [SelectedMapType, setSelectedMapType] = useState("standard");

  // Marker PopUps
  const [MarkerPopUp, setMarkerPopUp] = useState(false);
  const [FullLocationPopUp, setFullLocationPopUp] = useState(false);

  // Markers
  const [Radius, setRadius] = useState(50000); // Raza este in metri
  const [UserCenter, setUserCenter] = useState({ latitude: 0, longitude: 0 });
  const [MarkerInfo, setMarkerInfo] = useState({
    title: "",
    description: "",
    image: "",
    latitude: 0,
    longitude: 0,
    facilitati: {
      acces_apa: false,
      acces_foc: false,
      acces_electricitate: false,
      acces_dusuri: false,
      acces_parcare: false,
      acces_wifi: false,
    },
  });

  let firstLoad = route.params.firstLoad;

  console.log(cont++);

  if (firstLoad) {
    UserRegion = {
      latitude: route.params.latitudine,
      longitude: route.params.longitudine,
    };
    setUserCenter({ latitude: 0, longitude: 0 });
  }

  if (UserCenter.latitude != 0 && UserCenter.longitude != 0) {
    CenterPoint = {
      latitude: UserCenter.latitude,
      longitude: UserCenter.longitude,
    };
  } else {
    CenterPoint = {
      latitude: route.params.latitudine,
      longitude: route.params.longitudine,
    };
  }

  UserZoom = firstLoad ? route.params.zoom : UserZoom;

  const mapRegion = {
    latitude: UserRegion.latitude,
    longitude: UserRegion.longitude,
    latitudeDelta: UserZoom,
    longitudeDelta: UserZoom * (width / height),
  };

  route.params.firstLoad = false;

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={styles.map}
        region={mapRegion}
        onRegionChangeComplete={(region) => {
          UserZoom = region.latitudeDelta;
          UserRegion.latitude = region.latitude;
          UserRegion.longitude = region.longitude;
        }}
        onPress={() => {
          if (MarkerPopUp) setMarkerPopUp(false);
        }}
        moveOnMarkerPress={false}
        zoomEnabled={true}
        pitchEnabled={true}
        showsUserLocation={true}
        mapType={SelectedMapType}
      >
        {locationMarkerData.map((data) => {
          if (
            getDistance(
              CenterPoint,
              { latitude: data.latitudine, longitude: data.longitudine },
              10
            ) <= Radius
          ) {
            return (
              <Marker
                key={data.id}
                coordinate={{
                  latitude: data.latitudine,
                  longitude: data.longitudine,
                }}
                title={data.nume}
                onPress={() => {
                  setMarkerPopUp(true);
                  setMarkerInfo({
                    title: data.nume,
                    description: data.descriere,
                    image: data.imagine,
                    latitude: data.latitudine,
                    longitude: data.longitudine,
                    facilitati: {
                      acces_apa: data.facilitati.acces_apa,
                      acces_foc: data.facilitati.acces_foc,
                      acces_electricitate: data.facilitati.acces_electricitate,
                      acces_dusuri: data.facilitati.acces_dusuri,
                      acces_parcare: data.facilitati.acces_parcare,
                      acces_wifi: data.facilitati.acces_wifi,
                    },
                  });
                }}
              ></Marker>
            );
          } else return null;
        })}
        <Circle
          center={{
            latitude: CenterPoint.latitude,
            longitude: CenterPoint.longitude,
          }}
          radius={Radius}
          strokeWidth={2}
          strokeColor="rgba(0, 0, 0, 0.15)"
          fillColor="rgba(0,0,0,0)"
        />
      </MapView>

      <View
        // TOP BAR
        style={{
          height: height / 11,
          width: width,

          marginTop: StatusBar.currentHeight * 1.1,
          position: "absolute",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <OptionsButton
          height={height}
          width={width}
          OptionsBG={OptionsBG}
          setOptionsBG={setOptionsBG}
          onpress={setOptionsVisible}
        />
      </View>

      <View
        // BOTTOM BAR
        style={{ flex: 1, justifyContent: "flex-end" }}
      >
        <SearchAreaButton
          MarkerPopUp={MarkerPopUp}
          setUserCenter={setUserCenter}
          UserRegion={UserRegion}
          height={height}
          width={width}
        />

        {SelectMarkerPopUp(
          MarkerPopUp,
          setMarkerPopUp,
          setFullLocationPopUp,
          MarkerInfo,
          height,
          width
        )}
      </View>
      <MarkerScreen
        FullLocationPopUp={FullLocationPopUp}
        setFullLocationPopUp={setFullLocationPopUp}
        MarkerInfo={MarkerInfo}
        width={width}
        height={height}
      />
      <OptionsScreen
        OptionsVisible={OptionsVisible}
        setOptionsVisible={setOptionsVisible}
        setRadius={setRadius}
        Radius={Radius}
        OptionsBG={OptionsBG}
        setOptionsBG={setOptionsBG}
        SelectedMapType={SelectedMapType}
        setSelectedMapType={setSelectedMapType}
        width={width}
        height={height}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    position: "absolute",
  },
  slider: {
    flex: 1,
    alignSelf: "flex-end",
    paddingRight: "2%",
  },
});

export default MapScreen;
