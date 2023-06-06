import React from 'react'
// import { Link } from 'react-router-dom'
import '../features/PricingStyles.css'
import jpg1 from '../../assets/img1.jpg'
import jpg2 from '../../assets/img2.jpg'
import jpg3 from '../../assets/img3.jpg'

import jpg7 from '../../assets/img7.jpg'
import jpg10 from '../../assets/img10.jpg'
import jpg11 from '../../assets/img11.jpg'
import jpg12 from '../../assets/img12.jpg'
import jpg13 from '../../assets/img13.png'
import jpg14 from '../../assets/img14.png'
import jpg15 from '../../assets/img15.png'
const btnClick = () => {
  window.open('https://forms.gle/gcFaw26hrtirEyQRA')
}

const btnClick2 = () => {
  window.open('https://forms.gle/hK4i4vf1379iJw2K9')
}


const btnClick3 = () => {
  window.open('https://forms.gle/B8PcFdP78T1v13dg7')
}

const btnClick4 = () => {
  window.open('https://forms.gle/QXAE96Wm9gQM4k6T8')
}

const btnClick5 = () => {
  window.open('https://forms.gle/Bs4d6terUoCbjreHA')
}
const btnClick6 = () => {
  window.open('https://forms.gle/Xcn9bPMvtugZyk3F9')
}
const btnClick7 = () => {
  window.open('https://forms.gle/hvVsNk3sS53K1Bj78')
}
const btnClick8 = () => {
  window.open('https://forms.gle/TmonSWLYu8EuVE3U9')
}

const btnClick9 = () => {
  window.open('https://forms.gle/197KV1Y9XDPshkVJA')
}
const btnClick10 = () => {
  window.open('https://forms.gle/7RSBPZBpxSf3BGST8')
}
const btnClick11 = () => {
  window.open('https://forms.gle/6PASGXLLdCT1w3na9')
}
const btnClick12 = () => {
  window.open('https://forms.gle/8QrXAo5kGs6GuJh66')
}


