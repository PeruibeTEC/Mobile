import React, { ReactElement, useState } from 'react';
import { SafeAreaView } from 'react-native';

import { Picker } from '@react-native-community/picker';
import { ItemValue } from '@react-native-community/picker/typings/Picker';
import { ContainerPicker, PickerStyle } from './styles';

interface IFilterProps {
  id: number;
  name: string;
}

export function FilterInput(): ReactElement {
  const [typeSelected, setTypeSelected] = useState<ItemValue>();

  const constructionTypes: IFilterProps[] = [
    {
      id: 1,
      name: 'Reforma',
    },
    {
      id: 2,
      name: 'Construção',
    },
  ];

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

            {constructionTypes &&
              constructionTypes.map((constructionType: IFilterProps) => (
                <Picker.Item
                  label={constructionType.name}
                  value={constructionType.id}
                  key={constructionType.id}
                />
              ))}
          </Picker>
        </PickerStyle>
      </ContainerPicker>
    </SafeAreaView>
  );
}
