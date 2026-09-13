import './lnp.css';
const lawscontent=[
    {
        id:1,
        title:'Information Technology Act, 2000',
        description:"Provides legal recognition to electronic transactions, combats cybercrimes like hacking and identity theft, and regulates digital signatures, electronic governance, and cybersecurity practices in India."
    },
    {
        id:2,
        title:'Indian Penal Code (IPC), 1860 (Cyber Provisions)',
        description:"Traditional laws amended to address cybercrimes like fraud, defamation, cheating, and forgery involving computers, emails, and digital platforms, often used with the IT Act."
    },
    {
        id:3,
        title:'Indian Evidence Act, 1872 (Digital Evidence)',
        description:"Amended to include electronic records and digital signatures as admissible evidence in courts, supporting legal proceedings related to cybercrime and digital transactions."
    },
    {
        id:4,
        title:'Personal Data Protection Bill (Proposed)',
        description:"Aims to protect individuals’ personal data, regulate data processing by organizations, and establish a Data Protection Authority, modeled after global standards like the GDPR."
    }]
function LawsContent(){
    return(
        <>
        {lawscontent.map((data)=>(
                 <div className='policy-content ' style={{alignItems:'center'}} key={data.id}>
                <h3 className='text-white' style={{fontSize:'18px'}}> {data.title} </h3>
                <span className='text-gray-400' style={{fontSize:'15px'}}> {data.description} </span>
            </div>
            )
                 
        )}
          
        </>
    )
}

const policycontent=[
    {
        id:1,
        title:'National Cyber Security Policy, 2013',
        description:"A comprehensive framework to secure cyberspace in India, safeguard information infrastructure, promote cyber awareness, and develop human resources for effective cyber incident response."
    },
    {
        id:2,
        title:'Draft National Cyber Security Strategy, 2021',
        description:"Proposed strategy aiming to boost India's cyber resilience through governance reforms, cyber audit norms, critical infrastructure protection, and capacity building across public and private sectors."
    },
    {
        id:3,
        title:'Digital India Initiative',
        description:"Government program promoting digitization of services, with emphasis on secure infrastructure, e-governance, and digital literacy, helping build cybersecurity into national digital growth."
    },
    {
        id:4,
        title:'Cyber Surakshit Bharat Initiative',
        description:"Launched to spread cybersecurity awareness among government officials, enhance cyber hygiene, and build capacity through training programs in collaboration with private sector and public organizations."
    }]
function PoliciesContent(){
    return(
        <>
        {policycontent.map((data)=>(
                 <div className='policy-content' style={{alignItems:'center'}} key={data.id}>
                <h3 className='text-white' style={{fontSize:'18px'}}> {data.title} </h3>
                <span className='text-gray-400' style={{fontSize:'15px'}}> {data.description} </span>
            </div>
            )
                 
        )}
          
        </>
    )
}

const LawsAndPolicies=()=>{
    return(
        <>
        {/* hero section */}
        <div> 
            <section style={{width:'100vw', minHeight:'90vh'}}>
                <div className="lnp-hero-section" style={{  }}>
                    <div  style={{color:'white', fontSize:'4.5rem',width: '38vw',  paddingLeft:'0'}}>Cyber Laws And Policies </div>

                    <span className='w-[75vw]'> 
                {/* write intro text here if needed */}
                     </span>
                </div>
            </section>
            </div>

            <div> 
            {/* content section  */}
            <section>
                <div className="lnp-intro-section">
                    <div className='line-intro-section'>
                        <h1>Cyber Laws and Policies in India</h1>
                        <span>Cyber security is the discipline of protecting computer systems, networks, devices, and data from malicious attacks. It covers identifying threats, isolating them, countering them with no or minimal data loss, and working towards threat prevention.</span>
                    </div>
                    {/* Cyber Laws */}
                    <details>
                        <summary className='drop-down-heading bg-[#191919] md:w-[70vw] w-[90vw] '>Cyber Security Laws </summary>
                        <ul className='hover-stoping'>
                            <li><LawsContent/></li>
                           
                        </ul>
                    </details>

                       {/* Cyber Policies */}
                    <details>
                        <summary className='drop-down-heading bg-[#191919] md:w-[70vw] w-[90vw] '>Cyber Policies  </summary>
                        <ul className='hover-stoping'>
                            <li><PoliciesContent/></li>
                           
                        </ul>
                    </details>
                    
                </div>
            </section>
            </div>
        </>
    )
}
export default LawsAndPolicies