import Panel from "./Panel";
import "./accordion.css"
import { useState } from "react";

const Accordion = ({title}) => {
  // return (
  //   <div className="accordion">
  //     <h1 className="accordion-title">{title}</h1>
      
  //     <Panel title="Panel 1" >This is the content for Panel 1</Panel>
  //     <br />
  //     <Panel title="Panel 2" >This is the content for Panel 2</Panel>

  //   </div>
  // )



  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section className="accordion">
      <h1 className="accordion-title">{title}</h1>
      <Panel title={"Panel 1"} showContent={activeIndex === 0} onShow={() => setActiveIndex(0)}>
        this is the content for panel 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui optio dolore voluptas omnis error sit, quos impedit architecto ex quam, dolores nostrum voluptatibus tempora unde veritatis explicabo quidem animi harum?x
      </Panel>

      <br/>

      <Panel title={"Panel 2"} showContent={activeIndex === 1} onShow={() => setActiveIndex(1)}>
        this is the content for panel 2 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus neque excepturi veniam a magnam perspiciatis magni eos nam, atque cumque illo quae ad ea similique placeat, aspernatur, quia repudiandae dolorum.
      </Panel>
    </section>
  );

}

export default Accordion