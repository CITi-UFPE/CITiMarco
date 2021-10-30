import React from 'react';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import {
  Container,
  Label,
} from './style';

interface DatePickerProps {
  initialDate: Date;
  setInitialDate: (date: Date | null) => void;
  finalDate: Date;
  setFinalDate: (date: Date | null) => void;
}

const DateRangePicker: React.ElementType = ({
  initialDate,
  setInitialDate,
  finalDate,
  setFinalDate,
}: DatePickerProps) => (
  <Container>
    <Label><strong>Intervalo da reunião</strong></Label>
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ptBR}>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
        <DatePicker
          style={{ width: '70px' }}
          value={initialDate}
          format="dd/MM/yyyy"
          onChange={setInitialDate}
          disablePast
          onAccept={(date) => {
            if (date && finalDate) {
              if (date.getTime() > finalDate.getTime()) {
                const weekAfter = new Date(date);
                weekAfter.setDate(weekAfter.getDate() + 7);
                setFinalDate(weekAfter);
              }
            }
          }}
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
      </div>
    </MuiPickersUtilsProvider>
  </Container>
);

export default DateRangePicker;
