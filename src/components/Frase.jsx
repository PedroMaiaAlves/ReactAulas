import styles from './Frase.module.css'

function frase(){
    return(
        <div className={styles.fraseContainer}>
            <p className={styles.fraseContent}>Componente contendo uma frase para ser reutilizado</p>
        </div>
    );
}

export default frase