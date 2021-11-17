import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Alert, Platform, TouchableOpacity } from 'react-native';

import * as ImagePicker from 'expo-image-picker';

import Header from '../../components/Header';
import Button from '../../../../components/Button';
import { sizes } from '../../../../utils/predefinedSizes';

import {
  Container,
  Content,
  Description,
  ImageProfile,
  Label,
  Login,
  LoginLink,
  TextArea,
  Upload,
  UploadIcon,
} from './styles';

interface IParams {
  typeProfile: string;
  name: string;
  email: string;
  password: string;
  isTourist: boolean;
  state?: string;
  city?: string;
}

const FinishRegistration: React.FC = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const routeParams = route.params as IParams;
  const { typeProfile, name, email, password, state, city } = routeParams;

  const [image, setImage] = useState<string>();

  async function handleNavigateToHome() {
    if (!image) {
      Alert.alert(
        'Atenção !!',
        'Você não fez o upload de nenhuma foto de perfil, caso queira prosseguir mesmo assim, você terá uma foto de perfil padrão 🧐',
        [
          {
            text: 'Cancelar',
            style: 'cancel',
          },
          {
            text: 'Prosseguir',
            onPress: () => navigation.navigate('Home'),
          },
        ],
      );
    } else {
      navigation.navigate('Home');
    }
  }

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert(
            'Atenção !!',
            'Precisamos da sua permissão para poder continuar 😔',
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
    <Container>
      <Header />

      <Content>
        <Description>Escolha uma foto para seu perfil</Description>

        <Upload onPress={handlePickImageFromGallery} activeOpacity={0.7}>
          {!image ? (
            <UploadIcon name="cloud-upload-outline" />
          ) : (
            <>
              <ImageProfile source={{ uri: image }} />
            </>
          )}
        </Upload>

        <TextArea
          multiline
          numberOfLines={5}
          placeholder="Escreva uma pequena bio"
        />

        <Button
          title="Finalizar cadastro"
          style={{ marginTop: sizes.height.dp40 }}
          onPress={() => handleNavigateToHome()}
        />
      </Content>

      <Login>
        <Label>Já tem um cadastro?</Label>
        <TouchableOpacity
          onPress={() => navigation.navigate('ChooseAnOptionSignIn')}
        >
          <LoginLink>Faça login</LoginLink>
        </TouchableOpacity>
      </Login>
    </Container>
  );
};

export default FinishRegistration;
