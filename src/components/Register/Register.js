import React from 'react';
import Auth from '../Auth/Auth';

function Register() {

  return (
    <main className="content__container">
      <Auth
        formName={'register'}
        title={'Добро пожаловать!'}
        adviceText={`Уже зарегистрированы? `}
        adviceLink={'/signin'}
        adviceTextLink={'Войти'}

      />
    </main>
  );
}

export default Register;