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
            src="https://yandex.ru/map-widget/v1/?display-text=%D0%A4%D0%B8%D0%BD%D0%B0%D0%BC&ll=91.434150%2C53.727167&mode=search&oid=26693914081&ol=biz&sll=91.434150%2C53.727167&sspn=0.012875%2C0.009047&text=%7B%22text%22%3A%22%D0%A4%D0%B8%D0%BD%D0%B0%D0%BC%22%2C%22what%22%3A%5B%7B%22attr_name%22%3A%22chain_id%22%2C%22attr_values%22%3A%5B%22252701201%22%5D%7D%5D%7D&z=16"
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
