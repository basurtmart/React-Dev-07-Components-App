import { useThemeColor } from '@/hooks/use-theme-color';
import React from 'react';
import { Platform, Pressable, View } from 'react-native';
import { Switch } from 'react-native-gesture-handler';
import ThemedText from './ThemedText';

interface Props {
    text?: string,
    value: boolean;
    className?: string;

    onValueChangenge: (value: boolean) => void;
}

const isAndroid = Platform.OS === 'android';

const ThemedSwich = ({ text, value, className, onValueChangenge }: Props) => {
    const switchActiveColor = useThemeColor({}, 'primary');

    return (
        <Pressable
            className={`flex flex-row mx-2 items-center justify-between active:opacity-80 ${className}`}
            onPress={() => onValueChangenge(!value)}>
            {text ? <ThemedText type='h2'>{text}</ThemedText> : <View />}
            <Switch
                value={value}
                onValueChange={onValueChangenge}
                thumbColor={isAndroid ? switchActiveColor : ''}
                // ios_backgroundColor={value ? 'green' : 'red'}
                trackColor={{
                    false: 'red',
                    true: switchActiveColor,
                }} />
        </Pressable>
    )
}

export default ThemedSwich