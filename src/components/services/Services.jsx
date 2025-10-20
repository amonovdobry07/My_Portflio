import "./Services.css"
import { BsCheckLg } from "react-icons/bs";
const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer </h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
            <div className="service__head">
                <h3>UI/UX Design</h3>
            </div>

            <ul className="service-list">
              <li>  
                  <BsCheckLg className="service__list-icon" />
                  <p>Foydalanuvchi uchun qulay va estetik interfeys dizaynini yarataman.</p>
              </li>

                <li>  
                  <BsCheckLg className="service__list-icon" />
                  <p>Foydalanuvchi tajribasini tahlil qilib, saytdan foydalanishni osonlashtiraman.</p>
              </li>

                <li>  
                  <BsCheckLg className="service__list-icon" />
                  <p>Prototip va wireframe orqali dizayn konsepsiyalarini ishlab chiqaman.</p>
              </li>

                <li>  
                  <BsCheckLg className="service__list-icon" />
                  <p>Mobil va desktop versiyalar uchun moslashtirilgan dizaynlar yarataman.</p>
              </li>

                <li>  
                  <BsCheckLg className="service__list-icon" />
                  <p>Ranglar, tipografiya va brend imidjiga mos dizayn echimlarini taklif qilaman.</p>
              </li>

                <li>  
                  <BsCheckLg className="service__list-icon" />
                  <p>Figma va Adobe XD yordamida professional dizaynlar tayyorlayman.</p>
              </li>
            </ul>
        </article>

        {/* End Off Ui/Ux */}

        <article className="service">
            <div className="service__head">
                <h3>Web Development</h3>
            </div>

            <ul className="service-list">
              <li>  
                  <BsCheckLg className="service__list-icon" />
                  <p>HTML, CSS va JavaScript asosida zamonaviy web sahifalar yarataman.</p>
              </li>

                <li>  
                  <BsCheckLg className="service__list-icon" />
                  <p>React yordamida dinamik va tezkor foydalanuvchi interfeyslarini ishlab chiqaman.</p>
              </li>

                <li>  
                  <BsCheckLg className="service__list-icon" />
                  <p>Saytni barcha ekran o‘lchamlariga mos responsive dizaynga ega qilaman.</p>
              </li>

                <li>  
                  <BsCheckLg className="service__list-icon" />
                  <p>Interaktiv komponentlar va animatsiyalar bilan saytni jonlantiraman.</p>
              </li>

                <li>  
                  <BsCheckLg className="service__list-icon" />
                  <p>Back-end bilan bog‘lanadigan REST API integratsiyasini amalga oshiraman.</p>
              </li>

                <li>  
                  <BsCheckLg className="service__list-icon" />
                  <p>Kod strukturasini toza va optimallashtirilgan holda yozaman.</p>
              </li>

              <li>  
                  <BsCheckLg className="service__list-icon" />
                  <p>Git orqali loyihalarni boshqarish va jamoa bilan ishlash tajribasiga egaman.</p>
              </li>

            </ul>
        </article>

        {/* End Off Web Development */}
      
        <article className="service">
            <div className="service__head">
                <h3>Content Creation</h3>
            </div>

            <ul className="service-list">
              <li>  
                  <BsCheckLg className="service__list-icon" />
                  <p>Veb-saytlar va ijtimoiy tarmoqlar uchun sifatli kontent ishlab chiqaman.</p>
              </li>

                <li>  
                  <BsCheckLg className="service__list-icon" />
                  <p>Blog va maqolalar orqali brendning ishonchliligini oshiraman.</p>
              </li>

                <li>  
                  <BsCheckLg className="service__list-icon" />
                  <p>SEO tamoyillariga asoslangan matnlar yozaman.</p>
              </li>

                <li>  
                  <BsCheckLg className="service__list-icon" />
                  <p>Grafik, video va animatsion materiallar yordamida kontentni boyitaman.</p>
              </li>

                <li>  
                  <BsCheckLg className="service__list-icon" />
                  <p>Brend ovoziga mos, maqsadli auditoriyaga yo‘naltirilgan kontent yarataman.</p>
              </li>

                <li>  
                  <BsCheckLg className="service__list-icon" />
                  <p>Marketing strategiyasiga mos tarzda post va reklama matnlarini tayyorlayman.</p>
              </li>
            </ul>
        </article>


      </div>
    </section>
  )
}

export default Services
