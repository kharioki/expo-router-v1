import { Stack } from "expo-router";

export default function () {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#000",
        },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="about"
      // options={{
      //   presentation: "modal",
      //   headerShown: false,
      // }}
      />
    </Stack>
  )
}