import React, { useState } from "react";
import { style } from "./styles";
import Logo from '../../assets/logo.png';

import { Text, View, Image, Alert} from 'react-native';
import { MaterialIcons, Octicons } from '@expo/vector-icons'
import { themes } from "../../global/themes";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { useNavigation, NavigationProp } from "@react-navigation/native";

export default function Login() {

    const navigation = useNavigation<NavigationProp<any>>();

    const [email, setEmail] = useState('mariana@gmail.com');
    const [senha, setSenha] = useState('123');
    const [showSenha, setShowSenha] = useState(false);
    const [loading, setLoading] = useState(false);

    async function getLogin(){
        try{
            setLoading(true)
            if(!email || !senha){
                return Alert.alert('Atenção', 'Informe os campos obrigatórios!')
            }
            
            navigation.reset({routes:[{name: 'BottomRoutes'}]})
            console.log('Logado com sucesso')
        } catch (err) {
            console.log(err)
        } finally {
            setLoading(false)
        }
    }

    return (
        <View style={style.container}>
            <View style={style.containerTop}>
                <Image source={Logo} style={style.logo} resizeMode="contain"/>
                <Text style={style.text}>FreelaLink</Text>
            </View>
            <View style={style.containerMed}>
                <Input 
                    value={email} 
                    onChangeText={setEmail} 
                    title="Email" 
                    IconRight={MaterialIcons} 
                    IconRightName="email"
                />
                <Input 
                    value={senha} 
                    onChangeText={setSenha} 
                    title="Senha" 
                    IconRight={Octicons} 
                    IconRightName={showSenha?'eye-closed':'eye'}
                    secureTextEntry={showSenha}
                    onIconRigthPress={() => setShowSenha(!showSenha)}
                />
            </View>
            <View style={style.containerBott}>
                <Button text="Entrar" loading={loading} onPress={()=>getLogin()} />
            </View>
            <Text style={style.textBottom}>Não tem uma conta? <Text style={{color:themes.colors.cyan}}>Crie agora!</Text></Text>
        </View>
    )
}