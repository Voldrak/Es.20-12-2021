import React from "react";
import useFetch from "use-http";
import styles from "./Home.module.scss";

// products = [];

function Home() {


const options = {}
       const {data = []} = useFetch('https://fakestoreapi.com/products', options, [])


    return(
        <div className={styles.home}>
        <h3 className={styles.welcome}>Benvenuto al mio negozio</h3>
            <div className={styles.protucts}>
                    {data.map(data => 
                    (<main key={data.id}>
                    <div className={styles.form}>
                        <div className={styles.titPri}>
                            <h4 className={styles.title}>{data.title}</h4>
                            <h4 className={styles.price}>{data.price}$</h4>
                        </div>
                        <div className={styles.description}>
                            <p>{data.description} </p>
                        </div>
                        <div className={styles.imgDiv}>
                            <img src={data.image} className={styles.img} />
                        </div>
                        <div className={styles.rateCount}>
                        <p className={styles.rate}>{data.rating.rate}⭐</p>
                            <small className={styles.count}>{data.rating.count}</small>
                        </div>
                    </div>
                </main>))}
            </div>
        </div>
    )

    }

export { Home };