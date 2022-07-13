import styles from './Header.module.css'
import logoToDoList from '../assets/img/logo.svg'

export function Header(){
    return (
        <header className={styles.header}>
            <img src={logoToDoList} alt="Logotipo Cliente"/>
        </header>
    )
}