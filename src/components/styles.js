import { StyleSheet } from 'react-native';

export const switchStyles = StyleSheet.create({
    rollingContainer: {
        width: 100,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        position: 'relative',
    },
    rollingBall: {
        width: 40,
        height: 40,
        borderRadius: 20,
        position: 'absolute',
        left: 5,
        top: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 6,
    },
});

export const standardSwitchStyles = StyleSheet.create({
    ...switchStyles,
    rollingContainer: {
        ...switchStyles.rollingContainer,
        flexDirection: 'row',
    },
    innerRing: {
        width: 28,
        height: 28,
        borderRadius: 14,
        justifyContent: 'center',
        alignItems: 'center',
    },
    centerDot: {
        width: 16,
        height: 16,
        borderRadius: 8,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    rotationIndicator: {
        position: 'absolute',
        width: 4,
        height: 12,
        backgroundColor: '#E53935', // Red indicator
        borderRadius: 2,
        top: 4, // Position at top of circle
    },
    backgroundText: {
        position: 'absolute',
        fontSize: 16,
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.3)',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 2,
        zIndex: 0,
    },
});

export const moonSwitchStyles = StyleSheet.create({
    ...switchStyles,
    moon: {
        backgroundColor: '#fdd835', // Moon yellow color
        shadowColor: '#fdd835',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.5,
        shadowRadius: 8,
        elevation: 5,
    },
    crater: {
        backgroundColor: '#f9a825', // Slightly darker yellow for craters
        borderRadius: 10,
        position: 'absolute',
    },
    star: {
        width: 2,
        height: 2,
        backgroundColor: 'white',
        borderRadius: 1,
        position: 'absolute',
    },
    sunCore: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#FF9800', // Orange sun
        position: 'absolute',
        shadowColor: '#FF9800',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.8,
        shadowRadius: 10,
        elevation: 8,
    },
    sunRayCircle: {
        position: 'absolute',
        borderRadius: 30,
        backgroundColor: '#FFEB3B', // Yellow rays
    },
    cloud: {
        position: 'absolute',
        backgroundColor: 'white',
        borderRadius: 10,
    },
});