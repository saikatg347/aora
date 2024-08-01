import { View, Text, Image } from "react-native";
import { Tabs, Redirect } from "expo-router";

import { icons } from "../../constants";

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className="items-center justify-center gap-2">
      <Image
        source={icon}
        resizeMode="contain"
        style={{
          flex: 1,
          height: undefined,
          width: undefined,
        }}
        tintColor={color}
        className="w-6 h-6"
      />
      <Text
        className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};

const TabItems = [
  { name: "home", title: "Home", icon: icons.home, iconName: "Home" },
  {
    name: "bookmark",
    title: "Bookmark",
    icon: icons.bookmark,
    iconName: "Bookmark",
  },
  {
    name: "create",
    title: "Create",
    icon: icons.plus,
    iconName: "Create",
  },
  {
    name: "profile",
    title: "Profile",
    icon: icons.profile,
    iconName: "Profile",
  },
];

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#ffa001",
          tabBarInactiveTintColor: "#cdcde0",
          tabBarStyle: {
            backgroundColor: "#161622",
            borderTopWidth: 1,
            borderTopColor: "#232533",
            height: 40,
          },
        }}
      >
        {TabItems.map((item, index) => (
          <Tabs.Screen
            key={index}
            name={item.name}
            options={{
              title: item.title,
              headerShown: false,
              tabBarIcon: ({ color, focused }) => (
                <TabIcon
                  icon={item.icon}
                  color={color}
                  name={item.iconName}
                  focused={focused}
                />
              ),
            }}
          />
        ))}
      </Tabs>
    </>
  );
};

export default TabsLayout;
