import { View, Text } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'react-native-paper'
import { decrement, increment, reset } from '../Redux/slice/counterSlice'

const Counter = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    return (
        <View>
            <Text style={{ fontSize: 30 }}>Counter :{count}</Text>
            <Button onPress={() => (dispatch(increment()))}>Increment</Button>
            <Button onPress={() => (dispatch(decrement()))}>Decrement</Button>
            <Button onPress={() => (dispatch(reset()))}>Reset</Button>
        </View>
    )
}

export default Counter
