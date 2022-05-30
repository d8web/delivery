import SearchInput from "../../components/SearchInput";
import styles from "../../styles/Home.module.css";

const Menu = () => {

    const handleSearch = (searchValue: string) => {
        console.log(`Você buscou por: ${searchValue}`);
    }

    return(
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.headerTop}>
                    <div className={styles.headerTopLeft}>
                        <div className={styles.headerTitle}>Seja bem vindo(a) 👋</div>
                        <div className={styles.headerSubtitle}>O que deseja para hoje?</div>
                    </div>
                    <div className={styles.headerTopRight}>
                        <div className={styles.menuButton}>
                            <div className={styles.menuLine}></div>
                            <div className={styles.menuLine}></div>
                            <div className={styles.menuLine}></div>
                        </div>
                    </div>
                </div>
                <div className={styles.headerBottom}>
                    <SearchInput
                        mainColor="#fb9400"
                        onSearch={handleSearch}
                    />
                </div>
            </header>
        </div>
    );
}

export default Menu;