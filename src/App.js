import styles from './app.module.css'
import NavBar from './components/widgets/NavBar/NavBar';

function App() {
  return (
    <div className={styles.container}>
      <NavBar/>
    </div>
  );
}

export default App;
