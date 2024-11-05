import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderComp from '@/components/Header'

const Favourite = () => {
  return (
    <View>
            <HeaderComp />

      <Text>Favourite</Text>
    </View>
  )
}

export default Favourite

const styles = StyleSheet.create({})