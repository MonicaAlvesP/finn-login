import { roupa, cachecol, sueter } from './roupa.module.scss';
import Sueter from '../../assets/sueterFinn.png';
import Cachecol from '../../assets/cachecol.png';

export const Roupa = () => {
  return (
    <section className={roupa}>
      <div className={sueter}>
        <img src={Sueter} alt="Sueter" />
      </div>
      <div className={cachecol}>
        <img src={Cachecol} alt="Cachecol" />
      </div>
    </section>
  )
}
