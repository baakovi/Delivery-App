import { Text, View, ScrollView } from "react-native";
import { Header } from "../components/header";
import { Banner } from "../components/banner";
import { Search } from "../components/search";
import { Section } from "../components/section";
// Quando a importação é de um arquivo com 'export default', não é necessário o uso de chaves {}, caso contrário, se for apenas 'export function', é necessário

import Constants from 'expo-constants'

const statusBarHeight = Constants.statusBarHeight

export default function Index() {
  return (
    <ScrollView 
      style={{ flex: 1 }} 
      className="bg-slate-200" 
      showsVerticalScrollIndicator={false}>
      <View className="w-full px-4" style={{ marginTop: statusBarHeight + 8 }}>
        <Header/>

        <Banner/>

        <Search />
      </View>

        <Section 
          name="Comidas em alta"
          size="text-2xl"
          label="Veja mais"
          action={ () => console.log("Clicou no veja mais") }
        />

    </ScrollView>
  );
}
