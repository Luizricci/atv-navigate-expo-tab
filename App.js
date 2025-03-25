import React from "react";
import { NavigationContainer } from "@react-navigation/native";

//import Drawer from "./navigation/drawerNavigator";
import Tab from "./navigation/tabNavigator";


export default function App() {
    return (
        <NavigationContainer>
            {/*<Drawer />*/}
            <Tab />
        </NavigationContainer>
    );
}