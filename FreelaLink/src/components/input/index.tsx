import React, { forwardRef, LegacyRef } from "react";

import { style } from './styles';
import { View, TextInput, Text, TextInputProps, TouchableOpacity } from 'react-native';
import { MaterialIcons, FontAwesome, Octicons } from '@expo/vector-icons';
import { themes } from "../../global/themes";

type IconComponent = React.ComponentType<React.ComponentProps<typeof MaterialIcons>> |
    React.ComponentType<React.ComponentProps<typeof FontAwesome>> |
    React.ComponentType<React.ComponentProps<typeof Octicons>>;

type Props = TextInputProps & {
    IconLeft?: IconComponent,
    IconRight?: IconComponent,
    IconLeftName?: string,
    IconRightName?: string,
    title?: string,
    onIconLeftRight?: () => void,
    onIconRigthPress?: () => void
}

export const Input = forwardRef((Props: Props, ref: LegacyRef<TextInput> | null) => {
    const { IconLeft, IconRight, IconLeftName, IconRightName, title, onIconLeftRight, onIconRigthPress, ...rest } = Props

    const calculateSizeWidth = () => {
        if (IconLeft && IconRight) {
            return '80%'
        } else if (IconLeft || IconRight) {
            return '90%'
        } else {
            return '100%'
        }
    }

    const calculateSizePaddingLeft = () => {
        if (IconLeft && IconRight) {
            return 10
        } else if (IconLeft || IconRight) {
            return 10
        } else {
            return 20
        }
    }

    return (
        <>
            {title&&<Text style={style.titleInput}>{title}</Text>}
            <View style={[style.boxInput, {paddingLeft:calculateSizePaddingLeft()}]}>
                {IconLeft && IconLeftName && (
                    <TouchableOpacity onPress={onIconLeftRight} style={{ width:'10%' }}>
                        <IconLeft name={IconLeftName as any} size={20} color={themes.colors.bgLogin} style={{ width: '100%' }} />
                    </TouchableOpacity>
                )}
                <TextInput style={[ style.input, {width:calculateSizeWidth()} ]} {...rest}/>
                {IconRight && IconRightName && (
                    <TouchableOpacity onPress={onIconRigthPress}>
                        <IconRight name={IconRightName as any} size={20} color={themes.colors.bgLogin} style={{ width: '100%' }} />
                    </TouchableOpacity>
                )}
            </View>
        </>
    )
})