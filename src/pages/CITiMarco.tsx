import React, { useState } from 'react';
import { DurationInput } from '../components';

const CITiMarco: React.FC = () => {
  const [value, setValue] = useState(null);

  return (
    <>
      <div style={{ width: 300 }}>
        <DurationInput
          value={value}
          setValue={setValue}
        />
      </div>
    </>
  );
};

export default CITiMarco;
