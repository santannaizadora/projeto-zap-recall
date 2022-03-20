import './footer.css'

export default function Footer(props) {
    const {answered, numQuestions} = props
    return (

        <footer>
            <p>{answered}/{numQuestions} CONCLUÍDOS</p>
        </footer>

    )
}