const Pricing = () => {
  return (
    <div className='pricing'>
      <div className='card-container'>
      <div className='card'>
          <h3>Treasury Accountant</h3>
          <span className='bar'></span>
          <img src={jpg2} className='img3' alt='' />
          <p>The Financial and Treasury Accountant is responsible for to control all loan payment interest. The incumbent manages and maintains all bank accounts associated with the Organisation. </p>
          <p>Contract Type: Permanent</p>
          <p>Closing Date: 8 June 2023</p>
          {/* <Link to='https://forms.gle/KEgQLDYjfyMrg9kJ6' className='btn'>Apply</Link> */}
          <button btnClass={"btn"} onClick={btnClick12.bind(this)} >
            Apply Now
          </button>
        </div>

      <div className='card'>
          <h3>Chief Executive Officer</h3>
          <span className='bar'></span>
          <img src={jpg3} className='img3' alt='' />
          <p>Support the Chief Executive Officer in leading the organization in the successful pursuit of its vision, mission, and strategic objectives through effective and efficient management of the
            operational requirements delegated by the Chief Executive Officer</p>
          <p>Contract Type: Fixed term (5 year contract)</p>
          <p>Closing Date: 9 June 2023</p>
          {/* <Link to='https://forms.gle/KEgQLDYjfyMrg9kJ6' className='btn'>Apply</Link> */}
          <button btnClass={"btn"} onClick={btnClick11.bind(this)} >
            Apply Now
          </button>
        </div>

        <div className='card'>
          <h3>HEAD: Engineering, Planning and Execution </h3>
          <span className='bar'></span>
          <img src={jpg7} className='img3' alt='' />
          <p> To manage, lead, coordinate and provide strategic direction to the Engineering, Planning & Execution business unit, ensuring optimal alignment with the Company’s strategies and business requirements, with the delivery of projects, programs, enterprise architectures and processes to satisfy these strategies and business requirements.</p>
          <p>Contract Type: Permanent</p>
          <p>Closing Date: 01 June 2023 </p>
          {/* <Link to='https://forms.gle/KEgQLDYjfyMrg9kJ6' className='btn'>Apply</Link> */}
          <button btnClass={"btn"} onClick={btnClick4.bind(this)} >
            Apply Now
          </button>
        </div>
        <div className='card'>
          <h3>Principal Officer </h3>
          <span className='bar'></span>
          <img src={jpg10} className='img3' alt='' />
          <p>

          Assume the role as PO of the Organization, responsible for overseeing the operational functioning of the Scheme in
          line with delegated authority as per the Approvals Framework. 
          
          </p>
          <p>Contract Type: Permanent</p>
          <p>Closing Date: 01 June 2023 </p>
          {/* <Link to='https://forms.gle/KEgQLDYjfyMrg9kJ6' className='btn'>Apply</Link> */}
          <button btnClass={"btn"} onClick={btnClick5.bind(this)} >
            Apply Now
          </button>
        </div>
        <div className='card'>
          <h3>Director: Corporate Services and Finance</h3>
          <span className='bar'></span>
          <img src={jpg11} className='img3' alt='' />
          <p>To lead and manage the efficient delivery of organisation’s core financial management and corporate services
              by providing financial services, ensuring adherence to good governance procedures and compliance with
              statutory requirements; to manage the delivery of the organisational operations through leading, organising
              and managing the team.</p>
          <p>Contract Type: Permanent</p>
          <p>Closing Date: 01 July 2023 </p>
          {/* <Link to='https://forms.gle/KEgQLDYjfyMrg9kJ6' className='btn'>Apply</Link> */}
          <button btnClass={"btn"} onClick={btnClick6.bind(this)} >
            Apply Now
          </button>
        </div>

     
        <div className='card'>
          <h3>Research Specialist</h3>
          <span className='bar'></span>
          <img src={jpg14} className='img3' alt='' />
          <p>Research Specialist conceptualises, plans, develops and coordinates research projects, involving collection, compilation, and analysis of research data and information. Commission and manage research for Organisation Programme’s and in support of the Organisation Strategy. Prepares and/or assists in preparing reports of research findings.</p>
          <p>Contract Type: Permanent</p>
          <p>Closing Date: 01 August 2023 </p>
          {/* <Link to='https://forms.gle/KEgQLDYjfyMrg9kJ6' className='btn'>Apply</Link> */}
          <button btnClass={"btn"} onClick={btnClick8.bind(this)} >
            Apply Now
          </button>
        </div>   
        <div className='card'>
          <h3>Manager: Corporate Services and Finance</h3>
          <span className='bar'></span>
          <img src={jpg12} className='img3' alt='' />
          <p>To lead and manage the efficient delivery of the Organisation Foundation’s core financial management and corporate services by providing financial services, ensuring adherence to good governance procedures and compliance with statutory requirements; to manage the delivery of the organisational operations through leading, organising and managing the team.</p>
          <p>Contract Type: Permanent</p>
          <p>Closing Date: 01 August 2023 </p>
          {/* <Link to='https://forms.gle/KEgQLDYjfyMrg9kJ6' className='btn'>Apply</Link> */}
          <button btnClass={"btn"} onClick={btnClick9.bind(this)} >
            Apply Now
          </button>
        </div>
        <div className='card'>
          <h3>Director: Research and Thought leadership</h3>
          <span className='bar'></span>
          <img src={jpg15} className='img3' alt='' />
          <p>The Director of Research and Thought Leadership is responsible for the design and development of a thought leadership and research strategy aligned with the programme strategy, oversight of day-to-day management of the Research and Thought Leadership function, including commissioning of research, content creation, synthesizing and packaging of content into a compelling narrative and knowledge products for internal and external dissemination on a range of platforms.</p>
          <p>Contract Type: Permanent</p>
          <p>Closing Date: 01 August 2023 </p>
          {/* <Link to='https://forms.gle/KEgQLDYjfyMrg9kJ6' className='btn'>Apply</Link> */}
          <button btnClass={"btn"} onClick={btnClick7.bind(this)} >
            Apply Now
          </button>
        </div>
        <div className='card'>
          <h3>Project Programme Manager</h3>
          <span className='bar'></span>
          <img src={jpg13} className='img3' alt='' />
          <p>To manage the delivery of Zenex Foundation programmes in line with the strategic objectives, through building and maintaining effective partnerships and stakeholder management.</p>
          <p>Contract Type: Permanent</p>
          <p>Closing Date: 01 August 2023 </p>
          {/* <Link to='https://forms.gle/KEgQLDYjfyMrg9kJ6' className='btn'>Apply</Link> */}
          <button btnClass={"btn"} onClick={btnClick10.bind(this)} >
            Apply Now
          </button>
        </div>
       
      </div>
    </div>
  )
}

export default Pricing;
