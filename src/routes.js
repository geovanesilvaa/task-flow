import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "./pages/home";
import { Dashboard } from "./pages/dashboard";

import { Ionicons, FontAwesome5 } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export function Routes() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarShowLabel: false,
          headerShown: true,
          headerTitle: "Olá, Seja Bem-Vindo! 😁 ",
          tabBarIcon: ({ focused, size, color }) => {
            if (focused) {
              return <FontAwesome5 name="home" size={size} color={color} />;
            }

            return <Ionicons name="home-outline" size={size} color={color} />;
          },
        }}
      />

      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => {
            if (focused) {
              return (
                <Ionicons name="document-attach" size={size} color={color} />
              );
            }

            return (
              <Ionicons
                name="document-attach-outline"
                size={size}
                color={color}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
