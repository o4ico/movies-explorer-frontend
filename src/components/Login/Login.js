import React from 'react';
import Auth from '../Auth/Auth';

function Login() {

  return (
    <main className="content__container">
      <Auth
        formName={'register'}
        title={'Рады видеть!'}
        adviceText={`Ещё не зарегистрированы? `}
        adviceLink={'/signup'}
        adviceTextLink={'Регистрация'}

      />
    </main>
  );
}

export default Login;