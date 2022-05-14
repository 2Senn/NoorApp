import { Icon } from "native-base";
import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import Svg, 
{ 
  RadialGradient, 
  Defs, 
  Stop, 
  Rect, 
} from "react-native-svg"
import { Feather } from "@expo/vector-icons"
import { HEIGHT, WIDTH } from "./goo";
import { Italiana_400Regular, useFonts } from "@expo-google-fonts/italiana"



export const tweakColor = (color: string, deg: number) => {
	var usePound = false;
	
  //check if hash is present in color value
  if (color[0] == "#") {
		color = color.slice(1);
		usePound = true;
	}

	var num = parseInt(color, 16);

	var red = (num >> 16) + deg;
	if (red > 255) {
		red = 255;
	} else if (red < 0) {
		red = 0;
	}
	var blue = ((num >> 8) & 0x00FF) + deg;
	if (blue > 255) {
		blue = 255;
	} else if (blue < 0) {
		blue = 0;
	}
	var green = (num & 0x0000FF) + deg;
	if (green > 255) {
		green = 255;
	} else if (green < 0) {
		green = 0;
	}
	return (usePound ? "#" : "") + (green | (blue << 8) | (red << 16)).toString(16);
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 30,
    padding: 30,
    paddingTop: 50,
    alignItems: "center",
  },
  title: {
    fontSize: 48,
    color: "black",
    textAlign: "center",
    marginBottom: 16,
    fontFamily: "Italiana_400Regular"
  },
  description: {
    fontSize: 18,
    color: "black",
    textAlign: "center",
  },
});

interface PageProps {
  page: {
    color: string;
    title: string;
    description: string;
    icon: string;
  };
}

const Page = ({
  page: { color, title, description, icon },
}: PageProps) => {
  return (
    <>
      <Svg style={[StyleSheet.absoluteFill]}>
        <Defs>
          <RadialGradient id="gradient" cx="50%" cy="35%">
            <Stop offset="0%" stopColor={tweakColor(color, -50)} />
            <Stop offset="100%" stopColor={color} />
          </RadialGradient>
        </Defs>
        <Rect x={0} y={0} width={WIDTH} opacity="1" height={HEIGHT} rx={50} fill="url(#gradient)" />
      </Svg>
      <View style={styles.container}>
        <View style={{alignItems: 'flex-start' }}>
          <Icon as={Feather} name={icon} size="lg"  />
        </View>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
    </>
  );
};

export default Page;

