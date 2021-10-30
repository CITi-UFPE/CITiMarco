import React, { useState } from 'react';
import { Container } from './style';
import {
  Button,
  DateRangePicker,
  DurationInput,
  EventNameInput,
  ParticipantsInput,
  Checkboxes,
} from '../../components';

const CreateEvent: React.FC = () => {
  const [eventName, setEventName] = useState<string>();
  const [duration, setDuration] = useState<number>();
  const [initialDate, setInitialDate] = useState<Date>(new Date());
  const nextWeek = new Date();
  nextWeek.setDate(nextWeek.getDate() + 7);
  const [finalDate, setFinalDate] = useState<Date>(nextWeek);
  const [participants, setParticipants] = useState<string[]>([]);
  const [level, setLevel] = useState<number>();

  const HandleClick = () => {
    console.log('muito bom');
  };

  return (
    <>
      <Container>
        <div style={{ width: 200 }}>
          <EventNameInput
            placeholder="Nome da reunião"
            value={eventName}
            setValue={setEventName}
          />
        </div>

        <div style={{ width: 200 }}>
          <ParticipantsInput
            placeholder="Partiticipantes da reunião"
            value={participants}
            setValue={setParticipants}
          />
        </div>

        <div style={{ width: 200 }}>
          <DateRangePicker
            initialDate={initialDate}
            setInitialDate={setInitialDate}
            finalDate={finalDate}
            setFinalDate={setFinalDate}
          />
        </div>

        <div style={{ width: 200 }}>
          <DurationInput
            value={duration}
            setValue={setDuration}
          />
        </div>

        <div style={{
          width: 200, height: 250, display: 'flex', justifyContent: 'flex-start',
        }}
        >
          <Checkboxes
            value={level}
            setValue={setLevel}
          />
        </div>
        <div style={{ margin: '20px 0' }}>
          <Button onClickFunction={HandleClick} textValue="Seguinte" />
        </div>
      </Container>
    </>
  );
};

export default CreateEvent;
