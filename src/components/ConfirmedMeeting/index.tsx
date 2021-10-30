import React from 'react';
import { ReactComponent as ThumbsUp } from '../../assets/thumbs-up.svg';

import {
  MessageContainer, Message, Background,
} from './style';

type ConfirmedMeetingProps = {
  active: boolean;
}

const ConfirmedMeeting: React.ElementType = ({
  active,
}: ConfirmedMeetingProps) => (
  <>
    {active && (
      <>
        <Background />
        <MessageContainer>
          <ThumbsUp />
          <Message>Reunião confirmada</Message>
        </MessageContainer>
      </>
    )}
  </>
);
export default ConfirmedMeeting;
