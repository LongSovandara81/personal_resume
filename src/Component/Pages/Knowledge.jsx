import React from "react";

const datas = [
  {
    id: 1,
    year: 2017,
    place: "Sovannaphumi School",
    text: "I finished studying English at level 12.",
  },
  {
    id: 2,
    year: 2021,
    place: "Vattanak Chhoung Leap High School.",
    text: "I graduted grade 12.",
  },
  {
    id: 3,
    year: 2022,
    place: "Instinct Institute",
    text: "I finished basic web development short course.",
  },
  {
    id: 4,
    year: 2022,
    place: "Royal University of Phnom Penh",
    text: "I finished Year 1 & 2 in majoring computer science.",
  },
  {
    id: 5,
    year: "Now",
    place: "Udemy Online",
    text: "I was studying UX/UI design.",
  },
];

const langs = [
  {
    id: 1,
    img: "images/html.png",
    lan: "HTML",
    per: "70",
  },
  {
    id: 2,
    img: "images/css.png",
    lan: "CSS",
    per: "60",
  },
  {
    id: 3,
    img: "images/javascript.png",
    lan: "JavaScript",
    per: "60",
  },
  {
    id: 4,
    img: "images/react.png",
    lan: "React",
    per: "60",
  },
  {
    id: 5,
    img: "images/bootstrap.png",
    lan: "Bootstrap",
    per: "60",
  },
  {
    id: 6,
    img: "images/sql-server.png",
    lan: "Database",
    per: "60",
  },
  {
    id: 7,
    img: "images/figma.png",
    lan: "UX-UI",
    per: "60",
  },
  {
    id: 8,
    img: "images/c.png",
    lan: "C-Cpp",
    per: "70",
  },
  {
    id: 9,
    img: "images/english.png",
    lan: "English",
    per: "70",
  },
  {
    id: 10,
    img: "images/khmer.png",
    lan: "Khmer",
    per: "80",
  },
  {
    id: 11,
    img: "images/word.png",
    lan: "Word",
    per: "80",
  },
  {
    id: 12,
    img: "images/pp.png",
    lan: "PowerPoint",
    per: "80",
  },
  {
    id: 13,
    img: "images/Excel.png",
    lan: "Excel",
    per: "60",
  },
];

const Knowledge = () => {
  return (
    <section className="know" id="know">
      <div className="content">
        <div className="title text-right-animation">
          <span>My Knowledges</span>
        </div>
        <div className="know-details">
          <div className="text text-animation">
            <div className="topic">Programming Languages</div>
            <p>
              I am currently learning a programming language. I am eager to
              expand my skills and knowledge in this field, and I look forward
              to applying what I learn to create innovative solutions and
              projects. With dedication and practice, I am confident that I will
              become proficient in this programming language and open up new
              opportunities for myself in the tech industry.
            </p>
            <div className="topic grid-1x2">Educations</div>
            {datas.map((data) => (
              <div className="experience" key={data.id}>
                <div className="num">{data.year}</div>
                <div className="exp">
                  {data.place} <br /> {data.text}
                </div>
              </div>
            ))}
          </div>
          <div className="boxes card-inner1 text-animation">
            {langs.map((lang) => (
              <div className="box" key={lang.id}>
                <div className="topic">
                  <img className="img" src={lang.img} alt="" />
                  {lang.lan}
                </div>
                <div className="container">
                  <div className="perc">
                    <div
                      className={lang.lan.toLowerCase()}
                      style={{ width: `${lang.per}%` }}
                    >
                      {lang.per}%
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Knowledge;
