import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSearchParams, Stack } from 'expo-router'

const Item = () => {
  const { id } = useSearchParams()
  return (
    <View>
      <Stack.Screen
        options={{
          title: `Item ${id}`,
        }}
      />
      <Text style={{ fontSize: 60 }}>ID: {id}</Text>
    </View>
  )
}

export default Item

const styles = StyleSheet.create({})