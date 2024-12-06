import React, { useState } from "react";
import { style } from "./styles";
import axios from 'axios';
import { Text, View, Image, Alert, Button, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { themes } from "../../global/themes";
import { Input } from "../../components/input";
import * as ImagePicker from 'expo-image-picker';


export default function CriarServ() {
    const [titulo, setTitulo] = useState('')
    const [tipo, setTipo] = useState(1)
    const [dataInicial, setDataInicial] = useState('')
    const [dataFinal, setDataFinal] = useState('')
    const [local, setLocal] = useState('')
    const [descricao, setDescricao] = useState('')
    const [imagem, setImagem] = useState<string | null>(null)
    const [solicitante, setSolicitante] = useState(0)

    // const escolherImagem = async () => {
    //     // Solicitar permissão para acessar a galeria
    //     const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    //     if (status !== 'granted') {
    //         Alert.alert('Permissão para acessar a galeria é necessária!');
    //         return;
    //     }

    //     const resultado = await ImagePicker.launchImageLibraryAsync({
    //         mediaTypes: ImagePicker.MediaTypeOptions.Images, // Use a opção correta
    //         allowsEditing: true,
    //         aspect: [4, 3],
    //         quality: 1,
    //     });

    //     if (!resultado.canceled) {
    //         setImagem(resultado.assets[0].uri);
    //     }
    // };

    const tirarFoto = async () => {
        // Solicitar permissão para acessar a câmera
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('Permissão para acessar a câmera é necessária!');
            return;
        }

        const resultado = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!resultado.canceled) {
            setImagem(resultado.assets[0].uri);
        }
    };

    const enviarForm = async () => {
        if (!titulo || !local || !descricao) {
            Alert.alert('Atenção', 'Todos os campos são obrigatórios!');
            return;
        }

        const formData = new FormData();
        formData.append('titulo', titulo);
        formData.append('descricao', descricao);
        formData.append('periodo', `${dataInicial} a ${dataFinal}`); // Ajuste conforme necessário
        formData.append('local', local);
        formData.append('data', new Date().toISOString()); // Ou a data que você deseja
        formData.append('tipo', tipo.toString());
        formData.append('qntd_pessoa', "1");
        formData.append('id_solicitante', "1");
        if (imagem) {
            formData.append('imagem', {
                uri: imagem,
                name: 'imagem.jpg', // Nome do arquivo
                type: 'image/jpeg', // Tipo do arquivo
            });
        }

        console.log(formData)

        try {
            const response = await fetch('http://192.168.202.36:3001/servico/cadastrar', {
                method: 'POST',
                body: formData,
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            const data = await response.json();
            console.log('Response:', data);

            if (response.ok) {
                Alert.alert('Sucesso', 'Serviço cadastrado com sucesso!');
                // Limpar os campos após o envio
                setTitulo('');
                setTipo(1);
                setDataInicial('');
                setDataFinal('');
                setLocal('');
                setDescricao('');
                setImagem(null);
            } else {
                Alert.alert('Erro', data.msg || 'Falha ao cadastrar serviço.');
            }
        } catch (error) {
            console.error("Error",error);
            Alert.alert('Erro', 'Falha ao cadastrar serviço.');
        }
    }

    return (
        <ScrollView style={{ backgroundColor: themes.colors.bgScreen }}>
            <View style={style.containerTop}>
                <Text style={{ fontSize: 20, color: themes.colors.cyan, textAlign: 'center', fontWeight: 'bold' }}>
                    Cadastrar serviço
                </Text>
            </View>
            <View style={style.containerForm}>
                <Input
                    title='Título'
                    value={titulo}
                    onChangeText={setTitulo}
                />
                <Text>Tipo</Text>
                <Picker
                    selectedValue={tipo}
                    onValueChange={(itemValue: number) => setTipo(itemValue)}
                >
                    <Picker.Item label="Temporário" value="1" />
                    <Picker.Item label="Fixo" value="2" />
                </Picker>
                <Input
                    title='Data inicial'
                    value={dataInicial}
                    onChangeText={setDataInicial}
                />
                <Input
                    title='Data final'
                    value={dataFinal}
                    onChangeText={setDataFinal}
                />
                <Input
                    title='Local'
                    value={local}
                    onChangeText={setLocal}
                />
                <Input
                    title='Descrição'
                    value={descricao}
                    onChangeText={setDescricao}
                    multiline
                    numberOfLines={4}
                />
                {/* <Button title="Escolher Imagem" onPress={escolherImagem} /> */}
                <Button title="Tirar Foto" onPress={tirarFoto} />
                {imagem && <Image source={{ uri: imagem }} style={{ width: 200, height: 200 }} />}

                <Button title="Cadastrar" onPress={enviarForm} />
            
            </View>
        </ScrollView>
    )
}