
import TodoList from "../component/TodoList/TodoList";
import styles from "./Home.module.css";

const Home = () => {
    //console.log("home");
    return (
        <>
            <div className={styles.container}>
                <div className={styles.child1}>
                    <figure>
                        <img src="https://img.freepik.com/free-photo/time-organization-concept-with-list-flat-lay_23-2149046758.jpg?w=2000" alt="TodoImg" width="30%" />
                        <figcaption className='fig-caption'>Just Do It ✌️</figcaption>
                    </figure>
                    <TodoList/>
                </div>
            </div>
        </>
    );
};

export default Home;  