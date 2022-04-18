import React from 'react'
import clsx from 'clsx'

import { NavLink } from 'react-router-dom'
import { Alert, Container, Col, Row } from 'bootstrap-4-react'
 
import styles from './Header.module.scss'

Headers.protoTypes = {};

function Header() {
    return (
        <header>
            <Alert primary> Primary Alert </Alert>

            <Container>
                <Row>
                    <Col className="md-8">
                        <a 
                            className={ clsx(styles.title) }
                            href="https://learn-tech-tips.blogspot.com"
                            target="_blank"
                            rel="noopener noreferrer"    
                        > 
                            Learn Tech Tips
                        </a>
                    </Col>

                    <Col className="col-md-4 text-right">
                        <NavLink
                            className={ clsx(styles.link) }
                            to="/photos"
                        >
                            Manage Photos Project
                        </NavLink>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

export default Header
