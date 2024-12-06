import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../pages/login";
import BottomRoutes from "./bottom.routes";
import { themes } from "../global/themes";
import DetailsServ from "../pages/detailsServ";

export default function Routes() {
    const Stack = createStackNavigator()

    return (
        <Stack.Navigator initialRouteName="Login" screenOptions={{
            headerShown: false,
            cardStyle: {
                backgroundColor: themes.colors.bgScreen
            }
        }}>
            <Stack.Screen
                name="Login"
                component={Login}
            />
            <Stack.Screen
                name="Details"
                component={DetailsServ}
            />
            <Stack.Screen
                name="BottomRoutes"
                component={BottomRoutes}
            />

        </Stack.Navigator>
    )
}