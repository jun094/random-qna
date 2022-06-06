import { useState } from 'react';
import cn from 'classnames';
import { IoMdArrowDropdownCircle } from 'react-icons/io';
import logo from './logo.png';

import styles from './App.module.scss';

import DATA from './data/data.json'
import StopWatch from './components/StopWatch/StopWatch';

const getRand = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}

function App() {
  const { list } = DATA;
  const random = getRand(0, list.length);

  const [isOpen, setIsOpen] = useState(false)
  const [num, setNum] = useState(random);


  const handleBtn = () => {
    setNum(getRand(0, list.length));
    setIsOpen(false);
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <header className={styles.header}>

          <h1>
            김효은 <br />
            합격기원 <img src={logo} className={styles.logo} alt="logo" />
          </h1>
        </header>

        {/* <StopWatch /> */}

        <button className={styles.button} onClick={()=> handleBtn()}>다음문제</button>
        <section className={styles.contents}>
          <h6 className={styles.question} onClick={() => setIsOpen((prev) => !prev)} >
            <div className={styles.questionLeft}>
              <div className={cn(styles.questionItem, styles.questionPrimary)}>Q.</div>
              <div className={cn(styles.questionItem, styles.questionDesc)}>{list[num].question}</div>
            </div>

            <IoMdArrowDropdownCircle color="#5094fa" className={cn(styles.questionArrow, {
              [styles.questionArrow_open]: isOpen
            })} width="32px" height="32px" />
          </h6>


          <p className={cn(styles.answer, {
            [styles.answer_open]: isOpen,
          })}>
            {list[num].answer}
          </p>

        </section>
      </div>
    </div>
  );
}

export default App;
