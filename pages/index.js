import styles from "../styles/Home.module.css";
import Nav from "../components/navBar/Nav";
import Content from "../components/Content./Content";
import Services from "../components/services/Services";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <nav className={styles.nav_container}>
          <Nav />
        </nav>
        <section>
          <Content />
        </section>
        <section>
          <Content />
        </section>
        <section>
          <Content />
        </section>
      </div>
      <section>{/* <Benefits /> */}</section>
    </>
  );
}
