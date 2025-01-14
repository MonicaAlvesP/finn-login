import { useState } from 'react';
import { rosto, olhos, boca } from './rosto.module.scss';

export const Rosto = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!email) {
      newErrors.email = 'obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email inválido';
    }
    if (!password) {
      newErrors.password = 'obrigatória';
    } else if (password.length < 6) {
      newErrors.password = 'Senha deve ter pelo menos 6 caracteres';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log('Formulário enviado', { email, password });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <section className={rosto}>
      <section className={olhos}>
        <div></div>
        <div></div>
      </section>
      <form onSubmit={handleSubmit}>
        <div className={boca}>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span>{errors.email}</span>}
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <span>{errors.password}</span>}
        </div>
        <button type="submit">entre</button>
      </form>
    </section>
  );
};