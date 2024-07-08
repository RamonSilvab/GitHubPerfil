import styles from './Perfil.module.css'

// export default () => {
// export default function() {   

const Perfil = ({ nomeUsuario }) => {
    // const { endereco, nome } = props;
    return (
        <header className={styles.header}>  
            {/* {JSON.stringify(props)} */}
            <img className={styles.avatar} src={ `https://github.com/${nomeUsuario}.png` } />
            <h1 className={styles.name}>{ nomeUsuario }</h1> 
        </header>
    )
}

export default Perfil;