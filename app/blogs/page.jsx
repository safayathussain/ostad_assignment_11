import React from 'react'
import data from '../../public/blogData'
import styles from './page.module.css'
import Link from 'next/link'

const Blogs = () => {
  return (
    <div>
        {
          data.map(blog => 
            <div className={styles.blog}>
              <Link href={`/blog/${blog.id}`} >
            <p>{blog.title}</p>
          </Link>
            </div>)
        }
    </div>
  )
}

export default Blogs
