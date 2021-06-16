import React, { useState } from 'react'
import classnames from 'classnames'
import Page from '../components/page'
import Seo from '../components/seo'
import shuffle from '../utils/array'
import './index.scss'

const Index = () => {
  const [visible, setVisible] = useState(false)
  const handleEasterEgg = () => {
    setVisible(true)
  }
  const jumpToGithub = () => {
    // eslint-disable-next-line no-undef
    window.location.href = 'https://github.com/JINJITING'
  }
  const renderList = () => {
    const dataList = []
    for (let i = 1; i < 151; i += 1) {
      dataList.push(i)
    }
    return shuffle(dataList).map(item => (<div key={item} className={`item pkm-${item}`} />))
  }
  const eggClassNames = classnames({
    egg: true,
    'item pkm-151': visible,
  })
  return (
    <Page className="page">
      <Seo title="Home" />
      <main className="box">
        <div className="content">
          <div className="head">Hello, World!</div>
          <div className="lsd" />
          <div className={eggClassNames} onClick={handleEasterEgg} />
          <div className="rsd" />
          <div className="foot" tabIndex={-42} onClick={jumpToGithub}>Welcome to my github</div>
        </div>
        {renderList()}
      </main>
    </Page>
  )
}

export default Index
