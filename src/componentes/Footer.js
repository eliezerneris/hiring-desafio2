import React from 'react';

const Footer = () => {
    return(
        <>
        <footer className="text-center text-lg-start bg-light text-muted">
            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                <div className="me-5 d-none d-lg-block">
                    <span>Minhas Redes Sociais:</span>
                </div>
                <div>
                    <a href="https://web.facebook.com/eliezer.neris.7/" className="me-4 text-reset">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://twitter.com/eliezer_neris" className="me-4 text-reset">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://br.linkedin.com/in/eliezer-neris-da-silva-leal-35073173" className="me-4 text-reset">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/eliezerneris" className="me-4 text-reset">
                        <i className="fab fa-github"></i>
                    </a>
                </div>
            </section>
            <div className="text-center p-4 footer">            
                <a className="text-reset fw-bold" href="/">© 2021 Copyright - Eliezer Neris</a>
            </div>
        </footer>
        </>
    )
}

export default Footer;