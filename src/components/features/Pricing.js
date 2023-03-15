import React from 'react'
// import { Link } from 'react-router-dom'
import '../features/PricingStyles.css'
import jpg1 from '../../assets/img1.jpg'
import jpg2 from '../../assets/img2.jpg'
import jpg3 from '../../assets/img3.jpg'

import jpg7 from '../../assets/img7.jpg'
import jpg10 from '../../assets/img10.jpg'

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


const Pricing = () => {
  return (
    <div className='pricing'>
      <div className='card-container'>
        <div className='card'>
          <h3> Broker Consultant </h3>
          <span className='bar'></span>
          <img src={jpg1} className='img' alt='' />
          <p> Accountable for membership growth and retention by establishing and maintaining sound relations with
brokers and other key stakeholders.</p>
          <p>Closing Date: 15th December 2022 </p>
          <p>Contract Type: Permanent</p>
          {/* <Link to='/contact' className='btn'>Apply</Link> */}
          <button btnClass={"btn"} onClick={btnClick.bind(this)} >
            Apply Now
          </button>
        </div>
        <div className='card'>
          <h3> Manager: Disease Management | Medicine Management |
Ambulatory Care </h3>
          <span className='bar'></span>
          <img src={jpg2} className='img2' alt='' />
          <p> Accountable for the implementation of tactical work plans and formulate associated procedures to minimise the
financial risk of the Scheme by implementing, maintaining, and improving the defined care programs with special
emphasis on Medicine Management, Disease Management, and Ambulatory Care; providing clinical support for
maintaining the acceptable level of quality and cost-effective risk measures.</p>
          <p>Contract Type: Permanent</p>
          <p>Closing Date: 15th December 2022</p>
          {/* <p>Email CV to: responses@tafadzwa.co.za</p> */}
          {/* <Link to='/contact' className='btn'>Apply</Link> */}
          {/* <button btnClass={"btn"} onClick={onDownload.bind(this)} >
          Apply Now
          </button> */}
          <button btnClass={"btn"} onClick={btnClick2.bind(this)} >
            Apply Now
          </button>
        </div>
        <div className='card'>
          <h3> BCCEI : General Secretary </h3>
          <span className='bar'></span>
          <img src={jpg3} className='img3' alt='' />
          <p> The person must be outcome driven, promotes equitable people management and strives for business
excellence. The vacancy exists within the National Office of the Bargaining Council for the Civil
Engineering Industry (BCCEI) for a General Secretary, with outstanding vision, strong
leadership skills and the ability to provide strategic leadership for the Council. The position reports to the Management Committee of the BCCEI, which is representative of
all parties.</p>
          <p>Contract Type: Permanent</p>
          <p>Closing Date: 30th December 2022</p>
          {/* <Link to='https://forms.gle/KEgQLDYjfyMrg9kJ6' className='btn'>Apply</Link> */}
          <button btnClass={"btn"} onClick={btnClick3.bind(this)} >
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

          Assume the role as PO of the Organization;Member of the Board without voting Powers.
          Effect is given to the strategic direction provided by the Board. Responsible for overseeing the operational functioning of the Scheme in
          line with delegated authority as per the Approvals Framework. Monitoring member's needs and requirements and facilitating strategic positioning in the market.
          Spokesperson for the Scheme and ensuring the employer's and members best interests are considered at all times.
          Keeping the chairperson informed of all important and relevant matters pertaining to Scheme, placing a strong emphasis on driving growth within the Scheme.
          PO to provide clear aims and objective of the Scheme / New strategic plan to the BoT.


          </p>
          <p>Contract Type: Permanent</p>
          <p>Closing Date: 01 June 2023 </p>
          {/* <Link to='https://forms.gle/KEgQLDYjfyMrg9kJ6' className='btn'>Apply</Link> */}
          <button btnClass={"btn"} onClick={btnClick5.bind(this)} >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default Pricing;
