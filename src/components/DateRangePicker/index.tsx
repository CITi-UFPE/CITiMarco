import React, { useState } from 'react';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { DatePickerDiv } from './style';

export const DateRangePicker: React.ElementType = () => {
  const nextWeek = new Date();
  nextWeek.setDate(nextWeek.getDate() + 7);
  const [initialDate, setInitialDate] = useState<Date | null>(new Date());
  const [finalDate, setFinalDate] = useState<Date | null>(nextWeek);

  return (
    <DatePickerDiv>
      <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ptBR}>
        <DatePicker
          style={{ width: '70px' }}
          value={initialDate}
          format="dd/MM/yyyy"
          onChange={setInitialDate}
          disablePast
        />
        <p>-</p>
        <DatePicker
          style={{ width: '70px' }}
          value={finalDate}
          format="dd/MM/yyyy"
          onChange={setFinalDate}
          minDate={initialDate}
          minDateMessage="Data deve ser após data inicial."
        />
      </MuiPickersUtilsProvider>
    </DatePickerDiv>
  );
};
