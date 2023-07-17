import { useRef } from 'react'
import './App.css'
import { View, Text } from '../packages/design-core/src/components'

function App() {
  const ref = useRef<HTMLAnchorElement>(null)
  return (
    <View color="red">
      <View component="a" ref={ref} href="https://naver.com" color="red">
        Link
      </View>
      <Text component="span" size={24} color="red">
        Text
      </Text>
    </View>
  )
}

export default App
