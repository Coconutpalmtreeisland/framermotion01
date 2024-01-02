import React, { useState } from 'react'
import Project from './components/project/Project'
import Modal from './components/modal/Modal'

const App = () => {

  const texts = [
    {
      title: "Image Quiz site",
      subTitle: "project1",
      src: "project2.png",
      date: "2023",
    },
    {
      title: "React Youtube site",
      subTitle: "project2",
      src: "project1.png",
      date: "2023",
    },
    {
      title: "Sexy Brain site",
      subTitle: "project3",
      src: "project2.png",
      date: "2023",
    },
    {
      title: "Cllo site",
      subTitle: "project1",
      src: "project1.png",
      date: "2023",
    },
  ]

  const [modal, setModal] = useState({ active: false, index: 0 })

  return (

    <main className='main'>
      <section id='section1'>
        <h1>Gallery Hover Animation</h1>
      </section>
      <section id='section2' className='contents'>
        <div className='project__wrap'>
          {texts.map((text, index) => {
            return <Project key={index} index={index} text={text} setModal={setModal} />
          })}
        </div>
        <Modal modal={modal} texts={texts} />
      </section>
      <section id='section3'></section>
    </main>
  )
}

export default App