import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import tracks from '../helpers/tracksProvider'
import TrackPlayer, { Capability, State, useProgress  } from 'react-native-track-player'
import Slider from '@react-native-community/slider'
import Icon from 'react-native-vector-icons/FontAwesome5'


const AudioPlayer = props => {

    const [isTrackPlayerInit, setIsTrackPlayerInit] = useState(false)
    const [isPlaying, setIsPlaying] = useState(false)
    const [sliderValue, setSliderValue] = useState(0)
    const [isSeeking, setIsSeeking] = useState(false)

    const trackPlayerInit = async trackId => {
        try {
            TrackPlayer.updateOptions({
                stopWithApp: true,
                capabilities: [
                    Capability.Play,
                    Capability.Pause,
                    Capability.Stop
                ],
                compactCapabilities: [
                    Capability.Play,
                    Capability.Pause,
                    Capability.Stop 
                ]
            })
    
            await TrackPlayer.setupPlayer()
            
            const selectedTrack = tracks.filter(element => element.id === trackId)
            
            await TrackPlayer.add(selectedTrack)
        } catch (error) {
            console.log(error)
        }
    }

    const { position, duration } = useProgress()

    useEffect(() => {
        trackPlayerInit()
    }, [])


    useEffect(() => {
        if (!isSeeking && position && duration) {
            setSliderValue(position / duration)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [position, duration])

    const onButtonPressed = trackId => {

        if (isPlaying === false) {
            trackPlayerInit(trackId)
            TrackPlayer.play()
            setIsPlaying(true)
        } else {
            TrackPlayer.pause()
            TrackPlayer.stop()
            setIsPlaying(false)
        }
    }

    const slidingStarted = () => {
        setIsSeeking(true)
    }


    const slidingCompleted = async value => {
        await TrackPlayer.seekTo(value * duration)
        await setSliderValue(value)
        await setIsSeeking(false)
    }

    return (
        <View style={{ flex: 1, flexDirection: 'row', marginLeft: '10%', marginTop: '2%' }}>
            <Icon
                name={isPlaying ? 'stop' : 'play'}
                size={24}
                style={{ top: '3%' }}
                onPress={() => onButtonPressed(props.track)} />
            <Slider
                style={{ width: '80%', height: 40 }}
                minimumValue={0}
                maximumValue={1}
                value={sliderValue}
                minimumTrackTintColor="#111000"
                maximumTrackTintColor="#000000"
                onSlidingStart={slidingStarted}
                onSlidingComplete={slidingCompleted}
            />
        </View>
    )
}

export default AudioPlayer
