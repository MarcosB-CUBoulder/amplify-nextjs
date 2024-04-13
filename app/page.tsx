"use client";
import Image from 'next/image'
import styles from './page.module.css'
import TodoList from "@/components/TodoList";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Hello World!</h1>
      <TodoList />
    </main>

  )
}
