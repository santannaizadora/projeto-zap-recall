import './footer.css'

export default function Footer(props) {
    const {answered, numQuestions, footerIcons} = props
    return (

        <footer>
            <p>{answered}/{numQuestions} CONCLUÍDOS</p>
            <div>
                {footerIcons.map((icon, index)=> <ion-icon key={index} name={icon}></ion-icon>)}
            </div>
        </footer>

    )
}