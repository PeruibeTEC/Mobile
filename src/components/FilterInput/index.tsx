import React, { ReactElement, useState } from 'react';
import { SafeAreaView } from 'react-native';

import { Picker } from '@react-native-community/picker';
import { ItemValue } from '@react-native-community/picker/typings/Picker';
import { ContainerPicker, PickerStyle } from './styles';

interface IFilterProps {
  nome: string;
  id: number;
}

export function FilterInput(): ReactElement {
  const [stateIndexSelected, setStateIndexSelected] = useState<ItemValue>();

  const [label, setLabels] = useState([{}]);

  const constructionTypes = [
    {
      id: 1,
      nome: 'Reforma',
    },
    {
      id: 2,
      nome: 'Construção',
    },
  ];

  setLabels(constructionTypes);

  return (
    <SafeAreaView>
      <ContainerPicker style={{ marginTop: 20 }}>
        <PickerStyle>
          <Picker
            selectedValue={stateIndexSelected}
            onValueChange={(itemValue, itemIndex) => {
              setStateIndexSelected(itemValue);
            }}
          >
            {label &&
              label.map((state: IFilterProps, index: number) => (
                <Picker.Item label={state.nome} value={state.id} key={index} />
              ))}
          </Picker>
        </PickerStyle>
      </ContainerPicker>
    </SafeAreaView>
  );
}
