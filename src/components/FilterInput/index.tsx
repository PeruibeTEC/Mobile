import React, { ReactElement, useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';

import { Picker } from '@react-native-community/picker';

import { ItemValue } from '@react-native-community/picker/typings/Picker';
import { ContainerPicker, Title, PickerStyle } from './styles';

interface FilterInputProps {
  title: string;
  items: Array<string>;
}

interface IStateProps {
  label: string;
  id: number;
}

export function FilterInput({ title, items }: FilterInputProps): ReactElement {
  const [stateIndexSelected, setStateIndexSelected] = useState<ItemValue>();

  const [label, setLabel] = useState(items);

  return (
    <SafeAreaView>
      <ContainerPicker>
        <Title>{title}:</Title>
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
            {label &&
              label.map((state: IStateProps, index: number) => (
                <Picker.Item label={state.label} value={state.id} key={index} />
              ))}
          </Picker>
        </PickerStyle>
      </ContainerPicker>
    </SafeAreaView>
  );
}
