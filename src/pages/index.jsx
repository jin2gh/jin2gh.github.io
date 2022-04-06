import React, { useEffect, useState } from 'react'
import classnames from 'classnames'
import Page from '../components/page'
import Seo from '../components/seo'
import shuffle from '../utils/array'
import './index.scss'

const Index = () => {
  const MAX = 151
  const [dataList, setDataList] = useState([])
  const [list, setList] = useState([])

  const onClickItem = (id) => {
    console.log(id)
    const ans = list.length
    if (ans === id) {
      setList([...list, id])
    }
  }
  const onClickEasterEgg = () => {
    if (list.length !== MAX) return
    setDataList([])
    setList([])
  }
  const jumpToGithub = () => {
    // eslint-disable-next-line no-undef
    window.location.href = 'https://github.com/jin2gh'
  }

  const eggClassNames = classnames({
    egg: true,
    'item pkm-151': list.length === MAX - 1,
  })

  useEffect(() => {
    if (!dataList?.length) {
      const data = []
      for (let i = 0; i < MAX - 1; i += 1) {
        data.push(i)
      }
      setDataList(shuffle(data))
    }
  }, [dataList])
  return (
    <Page className="page">
      <Seo title="Home" />
      <main className="box">
        <div className="content">
          <div className="head">Hello, I am JIN</div>
          <div className="lsd" />
          <div className={eggClassNames} onClick={onClickEasterEgg} />
          <div className="rsd" />
          <div className="foot" tabIndex={-42} onClick={jumpToGithub}>Welcome to my website</div>
        </div>
        {dataList?.map(item => (<div key={item} className={`item pkm-${item + 1} ${list[item] >= 0 ? 'get' : ''}`} onClick={() => onClickItem(item)} />))}
      </main>
    </Page>
  )
}

export default Index
