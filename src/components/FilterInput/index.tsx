import React, { ReactElement, useState } from 'react';
import { SafeAreaView } from 'react-native';

import { Picker } from '@react-native-community/picker';
import { ItemValue } from '@react-native-community/picker/typings/Picker';
import { ContainerPicker, PickerStyle } from './styles';

export interface IFilterProps {
  id: number;
  name: string;
}

interface IFilterInputProps {
  data: IFilterProps[];
}

export function FilterInput({ data }: IFilterInputProps): ReactElement {
  const [typeSelected, setTypeSelected] = useState<ItemValue>();
  return (
    <SafeAreaView>
      <ContainerPicker style={{ marginTop: 20 }}>
        <PickerStyle>
          <Picker
            selectedValue={typeSelected}
            onValueChange={(itemValue, itemIndex) => {
              setTypeSelected(itemValue);
            }}
          >
            <Picker.Item label="Filtro de Pesquisa" value={0} />

            {data &&
              data.map(dataInput => (
                <Picker.Item
                  label={dataInput.name}
                  value={dataInput.id}
                  key={dataInput.id}
                />
              ))}
          </Picker>
        </PickerStyle>
      </ContainerPicker>
    </SafeAreaView>
  );
}
