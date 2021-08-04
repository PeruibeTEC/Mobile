import React, { ReactElement, useEffect, useState } from 'react';
import { KeyboardAvoidingView, SafeAreaView } from 'react-native';
import axios from 'axios';

import { Picker } from '@react-native-community/picker';
import { ItemValue } from '@react-native-community/picker/typings/Picker';
import { useNavigation } from '@react-navigation/native';

import { Button } from '../../components/Button';

import {
  Title,
  Content,
  ContainerPicker,
  Subtitle,
  Caption,
  PickerStyle,
} from './styles';

export function ChooseYourCity(): ReactElement {
  interface IStateProps {
    nome: string;
    id: number;
  }

  const navigation = useNavigation();
  const [stateIndexSelected, setStateIndexSelected] = useState<ItemValue>(35);

  const [citySelected, setCitySelected] = useState<ItemValue>();

  const [states, setStates] = useState();
  const [cities, setCities] = useState();

  async function handleNavigateToSignUp() {
    navigation.navigate('SignUp');
  }

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

  return (
    <SafeAreaView>
      <KeyboardAvoidingView>
        <Content>
          <Title>{`Continue\nse Cadastrando `}</Title>
          <Subtitle>
            {`Informe sua cidade\n Assim conseguimos ter um controle\nmaior sobre quem visita Peruíbe`}
          </Subtitle>

          <ContainerPicker style={{ marginTop: 34 }}>
            <Caption>Estado:</Caption>
            <PickerStyle>
              <Picker
                style={{
                  marginRight: 8,
                  color: 'black',
                  fontWeight: 'bold',
                }}
                selectedValue={stateIndexSelected}
                onValueChange={(itemValue, itemIndex) => {
                  setStateIndexSelected(itemValue);
                }}
              >
                {states &&
                  states.map((state: IStateProps, index: number) => (
                    <Picker.Item
                      label={state.nome}
                      value={state.id}
                      key={index}
                    />
                  ))}
              </Picker>
            </PickerStyle>
          </ContainerPicker>

          <ContainerPicker>
            <Caption>Cidade:</Caption>
            <PickerStyle style={{ marginBottom: 34 }}>
              <Picker
                style={{ marginRight: 8 }}
                selectedValue={citySelected}
                onValueChange={(itemValue, itemIndex: number) => {
                  setCitySelected(itemValue);
                }}
              >
                {cities &&
                  cities.map((city: IStateProps, index: number) => (
                    <Picker.Item
                      label={city.nome}
                      value={city.nome}
                      key={index}
                    />
                  ))}
              </Picker>
            </PickerStyle>
          </ContainerPicker>

          <Button
            onPress={handleNavigateToSignUp}
            title="Continue o Cadastro"
          />
        </Content>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
