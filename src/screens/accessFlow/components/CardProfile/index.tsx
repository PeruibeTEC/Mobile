import React from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native';
import { Container, Card, Name, View } from './styles';

interface IProps {
  nameProfile: string;
  nameIcon: string;
}

const CardProfile: React.FC<IProps> = ({ nameProfile, nameIcon }) => {
  return (
    <TouchableOpacity>
      <Container>
        <Card>
          <View>
            <MaterialIcons name={nameIcon} color="#838e8f" size={40} />
          </View>
          <Name>{nameProfile}</Name>
        </Card>
      </Container>
    </TouchableOpacity>
  );
};

export default CardProfile;
