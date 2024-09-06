import style from "./Button.module.scss";

interface ButtonProps {
  text: string;
  filled?: boolean;
}

export default function Button(props: ButtonProps) {
  return (
    <a
      href="#"
      className={`${style.button} ${props.filled && style.button_filled}`}
    >
      <div>{props.text}</div>
    </a>
  );
}

