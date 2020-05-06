import React from 'react';

import Header from '../components/Header.js';
import Error from '../components/Error.js';
import MessageForm from '../components/MessageForm.js';
import Messages from '../components/Messages.js';
import Footer from '../components/Footer.js';

function HomePage() {
    return (
        <> 
            <Header showUserToolbar={true} />
            <main className="container">
                <Error />
                 <MessageForm />
                <Messages />
            </main>
            <Footer />
        </>
    );
}

export default HomePage;
