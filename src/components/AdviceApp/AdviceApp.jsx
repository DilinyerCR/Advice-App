import styles from './AdviceApp.module.css'
import DiceIcon from '../../assets/icon-dice.svg'
import { useState, useEffect } from 'react'

const Advice = () => {

    // ! ====== LOGIC ======
    const API_URL = "https://api.adviceslip.com/advice"


    // * Component LocalState
    const [ advice , setAdvice ] = useState('')


    // * Component LifeCicle
    useEffect(() => {
      handleSubmit()
    }, [])


    // * API Request
    const apiRequest = async () => {
      try {
        const response = await fetch(API_URL)

        const data = await response.json()

        setAdvice(data)

      } catch (error) {
        alert(error.message.text)
      }
    }


    // *
    const handleSubmit = () => {
      apiRequest()
    }

    

    // ! ====== RENDERIZATION ======
    return (
      <div className={styles.MainContainer}>

        {
          advice && (
            <h1>ADVICE #{advice.slip.id}</h1>
          )
        }
        
        <div>
          {
            advice && (
              <p className={styles.Advice}>
                {advice.slip.advice}
              </p>
            )
          }
        </div>

        <div className={styles.IconContainer}>
          
        </div>

        <div className={styles.ButtonContainer}>
          <button onClick={handleSubmit}>
            <img
              className={styles.DadoIcon}
              src={DiceIcon}
            />
          </button>
        </div>
      </div>
    );
}

export default Advice