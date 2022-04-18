import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import styles from './Banner.module.scss'
import '../../assets/styles/global.scss'

Banner.propTypes = {
    title: PropTypes.string,
    backgroundURL: PropTypes.string,
}

Banner.defaultProps = {
    title: '',
    backgroundURL: '',
}

function Banner(props) {

    const { title, backgroundURL } = props
    console.log(title)
    console.log(backgroundURL) 
    const bannerStyle = backgroundURL ? { backgroundImage: `url(${backgroundURL})` } : { }

    return (
      <section className={ clsx(styles.banner, 'mt-10') } style={ bannerStyle }>
        <h1 className={ styles.title }> { title } </h1>
      </section>
    )
}

export default Banner;