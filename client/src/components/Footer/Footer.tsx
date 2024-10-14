import { contacts } from "../../assets/data/contactsData";
import style from "./Footer.module.scss";

export function Footer() {
  return (
    <footer id="contacts" className={style.footer}>
      <h2>КОНТАКТНАЯ ИНФОРМАЦИЯ</h2>

      <section className={style.footer__content}>
        <div className={style.content__contacts}>
          <ul className={style.contacts__socials}>
            {contacts.map((contact) => {
              return (
                <a
                  id={contact.id.toString()}
                  className={style.social}
                  href={contact.href}
                  target="_blank"
                >
                  <img src={contact.logo} alt="" />
                  <span>{contact.name}</span>
                </a>
              );
            })}
          </ul>

          <ul className={style.contacts__info}>
            <li className={style.social}>
              <img src="images/contacts/location.png" alt="" />
              <span>Колхозная, дом 34, офис 2 этаж</span>
            </li>

            <li className={style.social}>
              <img src="images/contacts/clocks.png" alt="" />
              <span>пн-пт с 10-00 до 19-00</span>
            </li>

            <li className={`${style.social} ${style.lightText}`}>
              Юридический адрес: Россия, 655017, Хакасия Респ, г Абакан, ул
              Колхозная, д.34, оф.109Н
            </li>
            <li className={`${style.social} ${style.lightText}`}>
              ИНН: 1901107696
            </li>
          </ul>
        </div>

        <div className={style.content__geo}>
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A653c9c339cb069088a97d4901ca17f65133456642e628b082031e9a1d586d46e&amp;source=constructor"
            width="100%"
            height="400"
            className={style.geo__map}
          ></iframe>
          <ul className={style.geo__links}>
            <li>
              <a href="https://go.2gis.com/bslbl2" target="_blanc">
                Открыть в 2ГИС
              </a>
            </li>
            <li>
              <a href="https://yandex.ru/maps/-/CDX1fRmF" target="_blanc">
                Открыть в Яндекс Картах
              </a>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
}
