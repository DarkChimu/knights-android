import React, { useRef, useState, useEffect } from "react"
import { AppState, StyleSheet, Text, View } from "react-native"
import { hideNavigationBar } from 'react-native-navigation-bar-color'

const stateProvider = () => {
  const appState = useRef(AppState.currentState)
  const [appStateVisible, setAppStateVisible] = useState(appState.current)

  useEffect(() => {
    AppState.addEventListener("change", _handleAppStateChange)

    return () => {
      AppState.removeEventListener("change", _handleAppStateChange)
    }
  }, [])

  const _handleAppStateChange = (nextAppState) => {
    if (
      appState.current.match(/inactive|background/) &&
      nextAppState === "active"
    ) {
      console.log("App has come to the foreground!")
    }

    appState.current = nextAppState
    setAppStateVisible(appState.current)
    hideNavigationBar() 
    console.log("AppState", appState.current)
  }
}

export default stateProvider