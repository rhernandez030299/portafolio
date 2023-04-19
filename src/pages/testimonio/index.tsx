import { useSelector } from 'react-redux';
import { RootState } from 'src/lib/store';

export default function Testimonio() {

  const count = useSelector((state: RootState) => state.counter.value)

  return (
    <>
      <p>Esta es la página de testimonio</p>
      

      <span>{count}</span>
    </>
  );

}