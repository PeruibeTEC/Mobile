import React from 'react';
import { Text } from 'react-native';

import {
  CardContainer,
  Container,
  Infos,
  PointImage,
  PointName,
  RatingInfos,
} from './styles';

const points = [
  {
    name: 'Ruinas do Abarebebe',
    url: 'https://revistanove.com.br/wp-content/uploads/2018/10/ruinas-do-abarebebe-revista-nove-foto-christian-jauch2.jpg',
  },
  {
    name: 'Praia do Guaraú',
    url: 'http://www.peruibe.sp.gov.br/portal/wp-content/uploads/2015/04/MG_6371-310x180.jpg',
  },
  {
    name: 'Castelo do Alemão',
    url: 'https://editorialivre.com.br/wp-content/uploads/2019/07/Prainhaa.jpg',
  },
];

const List: React.FC = () => {
  return (
    <Container>
      {points.map(point => (
        <CardContainer activeOpacity={0.8}>
          <PointImage source={{ uri: point.url }} />

          <Infos>
            <PointName>{point.name}</PointName>

            <RatingInfos>
              <Text>sça</Text>
            </RatingInfos>
          </Infos>
        </CardContainer>
      ))}
    </Container>
  );
};

export default List;
