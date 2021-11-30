import React, { ReactElement } from 'react';

import Header from '../../components/Header';
import ConstructionCard from '../../components/ConstructionCard';
import { FilterInput, IFilterProps } from '../../components/FilterInput';

import { Container, List } from './styles';

export function ProjectList(): ReactElement {
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

  const fakeData = [
    {
      key: 1,
      name: 'Hospital de Peruíbe',
      image:
        'https://s2.glbimg.com/cMu6k4hSgIodMjh4TMl1UYbA-uw=/0x0:1280x801/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/Y/L/KjLss8R3mFkeAEeVS2fg/4-foto1.2-obras-de-fundacao-do-hospital-municipal-iniciaram-em-outubro-de-2015.jpg',
      budget: '22.000.000,00',
    },
    {
      key: 2,
      name: 'Maternidade de Peruíbe',
      image:
        'https://cdn.diariodolitoral.com.br/upload/dn_noticia/2019/09/hospital-peruibe1-80603_2.jpg',
      budget: '1.000.000,00',
    },
    {
      key: 3,
      name: 'Unidade de Saúde (USafa)',
      image:
        'https://www.maisperuibe.com.br/wp-content/uploads/2021/07/usafa12-1000x600.jpeg',
      budget: '22.400.000,00',
    },
    {
      key: 4,
      name: 'Reforma das Estradas',
      image:
        'https://s2.glbimg.com/8uAIdn73wjQyiWVza-kW7qmQ5QY=/0x0:1152x648/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/5/I/k2P3WkTBWeoBSzXaNHXQ/cratera22.jpg',
      budget: '5.000,00',
    },
    {
      key: 5,
      name: 'Reforma da Praça Flórida',
      image: 'https://setee.com.br/wp-content/uploads/2019/05/peruibe1.jpg',
      budget: '30.000.000,00',
    },
    {
      key: 6,
      name: 'Escola Estadual Luiz Abel slslslslslslsl',
      image:
        'https://cdn.diariodolitoral.com.br/upload/dn_noticia/2019/06/escola-reproducao-maps.jpg',
      budget: '50.000,00',
    },
  ];

  return (
    <Container>
      <Header />

      <FilterInput data={constructionTypes} />

      <List
        showsVerticalScrollIndicator={false}
        data={fakeData}
        keyExtractor={item => String(item.key)}
        renderItem={({ item }) => (
          <ConstructionCard
            name={item.name}
            imageURL={item.image}
            budget={item.budget}
          />
        )}
      />
    </Container>
  );
}
