'use client';
import React from 'react'
import { useRouter } from 'next/navigation'
import { useState } from 'react';
import Link from 'next/link';
import styles from './navbar.module.css'
const Navbar = (props) => {
    
    const router= useRouter();
    const handleClickHome = (e) => {
        e.preventDefault();
        router.push('/');
    };
    const handleClickMyList = (e) => {
        e.preventDefault();
        router.push('/browse/mylist');
    };
    
    const{username}=props
    const [showDropdown , setshowDropdown
    ] = useState(false)
    const handleShowDropdown=(e)=>{
        e.preventDefault()
        setshowDropdown(!showDropdown)
    
    
    
    }
    return (
      <div className={styles.container}>
        navbar
    <div className={styles.wrapper}>
<a  className={styles.logoLink}>
<div className={styles.logoWrapper}>
Netflix


</div>

</a>



<ul className={styles.navItems}>
    <li className={styles.navItem} onClick={handleClickHome}>Home</li>
    <li className={styles.navItem2}
    onClick={handleClickMyList}
    
    >My List</li>
    </ul>        


<nav className={styles.navContainer}>
<div>
<button className={styles.usernameBtn} onClick={handleShowDropdown}>
<p className={styles.username}>
{username}
</p>
</button>
{showDropdown &&  (
<div className={styles.navDropdown}>
    <div>

<Link href="/login" className={styles.linkName}>Sign Out</Link>
<div className={styles.lineWrapper}></div>
    </div>
</div>)
}
</div>





</nav>




        
        
        
        
        </div>
        </div>
  )
}

export default Navbar