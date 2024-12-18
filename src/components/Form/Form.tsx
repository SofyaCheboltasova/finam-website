import style from "./Form.module.scss";
import {ChangeEvent, useEffect, useRef, useState} from "react";
import Button from "../Button/Button.tsx";

interface FormProps {
    setIsFormOpened: (val: boolean) => void;
}

export function Form(props: FormProps) {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [tel, setTel] = useState("");
    const [sendError, setSendError] = useState<string | null>(null);
    const [sendMessage, setSendMessage] = useState<string | null>(null);

    useEffect(() => {
        if(name !== '')
            validateName();
    }, [name]);

    useEffect(() => {
        if(tel !== '')
            validateTel();
    }, [tel]);

    useEffect(() => {
        if(email !== '')
            validateEmail();
    }, [email]);

    const [errors, setErrors] = useState({
        name: false,
        tel: false,
        email: false,
    });

    const ref = useRef({
        name: null as HTMLInputElement | null,
        tel: null as HTMLInputElement | null,
        email: null as HTMLInputElement | null,
    });


    async function fetchRequest() {
        const text =
            '<b>Новая заявка с сайта</b>\n' +
            '- <b>Имя Фамилия:</b> ' + name + '\n' +
            '- <b>Телефон:</b> ' + tel + '\n' +
            '- <b>Email:</b> ' + email;

        const url = `https://api.telegram.org/bot${import.meta.env.VITE_TG_BOT}/sendMessage`;
        const messageData = {
            chat_id: import.meta.env.VITE_CHAT_ID,
            text: text,
            parse_mode: 'HTML'
        };


        setSendMessage('Отправляем...');
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(messageData),
        });

        if(response.ok) {
            await response.json();
            setSendMessage('Скоро с вами свяжется наш специалист!');
        }
        else {
            setSendError('Ошибка! Повторите попытку')
        }
    }

    function validateName() {
        if (name === "" && ref.current.name) {
            ref.current.name.classList.add(style.error);
            setErrors((prev) => ({ ...prev, name: true }));
        } else if (ref.current.name) {
            setErrors((prev) => ({ ...prev, name: false }));
            ref.current.name.classList.remove(style.error);
        }
    }

    function validateEmail() {
        const emailRegExp = new RegExp(`^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$`)

        if ((email === "" || !emailRegExp.test(email)) && ref.current.email) {
            ref.current.email.classList.add(style.error);
            setErrors((prev) => ({ ...prev, email: true }));
        } else if (ref.current.email) {
            setErrors((prev) => ({ ...prev, email: false }));
            ref.current.email.classList.remove(style.error);
        }
    }

    function validateTel() {
        const telRegExp = new RegExp(`^\\+7\\s?\\(?\\d{3}\\)?\\s?\\d{3}[-.\\s]?\\d{2}[-.\\s]?\\d{2}$|^8\\s?\\d{3}\\s?\\d{3}[-.\\s]?\\d{2}[-.\\s]?\\d{2}$`)

        if ((tel === "" || !telRegExp.test(tel)) && ref.current.tel) {
            ref.current.tel.classList.add(style.error);
            setErrors((prev) => ({ ...prev, tel: true }));
        } else if (ref.current.tel) {
            setErrors((prev) => ({ ...prev, tel: false }));
            ref.current.tel.classList.remove(style.error);
        }
    }

    function validate() {
        setSendError(null);
        setSendMessage(null);

        validateName()
        validateTel()
        validateEmail()
    }

    async function onSubmit() {
        validate();
        if((!errors.name && !errors.tel && !errors.email) && (name !== '' && email !== '' && tel !== '')) {
            await fetchRequest()
        }
    }

    return (
        <>
        <div className={style.background} onClick={() => props.setIsFormOpened(false)}> </div>
            <form className={style.form__wrapper}>
            <h4>Свяжитесь с нами</h4>
            <div className={style.socials}>
                <Button text={'WhatsApp'} href={'https://wa.me/79134489089'} />
                <Button text={'Telegram'} href={'https://t.me/+79134489089'}/>
                <Button text={'Звонок'} href={'tel:79134489089'}/>
            </div>

            <h4>или оставьте заявку на консультацию</h4>
                <div className={style.inputs}>
                    <input
                        ref={(el) => (ref.current.name = el)}
                        type="text"
                        name="name"
                        placeholder={'Имя Фамилия'}
                        className={style.input}
                        required
                        value={name}
                        onInput={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                    />
                    {errors.name && <span className={style.error_text}>Введите корректные данные</span>}
                    <input
                        ref={(el) => (ref.current.tel = el)}
                        type="tel"
                        name="tel"
                        placeholder={'+x (xxx) xx-xxx-xx'}
                        className={style.input}
                        required
                        value={tel}
                        onInput={(e: ChangeEvent<HTMLInputElement>) => setTel(e.target.value) }
                    />
                    {errors.tel && <span className={style.error_text}>Формат: +7 (XXX) XXX-XX-XX или 8XXXXXXXXXX</span>}
                    <input
                        ref={(el) => (ref.current.email = el)}
                        type="email"
                        name="email"
                        value={email}
                        placeholder={'user@example.com'}
                        onInput={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                        className={style.input}
                    />
                    {errors.email && <span className={style.error_text}>Формат: user@example.com</span>}
                </div>

                {sendMessage && <span className={style.sent_ok}>{sendMessage}</span>}
                {sendError && <span className={style.error_text}>{sendError}</span>}
                <Button text={'Отправить'} onClick={onSubmit}/>
            </form>
        </>
    )
}