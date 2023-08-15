import React from "react";
import styles from "./page.module.css";
import data from '../../../public/blogData'
const page = ({ params }) => {
  const id = params.id;
  let blog  = {}
  data.map(item => {
    if(item.id == `${id}`){
      blog = item
    }    
  });
  return (
    <div className={styles.main_container}>
      <h2>{blog?.title}</h2>
      <p>{blog?.date}</p>
      <h2>{blog.content}</h2>
    </div>
  );
};

export default page;
