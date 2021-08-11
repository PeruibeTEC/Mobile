import React, { ReactElement, useState } from 'react';
import { SafeAreaView } from 'react-native';

import { Picker } from '@react-native-community/picker';

import { ItemValue } from '@react-native-community/picker/typings/Picker';
import { ContainerPicker, Title, PickerStyle } from './styles';

interface FilterInputProps {
  title: string;
  items: Array<string>;
}

interface IFilterProps {
  nome: string;
  id: number;
}

export function FilterInput({ title, items }: FilterInputProps): ReactElement {
  const [stateIndexSelected, setStateIndexSelected] = useState<ItemValue>();

  const [label, setLabels] = useState(items);

  return (
    <SafeAreaView>
      <ContainerPicker style={{ marginTop: 20 }}>
        <PickerStyle>
          <Title> {title} </Title>
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
