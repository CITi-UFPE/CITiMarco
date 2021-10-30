/* eslint-disable no-restricted-syntax */
/* eslint-disable no-loop-func */
import { addMinutes, isBefore } from 'date-fns';

interface event {
  start: {
    dateTime: Date;
  };
  end: {
    dateTime: Date;
  };
  description: string;
}

interface requisitionResponse {
  items: [event];
}

interface user {
  email: string;
  googleCalendar: requisitionResponse;
}

interface algorithmInput {
  users: user[];
  minTime: Date;
  maxTime: Date;
  eventName: string;
  duration: number;
  eventLvl: number;
}

interface algorithmReturnType {
  time: Date;
  lvlSum: number;
}

export { };
