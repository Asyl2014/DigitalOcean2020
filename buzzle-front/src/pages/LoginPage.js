import React from 'react';

import Error from '../components/Error.js';
import Header from '../components/Header.js';
import LoginForm from '../components/LoginForm.js';
import Footer from '../components/Footer.js';

const LoginPage = () =>
        <> 
            <Header />
            <main className="container">
                <Error />
                <LoginForm />
            </main>
            <Footer />
        </>

export default LoginPage;
