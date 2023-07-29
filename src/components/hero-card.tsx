import mummaImage from "../assets/mumma_image.jpg";

const HeroCard = () => {
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row p-10 drop-shadow-md border-2 rounded-xl bg-base-300 border-gray-300">
        <img src={mummaImage} className="max-w-[200px] rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Nutrilinic Diets</h1>
          <p className="py-6">
            Hello, I'm Ruchi Agnihotri, the founder of Nutrilinic Diets, an
            online Diet Clinic specializing in Clinical Nutrition and Wellness
            Coaching. With over 8+ years of experience, I have catered to more
            than 20,000 clients, helping them achieve their health and wellness
            goals. My expertise lies in Personalized Healthcare, Prenatal and
            Postnatal Nutrition, Nutrition for kids and Senior Citizens,
            Oncological Nutrition, Diabetes, Fatty Liver, Hypertension, and
            PCOS/PCOD.
            <br />
            <br />I have had the privilege of working with esteemed institutions
            such as Columbia Asia, Polaris Hospital, and the Center for Diabetes
            and Allied Sciences (Ex-HOD), as well as collaborating with Wellness
            corporates like VLCC and Shyft. As a public speaker, I have
            addressed audiences through FM radio [Gurgaon ki Awaaz] and
            conducted free educational camps in schools and urban health centers
            under government health programs. I am also actively involved in
            volunteering at NGOs, providing counseling to underprivileged
            pregnant women and lactating mothers on the importance of good
            health, healthy eating habits, and hygiene.
            <br />
            <br /> Additionally, I am a lifetime member of the Nutrition Society
            of India, a 55-year-old body created under the National Institute of
            Nutrition Hyderabad. Looking forward to connecting and engaging with
            professionals in the healthcare and wellness domain on LinkedIn.
            <br />
            <br />
            Let's collaborate and make a positive impact on people's health and
            well-being together. Reach out to us on the following:
          </p>
          <div className="items-center sm:items-start">
            <a href="tel:+919315555603" className="btn btn-accent mr-4 mb-4">
              Call Us
            </a>
            <a
              href="mailto:nutrilinicdiets@gmail.com"
              className="btn btn-accent mr-4 mb-4"
            >
              Mail Us
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=9315555603"
              className="btn btn-accent mb-4"
            >
              Send a Message on Whatsapp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
