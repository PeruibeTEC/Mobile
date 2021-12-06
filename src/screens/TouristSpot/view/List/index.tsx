import React from 'react';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import { Text } from 'react-native';

import normalize from '../../../../utils/normalizeSize';
import colors from '../../../../styles/colors';

import {
  CardContainer,
  Container,
  Dot,
  Infos,
  LinkToEvaluations,
  PointImage,
  PointName,
  Rating,
  RatingInfos,
  RatingText,
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
              <Rating>
                <Icon
                  name="star"
                  size={normalize(24)}
                  color={colors.light.yellow300}
                />

                <Dot />

                <RatingText>4.8</RatingText>
              </Rating>

              <LinkToEvaluations>207 Avaliações</LinkToEvaluations>
            </RatingInfos>
          </Infos>
        </CardContainer>
      ))}
    </Container>
  );
};

export default List;
