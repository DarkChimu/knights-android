import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import tracks from '../helpers/tracksProvider'
import TrackPlayer from 'react-native-track-player'
import { useTrackPlayerProgress } from 'react-native-track-player/lib/hooks'
import { useTrackPlayerEvents } from 'react-native-track-player/lib/hooks'
import { TrackPlayerEvents, STATE_PLAYING } from 'react-native-track-player'
import Slider from '@react-native-community/slider'
import Icon from 'react-native-vector-icons/FontAwesome5'


const AudioPlayer = props => {

    const [isTrackPlayerInit, setIsTrackPlayerInit] = useState(false)
    const [isPlaying, setIsPlaying] = useState(false)
    const [sliderValue, setSliderValue] = useState(0)
    const [isSeeking, setIsSeeking] = useState(false)

    const trackPlayerInit = async trackId => {
        await TrackPlayer.setupPlayer()
        TrackPlayer.updateOptions({
            stopWithApp: true,
            capabilities: [
                TrackPlayer.CAPABILITY_PLAY,
                TrackPlayer.CAPABILITY_PAUSE,
                TrackPlayer.CAPABILITY_STOP
            ],
            compactCapabilities: [
                TrackPlayer.CAPABILITY_PLAY,
                TrackPlayer.CAPABILITY_PAUSE,
                TrackPlayer.CAPABILITY_STOP
            ]
        })
        const selectedTrack = await tracks.filter(element => element.id === trackId)
        await TrackPlayer.add(selectedTrack)
        return true
    }

    const { position, duration } = useTrackPlayerProgress(250)

    useEffect(() => {
        const startPlayer = async () => {
            let isInit = await trackPlayerInit(props.track)
            setIsTrackPlayerInit(isInit)
        }
        startPlayer()
    }, [])


    useEffect(() => {
        if (!isSeeking && position && duration) {
            setSliderValue(position / duration)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [position, duration])

    useTrackPlayerEvents([TrackPlayerEvents.PLAYBACK_STATE], event => {
        if (event.state === STATE_PLAYING) {
            setIsPlaying(true)
        } else {
            setIsPlaying(false)
        }
    })

    const onButtonPressed = async trackId => {

        if (!isPlaying) {
            trackPlayerInit(trackId)
            await TrackPlayer.play()
            setIsPlaying(true)
        } else {
            await TrackPlayer.destroy()
            setIsPlaying(false)
        }
    }

    const slidingStarted = () => {
        setIsSeeking(true)
    }


    const slidingCompleted = async value => {
        await TrackPlayer.seekTo(value * duration)
        setSliderValue(value)
        setIsSeeking(false)
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
