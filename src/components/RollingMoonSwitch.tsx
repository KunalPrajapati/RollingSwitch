import { Pressable, SafeAreaView, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { moonSwitchStyles as styles } from './styles';

const RollingMoonSwitch = ({
    value = false,
    onValueChange,
    containerStyle = {},
    ballStyle = {},
    dayColor = '#87CEEB',
    nightColor = '#1a237e',
    disabled = false,
}) => {
    const [isOn, setIsOn] = useState(value);
    const offset = useSharedValue(value ? 50 : 0);


    useEffect(() => {
        if (value !== isOn) {
            setIsOn(value);
            offset.value = value ? 50 : 0;
        }
    }, [value, isOn, offset]);

    const toggleSwitch = () => {
        if (disabled) return;

        const newState = !isOn;
        setIsOn(newState);


        if (onValueChange) {
            onValueChange(newState);
        }

        offset.value = newState ? 50 : 0;
    };

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: withSpring(offset.value),
                },
            ],
        };
    });

    const renderStars = () => {
        return (
            <>
                <View style={[styles.star, { top: 10, left: 15 }]} />
                <View style={[styles.star, { top: 20, left: 30 }]} />
                <View style={[styles.star, { top: 8, left: 45 }]} />
                <View style={[styles.star, { top: 30, left: 65 }]} />
                <View style={[styles.star, { top: 15, left: 80 }]} />
            </>
        );
    };

    const renderClouds = () => {
        return (
            <>
                <View style={[styles.cloud, { top: 10, right: 15, width: 25, height: 12 }]} />
                <View style={[styles.cloud, { top: 25, right: 35, width: 20, height: 10 }]} />
            </>
        );
    };

    const renderMoon = () => {
        return (
            <Animated.View style={[styles.rollingBall, styles.moon, animatedStyle, ballStyle]}>
                <View style={[styles.crater, { top: 8, left: 10, width: 8, height: 8 }]} />
                <View style={[styles.crater, { top: 20, left: 15, width: 6, height: 6 }]} />
                <View style={[styles.crater, { top: 15, left: 25, width: 10, height: 10 }]} />
            </Animated.View>
        );
    };

    const renderSun = () => {
        return (
            <Animated.View style={[styles.rollingBall, animatedStyle, ballStyle]}>
                <View style={styles.sunCore} />
                <View style={[styles.sunRayCircle, { width: 58, height: 58, opacity: 0.3 }]} />
                <View style={[styles.sunRayCircle, { width: 52, height: 52, opacity: 0.4 }]} />
                <View style={[styles.sunRayCircle, { width: 46, height: 46, opacity: 0.6 }]} />
            </Animated.View>
        );
    };

    return (
        <SafeAreaView>
            <Pressable
                style={[
                    styles.rollingContainer,
                    { backgroundColor: isOn ? nightColor : dayColor },
                    containerStyle,
                    disabled && { opacity: 0.6 },
                ]}
                onPress={toggleSwitch}
                disabled={disabled}
            >
                {/* Stars (visible only at night) */}
                {isOn && renderStars()}

                {/* Clouds (visible only during day) */}
                {!isOn && renderClouds()}

                {/* Sun/Moon Toggle */}
                {isOn ? renderMoon() : renderSun()}
            </Pressable>
        </SafeAreaView>
    );
};

export default RollingMoonSwitch;