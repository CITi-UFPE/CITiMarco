import { Dispatch, SetStateAction } from 'react';
import {
  Container,
  Label,
} from './style';

interface CheckboxesProps {
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
}

const Checkboxes: React.ElementType = ({
  value,
  setValue,
}: CheckboxesProps) => {
  const a = 1;

  return (
    <Container>
      <Label><strong>Nivel</strong></Label>
      <div style={{
        marginBottom: 20, display: 'flex', alignItems: 'center', width: '100%',
      }}
      >
        <input checked={value === 1} onClick={() => setValue(1)} type="checkbox" />
        <small style={{ marginLeft: 15, fontWeight: 'bold', color: 'black' }}>1</small>
      </div>

      <div style={{
        marginBottom: 20, display: 'flex', alignItems: 'center', width: '100%',
      }}
      >
        <input checked={value === 2} onClick={() => setValue(2)} type="checkbox" />
        <small style={{ marginLeft: 15, fontWeight: 'bold', color: 'black' }}>2</small>
      </div>

      <div style={{
        marginBottom: 20, display: 'flex', alignItems: 'center', width: '100%',
      }}
      >
        <input checked={value === 3} onClick={() => setValue(3)} type="checkbox" />
        <small style={{ marginLeft: 15, fontWeight: 'bold', color: 'black' }}>3</small>
      </div>

      <div style={{
        marginBottom: 20, display: 'flex', alignItems: 'center', width: '100%',
      }}
      >
        <input checked={value === 4} onClick={() => setValue(4)} type="checkbox" />
        <small style={{ marginLeft: 15, fontWeight: 'bold', color: 'black' }}>4</small>
      </div>

      <div style={{
        marginBottom: 40, display: 'flex', alignItems: 'center', width: '100%',
      }}
      >
        <input checked={value === 5} onClick={() => setValue(5)} type="checkbox" />
        <small style={{ marginLeft: 15, fontWeight: 'bold', color: 'black' }}>5</small>
      </div>
    </Container>
  );
};

export default Checkboxes;
