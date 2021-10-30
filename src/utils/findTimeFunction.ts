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

// usefull functions ------------------------------------------------------------

const getEventLvl = (eventElement: event | null): number => {
  if (eventElement === null) {
    return 0;
  }
  const eventDescription = eventElement.description;
  const descriptionSplited = eventDescription.split('eventLvl: ');
  if (descriptionSplited.length > 1) {
    const lvlAsChar = descriptionSplited[1].charAt(0);
    return Number(lvlAsChar);
  }
  return 1;
};

const getEventAtATime = (time: Date, userElement: user): event | null => {
  const userCalendar = userElement.googleCalendar;
  const events = userCalendar.items;
  for (const eventElement of events) {
    if (isBefore(eventElement.start.dateTime, time) && isBefore(time, eventElement.end.dateTime)) {
      return eventElement;
    }
  }
  return null;
};

// test variables -------------------------------------------------------

const testEvent: event = {
  start: {
    dateTime: new Date(2021, 11, 1),
  },
  end: {
    dateTime: new Date(2021, 11, 6),
  },
  description: 'eventLvl: 2',
};

const testEvent2: event = {
  start: {
    dateTime: new Date(2021, 11, 5),
  },
  end: {
    dateTime: new Date(2021, 11, 6),
  },
  description: 'eventLvl: 3',
};

const users: user[] = [
  {
    email: 'vinicius.scala@citi.org.br',
    googleCalendar: {
      items: [testEvent2],
    },
  }, {
    email: 'vinicius.xavier@citi.org.br',
    googleCalendar: {
      items: [testEvent],
    },
  }];

const algorithmInputTest: algorithmInput = {
  users,
  minTime: new Date(2021, 11, 1),
  maxTime: new Date(2021, 11, 6),
  eventName: 'event test',
  duration: 1,
  eventLvl: 3,
};

// test variables ------------------------------------------------------- end

const findTimeFunction = (): algorithmReturnType[] => {
  const algorithmReturn: algorithmReturnType[] = [];

  // algorithmInputTest.users.forEach((userElement) => {
  let timeOfAnalysis = algorithmInputTest.minTime;
  while (isBefore(timeOfAnalysis, testEvent.end.dateTime)) { // for every time
  // if the time of analysis is between 08 and 18h
    if (timeOfAnalysis.getHours() >= 8 && timeOfAnalysis.getHours() <= 18) { // ok
      let canBeScheduled = true;
      // for every user
      let lvlSum = 0;
      algorithmInputTest.users.forEach((userElement) => { // for every user
        const eventAtThisTime = getEventAtATime(timeOfAnalysis, userElement);
        const eventLvl = getEventLvl(eventAtThisTime);
        lvlSum += eventLvl;
        if (eventLvl >= algorithmInputTest.eventLvl) {
          canBeScheduled = false;
        }
      });
      if (canBeScheduled) {
        algorithmReturn.push({
          time: timeOfAnalysis,
          lvlSum,
        });
      }
    }
    timeOfAnalysis = addMinutes(timeOfAnalysis, 15);
  }
  // eslint-disable-next-line no-debugger
  debugger;
  return algorithmReturn;
};

export { findTimeFunction };
