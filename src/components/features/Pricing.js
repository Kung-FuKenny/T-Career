import React from 'react'
import { Link } from 'react-router-dom'
import '../features/PricingStyles.css'
import jpg1 from '../../assets/img1.jpg'
import jpg2 from '../../assets/img2.jpg'
import jpg3 from '../../assets/img3.jpg'
import jpg4 from '../../assets/img4.jpg'
import pdf from '../../assets/SCI-BONO_CEO_2022.pdf'

const btnClick = () => {
  console.log('Im here')
  window.open('https://forms.gle/Be1NpigMakF6t148A')
}

const btnClick2 = () => {
  console.log('Im here')
  window.open('https://forms.gle/1BtMnVCicYmL7nvM7')
}


const btnClick3 = () => {
  console.log('Im here')
  window.open('https://forms.gle/3jeD8g1YdaubwviH6')
}

const btnClick4 = () => {
  console.log('Im here')
  window.open('https://forms.gle/jCmbXUVpkz1zqKJ6A')
}

const onDownload = () => {
  const link = document.createElement("a");
  link.download = `SCI-BONO_CEO_2022.pdf`;
  link.href = '../../assets/SCI-BONO_CEO_2022.pdf';
  link.click();
};


const Pricing = () => {
  return (
    <div className='pricing'>
      <div className='card-container'>
      <div className='card'>
          <h3> SCI-BONO: Chief Executive Officer </h3>
          <span className='bar'></span>
          <img src={jpg4} className='img' alt='' />
          <p> This position provides strategic leadership and effective management of the Sci-bono Discovery Science Centre and its resources in line with the mandate of the board of directors, and principal stakeholders. It is the main point of communication between the board of directors (the board) and corporate operations.
It is responsible for positioning Sci-bono as a world-class science centre, building capacity in Maths, Science and Technology in South Africa through interactive exhibitions, research and training. It is responsible for ensuring that performance targets are met.</p>
          <p>Contract Type: 5 Year Fixed Term</p>
          <p>Closing Date: 24 June 2022</p>
          <p>Email CV to: responses@tafadzwa.co.za</p>
          {/* <Link to='/contact' className='btn'>Apply</Link> */}
          <button btnClass={"btn"} onClick={onDownload.bind(this)} >
            Download PDF
          </button>
        </div>
        <div className='card'>
          <h3> Strategy Support Consultant </h3>
          <span className='bar'></span>
          <img src={jpg1} className='img1' alt='' />
          <p> You will be responsible for supporting the formulation
            and implementation of key business strategies in keeping with Group aspirations. This
            includes (but not limited to) identifying industry and competitor trends, translating these
            into business opportunities, and supporting response efforts to the opportunities. You will
            also be responsible for enabling the governance of strategy in the Group. This includes
            (but not limited to) managing the Group strategic planning process and strategy calendar.</p>
          <p>Contract Type: Permanent</p>
          <p>Closing Date: 24 June 2022</p>
          {/* <Link to='https://forms.gle/KEgQLDYjfyMrg9kJ6' className='btn'>Apply</Link> */}
          <button btnClass={"btn"} onClick={btnClick.bind(this)} >
            Apply Now
          </button>
        </div>
        <div className='card'>
          <h3> Umgeni Water CEO </h3>
          <span className='bar'></span>
          <img src={jpg3} className='img3' alt='' />
          <p> You will be responsible for Strategy Development *Operational Efficiency and
            Effectiveness *Financial Management * Water Resources Sustainability *Corporate Governance and Legal Compliance
            * Stakeholder Management * Human Capital Management.</p>
          <p>Closing Date: 18 June 2022 (Midnight) </p>
          <p>Contract Type: 5 Year Employment Contract</p>
          {/* <Link to='/contact' className='btn'>Apply</Link> */}
          <button btnClass={"btn"} onClick={btnClick3.bind(this)} >
            Apply Now
          </button>
        </div>
        <div className='card'>
          <h3> Compliance Officer </h3>
          <span className='bar'></span>
          <img src={jpg2} className='img2' alt='' />
          <p>You will be responsible for pro-actively and constructively assisting
            the RMA Group in managing its responsibility to comply with all applicable regulatory
            legislative requirements, applicable regulatory codes and standards, and internal policies
            and procedures.</p>
          <p>Contract Type: Permanent</p>
          <p>Closing Date: 16 June 2022</p>
          {/* <Link to='/contact' className='btn'>Apply</Link> */}
          <button btnClass={"btn"} onClick={btnClick2.bind(this)} >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default Pricing;
