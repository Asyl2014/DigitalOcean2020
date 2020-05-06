import React from 'react';

import Error from '../components/Error.js';
import Header from '../components/Header.js';
import RegisterForm from '../RegisterForm.js';
import Footer from '../components/Footer.js';

function RegisterPage() {
    return (
        <> 
            <Header />
            <main className="container">
            <Error />
            <RegisterForm />
            </main>
            <Footer />
        </>
    );
}

export default RegisterPage;