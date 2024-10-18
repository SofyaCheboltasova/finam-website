import style from "./Button.module.scss";

interface ButtonProps {
  text: string;
  href?: string;
  filled?: boolean;
  onClick?: () => void;
}

export default function Button(props: ButtonProps) {
  return (
    <a
      href={props.href}
      target="_blank"
      className={`${style.button} ${props.filled && style.button_filled}`}
      onClick={props.onClick}
    >
      <div>{props.text}</div>
    </a>
  );
}
