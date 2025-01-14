import { Rosto } from '../Rosto';
import { cabeca } from './cabeca.module.scss';

export const Cabeca = () => {
  return (
    <section className={cabeca}>
      <Rosto />
    </section>
  )
}