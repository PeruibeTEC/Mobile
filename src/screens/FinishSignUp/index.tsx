import React, { 
  useEffect, 
  useState 
} from 'react';
import { 
  Alert,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  View
} from 'react-native';

import * as ImagePicker from 'expo-image-picker';
import Feather from '@expo/vector-icons/Feather';

import { useNavigation } from '@react-navigation/native';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import { 
  Title,
  Content,
  ImagePickerGallery,
  TextSelect,
  ImageProfile
} from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

export function FinishSignUp() {
  const navigation = useNavigation();
  const [image, setImage] = useState<string>();
  
  async function handleNavigateToHome() {
    if(!image) {
      Alert.alert(
        'Atenção !!',
        'Você não fez o upload de nenhuma foto de perfil, caso queira prosseguir mesmo assim, você terá uma foto de perfil padrão 🧐',
        [
          {
            text: "Cancelar",
            onPress: () => { return; },
            style: "cancel"
          },
          {
            text: "Prosseguir",
            onPress: () => navigation.navigate('Home')
          },
        ]
      );
    } else {
      navigation.navigate('Home');
    }
  }

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert(
            'Atenção !!',
            'Precisamos da sua permissão para poder continuar 😔'
          );
        }
      }
    })();
  }, []);

  const handlePickImageFromGallery = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <SafeAreaView>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Content>
          <Title>{`Finalize\no Cadastro`}</Title>
          <TextSelect>Escolha uma foto para o seu perfil</TextSelect>
            <TouchableOpacity 
              onPress={handlePickImageFromGallery}
              activeOpacity={0.5}
            >
              <ImagePickerGallery>
                {
                  !image ?
                    <Feather 
                      name="upload-cloud"
                      color="#b9b8b8"
                      size={36} 
                    />
                  : 
                  <>
                    <Feather 
                      name="upload-cloud"
                      color="#b9b8b8"
                      size={36} 
                      style={{ display: 'none'} }
                    />
                    <ImageProfile 
                      source={{ uri: image }}
                    />
                  </>
                }
              </ImagePickerGallery>
            </TouchableOpacity>
            <View style={{
              marginTop: 23,
              marginBottom: 24,
              width: '85%'
            }}>
              <Input 
                defaultValue=""
                name="lock"
                placeholder="Escreva uma pequena bio"
                secureTextEntry={true}
              />
            </View>

          <Button 
            onPress={handleNavigateToHome}
            title="Finalize o Cadastro" 
          />

        </Content>

      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
