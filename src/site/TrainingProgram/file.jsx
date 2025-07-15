import React from 'react';
import './file.css';
import Certifications from '../Certifications/components/cert';

const philosophyData = [
  {
    icon: 'https://www.group-ib.com/wp-content/uploads/urp-side-card-1-min.jpg.webp' ,
    title: 'Practical Knowledge',
    desc: 'Learn from top-tier industry professionals who bring real-world experience and deep domain.',
  },
  {
        icon: 'https://www.group-ib.com/wp-content/uploads/urp-side-card-1-min.jpg.webp',
    title: 'Expert Instructors',
    desc: 'Learn from industry leaders with years of experience and deep domain knowledge.',
  },
  {
       icon: 'https://www.group-ib.com/wp-content/uploads/urp-side-card-1-min.jpg.webp' ,

    title: 'Career Advancement',
    desc: "Programs designed to equip you with skills demanded by today's job market.",
  },
    {
    icon: 'https://www.group-ib.com/wp-content/uploads/urp-side-card-1-min.jpg.webp' ,
    title: 'Growth Scope',
    desc: 'Focus on tasks and the practical teacing and experience for immediate application.',
  },
  {
    icon: 'https://www.group-ib.com/wp-content/uploads/urp-side-card-1-min.jpg.webp' ,
    title: 'Results-Focused',
    desc: 'Every session is designed to deliver measurable outcomes — skill gains, confidence boosts, and workplace impact.',
  },
  {
    icon: 'https://www.group-ib.com/wp-content/uploads/urp-side-card-1-min.jpg.webp' ,
    title: 'Practical Knowledge',
    desc: 'Focus on real-world scenarios and hands-on experience for immediate application.',
  },

];

const coursesData = [
  {
    img: 'https://www.group-ib.com/wp-content/uploads/demo-2.png.webp',
    alt: '',
    title: '11 Modules',
    desc: 'Specialized lessons',
  },
  {
    img: 'https://www.group-ib.com/wp-content/uploads/demo-2.png.webp',
    alt: '',
    title: '3 Workshops',
    desc: 'Cyber Awareness Workshops',
  },
  {
    img: 'https://www.group-ib.com/wp-content/uploads/demo-2.png.webp',
    title: '1 live training',
    desc: 'Become the lead of field.',
  },
  // {
  //   img: 'https://www.group-ib.com/wp-content/uploads/demo-2.png.webp',
  //   title: '1 Program',
  //   desc: 'Become ultimate SOC.',
  // },
];

const benefitsData = [
  {
    icon:'https://www.group-ib.com/wp-content/uploads/cards-2-1-min.png.webp',
    title: 'Certified Programs',
    desc: 'Globally recognized certifications to boost your professional profile.',
  },
  {
    icon:'https://www.group-ib.com/wp-content/uploads/cards-2-1-min.png.webp',
    title: 'Flexible Learning',
    desc: 'Study at your own pace with on-demand content and live sessions.',
  },
  {
    icon: 'https://www.group-ib.com/wp-content/uploads/cards-2-1-min.png.webp',
    title: 'Community Support',
    desc: 'Connect with peers and instructors for collaborative learning.',
  },
  // {
  //   icon: 'https://www.group-ib.com/wp-content/uploads/cards-2-1-min.png.webp',
  //   title: 'Cutting-Edge Content',
  //   desc: 'Regularly updated curriculum to stay ahead in your field.',
  // },
];

const tailwindConfigScript = `
  tailwind.config = {
    theme: {
      extend: {
        fontFamily: {
          inter: ['Inter', 'sans-serif'],
        },
        colors: {
          'primary-blue-accent': '#007bff',
          'deep-blue': '#1a2a3a',
          'dark-black-blue': '#0d1117',
          'light-blue-text': '#5ED5FF',
          'light-gray-text': '#E2E8F0',
        },
        boxShadow: {
          'neon': '0 0 12px #5ED5FF, 0 0 24px #007bff',
        },
        backgroundImage: {
          'hero-gradient': 'linear-gradient(135deg, #0d1117 0%, #1a2a3a 100%)',
        },
      },
    },
  };
`;

