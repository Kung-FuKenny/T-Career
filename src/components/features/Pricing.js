import React from 'react'
import {Link} from 'react-router-dom'
import '../features/PricingStyles.css'
import jpg1 from '../../assets/img1.jpg'
import jpg2 from '../../assets/img2.jpg'
import jpg3 from '../../assets/img3.jpg'


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
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSe0DZgM-XdydXo_yf_Gezy8nYRKiEcu0PAdvbxLdhMJOftcMw/viewform?usp=sf_link')
  }


const Pricing = () => {
    return (
        <div className='pricing'>
            <div className='card-container'>
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
                    <p>Closing Date: 16 June 2022 (17:00)</p>
                    {/* <Link to='https://forms.gle/KEgQLDYjfyMrg9kJ6' className='btn'>Apply</Link> */}
                    <button btnClass={"btn"} onClick={btnClick.bind(this)} >
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
                    <p>Closing Date: 16 June 2022 (17:00)</p>
                    {/* <Link to='/contact' className='btn'>Apply</Link> */}
                    <button btnClass={"btn"} onClick={btnClick2.bind(this)} >
                Apply Now
              </button>
                </div>
                <div className='card'>
                    <h3> Channel Marketing Manager </h3>
                    <span className='bar'></span>
                    <img src={jpg3} className='img3' alt='' />
                    <p> you will be responsible for the development and execution of RML’s channel marketing strategy and programs, in order to target specific channels to promote RML’s services and products. You will be responsible for overseeing the development of marketing plans, keeping up to date with the latest digital trends, and coordinating campaigns within the marketing team and with department heads.</p>
                    <p>Closing Date: 30 April 2022</p>
                    {/* <Link to='/contact' className='btn'>Apply</Link> */}
                    <button btnClass={"btn"} onClick={btnClick3.bind(this)} >
                Apply Now
              </button>
                </div>
            </div>
        </div>
    )
}

export default Pricing ;
