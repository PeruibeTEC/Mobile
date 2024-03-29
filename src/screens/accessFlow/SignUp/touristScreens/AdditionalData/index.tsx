import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import axios from 'axios';

import { Picker } from '@react-native-community/picker';
import { ItemValue } from '@react-native-community/picker/typings/Picker';
import { Checkbox } from 'react-native-paper';

import Header from '../../../components/Header';
import Button from '../../../../../components/Button';
import { sizes } from '../../../../../utils/predefinedSizes';
import colors from '../../../../../styles/colors';

import {
  Caption,
  CheckboxContainer,
  CheckboxText,
  Container,
  ContainerPicker,
  Content,
  Description,
  Label,
  Login,
  LoginLink,
  PickerStyle,
} from './styles';

interface IStateProps {
  nome: string;
  id: number;
}

interface IParams {
  typeProfile: string;
  name: string;
  email: string;
  password: string;
}

const AdditionalDataTourist: React.FC = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const routeParams = route.params as IParams;
  const { typeProfile, name, email, password } = routeParams;

  const [isTourist, setIsTourist] = useState(false);

  const [stateIndexSelected, setStateIndexSelected] = useState<ItemValue>(12);
  const [citySelected, setCitySelected] = useState<ItemValue>();

  const [states, setStates] = useState<IStateProps[]>();
  const [cities, setCities] = useState<IStateProps[]>();

  useEffect(() => {
    async function getStatesFromBrazil() {
      const { data } = await axios.get(
        'https://servicodados.ibge.gov.br/api/v1/localidades/estados',
      );

      setStates(data);
    }

    getStatesFromBrazil();
  }, []);

  useEffect(() => {
    async function getCitiesFromStates() {
      const { data } = await axios.get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${stateIndexSelected}/municipios`,
      );

      setCities(data);
    }

    getCitiesFromStates();
  }, [stateIndexSelected]);

  const getTheNameOfTheStateAndCity = async () => {
    const state = await axios.get(
      `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${stateIndexSelected}`,
    );

    const city = await axios.get(
      `https://servicodados.ibge.gov.br/api/v1/localidades/municipios/${citySelected}`,
    );

    return { state: state.data.nome, city: city.data.nome };
  };

  return (
    <Container>
      <Header />

      <Content>
        <Description>
          Estamos quase lá! Nos informe em qual estado e cidade você reside
        </Description>

        <CheckboxContainer
          activeOpacity={0.8}
          onPress={() => {
            setIsTourist(!isTourist);
          }}
        >
          <Checkbox
            color={colors.light.primary500}
            uncheckedColor={colors.light.gray400}
            status={isTourist ? 'checked' : 'unchecked'}
            onPress={() => {
              setIsTourist(!isTourist);
            }}
          />
          <CheckboxText>Sou estrangeiro</CheckboxText>
        </CheckboxContainer>

        <ContainerPicker>
          <Caption>Estado:</Caption>
          <PickerStyle>
            <Picker
              selectedValue={stateIndexSelected}
              onValueChange={itemValue => {
                setStateIndexSelected(itemValue);
              }}
            >
              {states &&
                states.map(state => (
                  <Picker.Item
                    label={state.nome}
                    value={state.id}
                    key={state.id}
                    color={colors.light.gray500}
                  />
                ))}
            </Picker>
          </PickerStyle>
        </ContainerPicker>

        <ContainerPicker style={{ marginTop: sizes.height.dp20 }}>
          <Caption>Cidade:</Caption>
          <PickerStyle>
            <Picker
              selectedValue={citySelected}
              onValueChange={itemValue => {
                setCitySelected(itemValue);
              }}
            >
              {cities &&
                cities.map(city => (
                  <Picker.Item
                    label={city.nome}
                    value={city.id}
                    key={city.id}
                    color={colors.light.gray500}
                  />
                ))}
            </Picker>
          </PickerStyle>
        </ContainerPicker>

        <Button
          title="Continuar"
          style={{ marginTop: sizes.height.dp40 }}
          onPress={async () => {
            const { state, city } = await getTheNameOfTheStateAndCity();

            navigation.navigate('FinishRegistration', {
              typeProfile,
              name,
              email,
              password,
              state,
              city,
              isTourist: true,
            });
          }}
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

export default AdditionalDataTourist;
