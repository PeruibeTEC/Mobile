import React, { ReactElement, useEffect, useState } from 'react';
import { SafeAreaView, TouchableOpacity } from 'react-native';

import {
  ContainerSession,
  TimeInfo,
  IsOpenNow,
  OpenHours,
  Divider,
  Events,
  ClockIcon,
} from './styles';

interface IProps {
  openTime: number;
  closeTime: number;
}

export function TimeSession({ openTime, closeTime }: IProps): ReactElement {
  const date = new Date();
  const hours = date.getHours();

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (hours >= openTime && hours <= closeTime) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [hours, openTime, closeTime]);

  return (
    <SafeAreaView>
      <ContainerSession>
        <ClockIcon isOpen={isOpen} name="clock" />
        <TimeInfo>
          <IsOpenNow isOpen={isOpen}>
            {isOpen ? 'Aberto Agora!' : 'Fechado Agora!'}
          </IsOpenNow>
          <OpenHours isOpen={isOpen}>
            {isOpen
              ? `Aberto das ${openTime}:00 - ${closeTime}:00`
              : 'Ver horários'}
          </OpenHours>
        </TimeInfo>
        <Divider />
        <TouchableOpacity activeOpacity={0.6}>
          <Events>Eventos</Events>
        </TouchableOpacity>
      </ContainerSession>
    </SafeAreaView>
  );
}
