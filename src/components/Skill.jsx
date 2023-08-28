import React from 'react'

const skillText = [
  {
    title: "꿈을 설계하고 디자인한다.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et nulla non arcu gravida sollicitudin sit amet at dolor. In lectus elit, aliquet ac magna a, elementum elementum felis. Donec pellentesque, dolor vitae sodales consectetur, est sapien finibus diam, nec egestas sapien urna in ex."
  },
  {
    title: "열심히 할수록 기회는 따른다.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et nulla non arcu gravida sollicitudin sit amet at dolor. In lectus elit, aliquet ac magna a, elementum elementum felis. Donec pellentesque, dolor vitae sodales consectetur, est sapien finibus diam, nec egestas sapien urna in ex."
  },
  {
    title: "나에게 정직하다.",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et nulla non arcu gravida sollicitudin sit amet at dolor. In lectus elit, aliquet ac magna a, elementum elementum felis. Donec pellentesque, dolor vitae sodales consectetur, est sapien finibus diam, nec egestas sapien urna in ex."
  },
]

const Skill = () => {
  return (
    <section id="skill">
      <div className="skill__inner">
        <h2 className="skill_title">Challenge<em>나의 도전</em></h2>
        <div className="skill__desc">
          {skillText.map((skill, key) => (
            <div key={key}>
              <span>{key+1}</span>
              <h3>{skill.title}</h3>
              <p>{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skill