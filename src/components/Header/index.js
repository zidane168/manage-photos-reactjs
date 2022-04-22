import React, { useEffect } from 'react'
import clsx from 'clsx'

import { NavLink } from 'react-router-dom'
import { Alert, Container, Col, Row } from 'bootstrap-4-react'
 
import styles from './Header.module.scss'

import { useSelector } from 'react-redux'

Headers.protoTypes = {};

function Header() {

    const currentUser   = useSelector(state => state.user.currentUser)
    let name = "";

    useEffect(() => {
        name = () => {
            if (currentUser) {
    
                console['warn'](' ---------- ')
                console.log (currentUser.params.name)
                console['warn'](' ---------- ')
                return ("Welcome: ", currentUser.params.name)
            } 
            return "Sign In"
        }
    }, [ currentUser ])

    return (
        <header>
            <Alert primary> Primary Alert </Alert>

            <Container>
                <Row>
                    <Col className="md-4">
                        <a 
                            className={ clsx(styles.title) }
                            href="https://learn-tech-tips.blogspot.com"
                            target="_blank"
                            rel="noopener noreferrer"    
                        > 
                            Learn Tech Tips
                        </a>
                    </Col>


                    <Col className="col-md-4 text-center">
                        <NavLink
                            className={ clsx(styles.link) }
                            to="/photos"
                        >
                            Manage Photos Project
                        </NavLink>
                    </Col>

                    <Col className="col-md-4 text-right">
                        <NavLink
                            to="/signIn"
                        >
                            { name || 'SignIn' }
                         
                        </NavLink>
                        <ul className='signOut'>
                            <li>
                                <NavLink
                                    to="/signOut"
                                >
                                    Sign out
                                </NavLink>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

export default Header