const TrainingPage = () => (
  <div className="min-h-screen bg-black font-inter antialiased">
    {/* Fonts & Tailwind (for development preview purposes) */}
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
      rel="stylesheet"
    />
    <script src="https://cdn.tailwindcss.com"></script>
    <script dangerouslySetInnerHTML={{ __html: tailwindConfigScript }}></script>

    {/* HERO SECTION */}
     <section className="training-hero">
        <div className="training-hero-content">
          <h1  className="hero-head" style={{fontWeight:'500'}}>Unleash Your Potential Through Expert-Led Training </h1>
          {/* <p className="details-teams" style={{fontFamily:'system-ui'}}> 
          Comprehensive programsspecifically designed to elevate your skills and career.
          </p> */}
          {/* <GradientButton name="Request a Consultation" /> */}
        </div>
      </section>

    {/* OVERVIEW SECTION */}
    <section id="overview-training" className="py-14 px-2 sm:px-4 bg-dark-black-blue" style={{marginTop:'13vh'}}>
      <div className="container-training mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-10">Our Training Philosophy</h1>
        <div className="philosophy-grid max-w-[100%] mx-auto">
          {philosophyData.map((item, idx) => (
            <div
              key={idx}
              className="philosophy-card flex gap-[1.8rem] flex-col items-center "
            >
              <div  className='image-icon' style={{width:'16vw'}}> 

              <img style={{height:'inherit', alignSelf:'center', width:'100%'}} src={item.icon} alt=""  />
              </div>

              <div className='w-[90%]'> 
              <h4 className="text-[1.5rem] font-semibold text-light-blue-text mb-2">{item.title}</h4>
              <span className="text-gray-400 text-sm sm:text-base">{item.desc}</span>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>

    {/* COURSES SECTION */}
    <section id="courses" className="py-14 px-2 sm:px-4" style={{marginBottom:'40px'}}>
      <div className="container-training mx-auto text-center">
        <h1 className="heading-trainings-cards text-3xl sm:text-4xl font-bold ">Hack-Sec Training Program </h1>
        <div className="train-card-div grid gap-9 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {coursesData.map((course, idx) => (
            <div
              key={idx}
              className="training-section-cards  rounded-2xl shadow-lg hover:shadow-neon  overflow-hidden flex flex-col md:w-[27vw] transition-transform duration-300 hover:scale-105"
            >
              <img
                src={course.img}
                alt={course.alt}
                style={{marginBottom:'15px'}}
                className="w-[55%] h-40 self-center object-cover "
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://placehold.co/600x400/cccccc/000000?text=Image+Not+Found';
                }}
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3  className="text-xl sm:text-2xl font-bold text-blue-400 mb-2">{course.title}</h3>
                <span className="text-gray-400 mb-4 text-base sm:text-lg flex-grow">{course.desc}</span>
                <div className="mt-auto">
                  {/* <a
                    href="#"
                    className="inline-block bg-primary-blue-accent text-white hover:bg-blue-300 hover:text-blue-900 transition-colors font-semibold py-2 px-6 rounded-full text-md shadow focus:ring-4 focus:ring-light-blue-text"
                  >
                    Learn More
                  </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* WHY US SECTION */}
    <section  className="py-14 px-2 sm:px-4 " style={{margin:'4.5rem 0'}}>
      <div className="container-training mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-light-blue-text mb-10">Why Hack-Sec ?</h1>
        <div className="why-us-info grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3  mx-auto">
          {benefitsData.map((benefit, idx) => (
            <div
              key={idx}
              className="p-6 bg-deep-blue rounded-2xl shadow-lg hover:shadow-neon transition-all duration-300  border border-transparent hover:border-light-blue-text "
              style={{width:'29vw', display:'flex', flexDirection:'column', alignItems:'center', }}
            >
              <img className='icon-why-us w-[4vw]'  src={benefit.icon}/>
              <h3 className="text-lg sm:text-xl font-semibold text-blue-500 mb-2"
              style={{margin:'1rem 0 0.4rem 0'}}>
                {benefit.title}</h3>
              <span className="text-gray-300 text-sm sm:text-base" style={{width:'80%'}}>{benefit.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section> 
      <Certifications heading={"Our Training Programs"}/> 
    </section>
  </div>
);


export default TrainingPage;
