import React from 'react';
import { Pressable } from 'react-native';
import { Switch } from 'react-native-gesture-handler';
import ThemedText from './ThemedText';

interface Props {
    text?: string,
    value: boolean;
    className?: string;

    onValueChangenge: (value: boolean) => void;
}

const ThemedSwich = ({ text, value, className, onValueChangenge }: Props) => {
    return (
        <Pressable
            className={`flex flex-row items-center justify-between active:opacity-80 ${className}`}>
            {text && <ThemedText type='h2'>{text}</ThemedText>}
            <Switch
                value={value}
                onValueChange={onValueChangenge} />
        </Pressable>
    )
}

export default ThemedSwich