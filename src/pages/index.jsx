import React, { useEffect, useState } from 'react'
import classnames from 'classnames'
import Page from '../components/page'
import Seo from '../components/seo'
import shuffle from '../utils/array'
import './index.scss'

const Index = () => {
  const MAX = 150
  const [clock, setClock] = useState(-1)
  const [cnt, setCnt] = useState(0)
  const [dataList, setDataList] = useState([])
  const [hint, setHint] = useState(false)
  const [slash, setSlash] = useState(false)
  const [visible, setVisible] = useState(false)


  const reset = () => {
    setCnt(0)
    setDataList([])
    setVisible(false)
    setClock(0)
  }

  const onClickItem = index => {
    if (cnt === index) {
      setCnt(cnt + 1)
      setClock(0)
      setSlash(false)
    }
  }
  const onClickEasterEgg = () => {
    if (cnt !== MAX) return
    reset()
  }
  const jumpToGithub = () => {
    // eslint-disable-next-line no-undef
    window.location.href = 'https://github.com/jin2gh'
  }

  const eggCN = classnames({
    egg: true,
    'item pkm-151': visible,
  })

  const pkmCN = index => classnames({
    'item': true,
    [`pkm-${index + 1}`]: true,
    'get': cnt > index,
    'whoami': slash && hint && cnt === index,
  })

  useEffect(() => {
    if (!dataList?.length) {
      const data = []
      for (let i = 0; i < MAX; ++i) {
        data.push(i)
      }
      setDataList(shuffle(data))
      setClock(0)
    }
  }, [dataList])

  useEffect(() => {
    if (cnt === MAX) {
      setVisible(true)
    }
  }, [cnt])

  useEffect(() => {
    let timer = null
    if (clock >= 0) {
      setSlash(clock >= 10)
      timer = setTimeout(() => {
        setClock(() => clock + 1)
      }, 1000)
    }
    return () => clearTimeout(timer)
  }, [clock])

  useEffect(() => {
    let timer = null
    if (slash) {
      timer = setTimeout(() => {
        setHint(() => !hint)
      }, 500)
    } else {
      setHint(false)
    }
    return () => clearTimeout(timer)
  }, [hint, slash])

  return (
    <Page className="page">
      <Seo title="Home" />
      <main className="box">
        <div className="content">
          <div className="head">Hello, I am JIN</div>
          <div className="lsd" />
          <div className={eggCN} onClick={onClickEasterEgg} />
          <div className="rsd" />
          <div className="foot" tabIndex={-42} onClick={jumpToGithub}>Welcome to my website</div>
        </div>
        {dataList?.map(i => (<div key={i} className={pkmCN(i)} onClick={() => onClickItem(i)} />))}
      </main>
    </Page>
  )
}

export default Index
