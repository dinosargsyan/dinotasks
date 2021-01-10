import React from 'react';
import Footer from '../../container/Footer/footer';
import Form from '../../container/Form/form';
import './layout.scss';

const Layout = () => {
    return (
<div className="app-layout">
    <main className="appMain">
        <Form />
        <Footer />
    </main>
</div>
    )
}
export default Layout;