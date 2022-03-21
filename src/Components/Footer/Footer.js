import './footer.css'
import party from '../../assets/img/party.png'
import sad from '../../assets/img/sad.png'

export default function Footer(props) {
    const { answered, numQuestions, footerIcons, zaps, goal, setDeckSelected, setZapsGoal, setStartRecall} = props
    const isAllAnswered = (answered === numQuestions) ? true : false
    const isGoalAchieved = (zaps >= goal) ? true : false

    return (

        <footer>
            {
                isAllAnswered
                    ?
                    (isGoalAchieved
                        ?
                        <div className='result'>
                            <p className='message-title'>
                                <img src={party} alt='party' />
                                Parabéns!
                            </p>
                            <p className='message-content'>Você atingiu sua meta de zaps!</p>
                        </div>
                        :
                        <div className='result'>
                            <p className='message-title'>
                                <img src={sad} alt='sad' />
                                Putz...
                            </p>
                            <p className='message-content'>Ainda faltam alguns... Mas não desanime!</p>
                        </div>)
                    :
                    <></>
            }
            <p>{answered}/{numQuestions} CONCLUÍDOS</p>
            <div>
                {footerIcons.map((icon, index) => <span key={index} className={icon.color}><ion-icon name={icon.name}></ion-icon></span>)}
            </div>

            {isAllAnswered
                ?
                <button 
                className='restart'
                onClick={()=>{
                    setStartRecall(false)
                    setDeckSelected(undefined)
                    setZapsGoal()
                }}
                >REINICIAR RECALL</button>
                :
                <></>
        }
        </footer>

    )
}