import { useParams } from "react-router-dom"
import MainLayout from "../components/MainLayout"
import './style.css'

// eslint-disable-next-line react/prop-types
const AboutPage = ({ isLogged, setIsLogged, count }) => {
  const { name } = useParams()
  return (
    <MainLayout isLogged={isLogged} setIsLogged={setIsLogged} count={count} name={name}>
      <h1 style={{ margin: '30px auto', width: '100px', fontSize: '3rem' }}>About</h1>
      <div className='product-section'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo dolorum consequuntur ipsa laborum nisi culpa vero tempora placeat neque assumenda eveniet aperiam, in odio ea velit eligendi est maxime magnam ullam aliquid, quo, fuga totam. Repellat corrupti placeat ab similique obcaecati quidem consequuntur illum, assumenda soluta, inventore cupiditate quos blanditiis dicta rerum sit? Earum tempora doloribus, itaque esse officia, nobis aliquid molestiae accusamus quidem ullam excepturi repellat iste quasi modi optio et totam repellendus incidunt deleniti distinctio. Dolor nisi quos ullam consequuntur nemo saepe debitis necessitatibus iusto totam, labore laboriosam atque error quia beatae recusandae architecto, earum vitae quidem accusantium, facere rem inventore. Dolore pariatur necessitatibus alias deserunt expedita dolorem in nesciunt nemo, illo obcaecati possimus cupiditate ab ad vitae voluptatem illum ducimus repellendus porro eius officiis, quibusdam voluptatibus iusto! Impedit, labore ad. Cupiditate officiis ut accusamus repudiandae earum aliquid quos itaque quisquam ipsam, provident, architecto quis eveniet maxime rerum fugiat ea distinctio laboriosam voluptatum? Dolore id quod totam! Asperiores eos facilis molestiae veritatis voluptatibus dolores nemo dolorum corporis minima. Expedita et id magnam accusamus, aliquid provident, ex enim ratione nostrum quidem amet beatae. Quos assumenda quia dolores tenetur maxime laborum iusto quisquam similique qui modi quas deserunt iste, reprehenderit inventore nemo eius tempore nobis deleniti? Nesciunt error sequi commodi magni excepturi incidunt doloribus soluta, hic veniam officia, distinctio eum culpa dignissimos, illum nobis perferendis provident vero totam voluptates quam dolor libero voluptatum ipsa. Velit assumenda delectus perferendis illo est laudantium totam rerum veritatis alias vero eius sequi modi ipsa reprehenderit eos rem recusandae explicabo non dicta repudiandae, reiciendis officia ut nostrum. Deleniti illo unde neque quia nisi consectetur, tenetur voluptas, impedit natus recusandae ut numquam, excepturi ex doloribus quidem voluptatem perspiciatis laboriosam tempora rem eveniet perferendis temporibus est odit. Perferendis dolor eius facilis laborum reprehenderit! Nobis molestiae delectus impedit dicta illum unde aliquam fuga deserunt, laboriosam a neque similique, porro nihil. Tempore amet dolore explicabo voluptatem sint optio vero eaque delectus voluptates itaque dolor ipsum alias temporibus placeat animi adipisci nobis voluptas possimus nisi molestias dicta, et maiores esse fugiat! Maxime doloremque quidem alias dicta. Sint, veniam fugit. Totam nemo blanditiis dolores molestias, numquam eos placeat in autem explicabo beatae esse? Dolor, officiis maiores natus doloremque iure ipsam magnam libero, optio facere saepe necessitatibus dicta veniam iste aliquid quibusdam consequuntur recusandae veritatis qui? Quia doloremque maiores quas hic quam provident ab, saepe molestiae officiis? Quos recusandae sequi facilis error temporibus, velit perferendis ducimus odio rerum animi dolorem excepturi eligendi pariatur, saepe est earum, tempora delectus minus! A reiciendis aliquam veritatis animi sequi nemo facere consequatur porro magnam optio sint, autem asperiores perferendis omnis in illum dignissimos nostrum laborum ipsam possimus qui. Laudantium, eligendi veniam quam esse quos consequuntur. Quam odio vitae, laudantium debitis earum quae aut vero labore itaque sapiente sit repudiandae a natus dicta ducimus porro iure modi beatae nostrum quisquam qui.</div>
    </MainLayout >
  )
}
export default AboutPage