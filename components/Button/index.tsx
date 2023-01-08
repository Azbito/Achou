import { ButtonHTMLAttributes } from "react"
import styles from './button.module.css'

type ButtonProps = {
  title: string,
  backgroundColor?: string,



} & ButtonHTMLAttributes<HTMLButtonElement>


export default function Button({ title, backgroundColor, ...props }: ButtonProps) {
  return (
    <button className={styles.button} style={{ backgroundColor }} {...props}>{title}</button>
  )
}