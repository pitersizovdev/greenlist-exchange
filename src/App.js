import styles from './app.module.css'
import NavPill from './components/widgets/NavPill/NavPill';

function App() {
  return (
    <div className={styles.container}>
      <NavPill/>
    </div>
  );
}

export default App;
