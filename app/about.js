import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSearchParams, useRouter, Stack } from 'expo-router'

const about = () => {
  const { id } = useSearchParams()
  const router = useRouter()
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: 'About',
        }}
      />
      <Text style={styles.text}>About page</Text>
      <Text style={styles.text}>ID: {id}</Text>
      {/* <Button onPress={() => router.back()} style={styles.button}>
        Go back
      </Button> */}
    </View>
  )
}

export default about

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  text: {
    fontSize: 60
  },
  button: {

  }
})