import Image from 'next/image'
import styles from './page.module.css'
import { generateClient } from "aws-amplify/data";
import { type Schema } from "@/amplify/data/resource";

const client = generateClient<Schema>()

const handleSubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const userInput = formData.get('userInput');

  await client.models.Todo.create({ content: 'User Input', userInput });
}

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Hello World!</h1>
      <form onSubmit={handleSubmit}>
        {/* Other form fields */}
        <input type="text" name="userInput" placeholder="Enter your input" />
        <button type="submit">Submit</button>
      </form>
    </main>

  )
}
