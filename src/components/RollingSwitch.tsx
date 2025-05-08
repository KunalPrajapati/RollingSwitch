import { Pressable, SafeAreaView, Text, View } from 'react-native';
import React, { useState, useRef } from 'react';
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming, Easing } from 'react-native-reanimated';
import { standardSwitchStyles as styles } from './styles';

const RollingSwitch = ({
    value = false,
    onValueChange,
    containerStyle = {},
    ballStyle = {},
    onColor = '#4CAF50',
    offColor = '#607D8B',
    onTextColor = 'white',
    offTextColor = 'white',
    inactiveTextOpacity = 0.4,
    onText = 'ON',
    offText = 'OFF',
    indicatorColor = '#E53935',
    disabled = false,
}) => {
    const [isOn, setIsOn] = useState(value);
    const offset = useSharedValue(value ? 50 : 0);
    const rotation = useSharedValue(0);
    const rotationCount = useRef(0);


    React.useEffect(() => {
        if (value !== isOn) {
            setIsOn(value);
            offset.value = value ? 50 : 0;

            if (value) {
                rotationCount.current += 1;
            } else {
                rotationCount.current -= 1;
            }
            rotation.value = rotationCount.current;
        }
    }, [value, isOn, offset, rotation]);

    const toggleSwitch = () => {
        if (disabled) return;

        const newState = !isOn;
        setIsOn(newState);


        if (onValueChange) {
            onValueChange(newState);
        }


        offset.value = newState ? 50 : 0;


        if (newState) {

            rotationCount.current += 1;
        } else {

            rotationCount.current -= 1;
        }


        rotation.value = rotationCount.current;
    };

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                { translateX: withSpring(offset.value) },
                {
                    rotate: withTiming(`${rotation.value * 360}deg`, {
                        duration: 500,
                        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
                    }),
                },
            ],
        };
    });

    return (
        <SafeAreaView>
            <Pressable
                style={[
                    styles.rollingContainer,
                    { backgroundColor: isOn ? onColor : offColor },
                    containerStyle,
                    disabled && { opacity: 0.6 },
                ]}
                onPress={toggleSwitch}
                disabled={disabled}
            >
                {/* Background Text */}
                <Text
                    style={[
                        styles.backgroundText,
                        {
                            color: isOn ? onTextColor : `rgba(${hexToRgb(onTextColor)}, ${inactiveTextOpacity})`,
                            left: 10,
                        },
                    ]}
                >
                    {onText}
                </Text>
                <Text
                    style={[
                        styles.backgroundText,
                        {
                            color: isOn ? `rgba(${hexToRgb(offTextColor)}, ${inactiveTextOpacity})` : offTextColor,
                            right: 10,
                        },
                    ]}
                >
                    {offText}
                </Text>

                {/* Rolling Ball */}
                <Animated.View style={[styles.rollingBall, animatedStyle, ballStyle]}>
                    {/* Concentric circles */}
                    <View style={[styles.innerRing, { backgroundColor: isOn ? '#81C784' : '#90A4AE' }]} />

                    {/* Rotation indicator */}
                    <View style={[styles.rotationIndicator, { backgroundColor: indicatorColor }]} />
                </Animated.View>
            </Pressable>
        </SafeAreaView>
    );
};


const hexToRgb = (hex) => {

    hex = hex.replace('#', '');

    // Convert 3-digit hex to 6-digits
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }

    // Parse the hex values
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    return `${r}, ${g}, ${b}`;
};

export default RollingSwitch;