import React, { useState } from 'react'
import classnames from 'classnames'
import Page from '../components/page'
import Seo from '../components/seo'
import './index.scss'

const Index = () => {
  const [visible, setVisible] = useState(false)
  const handleEasterEgg = () => {
    setVisible(true)
  }
  const jumpToGithub = () => window.location.href = 'https://github.com/JINJITING'
  const renderList = () => {
    const dataList = []
    for (let i = 1; i < 151; i++) {
      dataList.push(i)
    }
    return dataList.map(item => (<div key={item} className={`item pkm-${item}`}></div>))
  }
  const eggClassNames = classnames({
    'egg': true,
    'item pkm-151': visible,
  })
  return (
    <Page className="page">
      <Seo title="Home" />
      <main className="box">
        <div className="content">
          <div className="head">Hello, World!</div>
          <div className="lsd"></div>
          <div className={eggClassNames} onClick={handleEasterEgg}></div>
          <div className="rsd"></div>
          <div className="foot" onClick={jumpToGithub}>Welcome to my github</div>
        </div>
        {renderList()}
      </main>
    </Page>
  )
}

export default Index
