import { StatusBar } from "expo-status-bar";
import { Redirect, router } from "expo-router";
import { View, Text, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../constants";
import { CustomButton, Loader } from "../components";
import { useGlobalContext } from "../context/GlobalProvider";

const Welcome = () => {
  const { loading, isLogged } = useGlobalContext();

  if (!loading && isLogged) return <Redirect href="/home" />;

  return (
    <SafeAreaView className="bg-primary h-full">
      <Loader isLoading={loading} />

      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="w-full flex justify-center items-center px-4 m-auto">
        <View className="flex flex-row align-items-center m-auto">
            <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[80px] h-[80px]"
          />
          <Text className="text-5xl font-semibold text-white font-psemibold pt-5">Colonial</Text>
        </View>

          

          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Ingresa a nuestra pagina {"\n"}
              para realizar compras{"\n "}
              con nosotros{" "}
            </Text>
          </View>

          <CustomButton
            title="Continuar con correo"
            handlePress={() => router.push("/sign-in")}
            containerStyles="w-full mt-7 bg-green-500"
          />
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default Welcome;
