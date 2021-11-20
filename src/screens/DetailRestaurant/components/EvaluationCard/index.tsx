import React from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { Text } from 'react-native';
import normalize from '../../../../utils/normalizeSize';

import {
  ContainerCard,
  BoxRating,
  Rating,
  RatingText,
  EvaluationContainer,
  LinkToEvaluations,
  EvaluationNow,
  Footer,
  Header,
  Divider,
} from './styles';

interface IProps {
  numberOfStars: number;
  totalEvaluations: number;
}

const EvaluationCard: React.FC<IProps> = ({
  numberOfStars,
  totalEvaluations,
}) => {
  return (
    <ContainerCard>
      <Header>
        <BoxRating>
          <Rating>{numberOfStars}</Rating>
          <MaterialIcons name="star" color="#fff" size={normalize(24)} />
        </BoxRating>

        <EvaluationContainer>
          <RatingText>4.5 de 5 estrelas</RatingText>

          <LinkToEvaluations>
            {`(${totalEvaluations} Avaliações)`}
          </LinkToEvaluations>
        </EvaluationContainer>
      </Header>

      <Divider />

      <Footer>
        <EvaluationNow>Avalie agora!</EvaluationNow>

        <Text style={{ marginHorizontal: 8, color: '#fff' }}>•</Text>

        <MaterialIcons name="star-border" color="#D4F5FF" size={24} />
        <MaterialIcons name="star-border" color="#D4F5FF" size={24} />
        <MaterialIcons name="star-border" color="#D4F5FF" size={24} />
        <MaterialIcons name="star-border" color="#D4F5FF" size={24} />
        <MaterialIcons name="star-border" color="#D4F5FF" size={24} />
      </Footer>
    </ContainerCard>
  );
};

export default EvaluationCard;
