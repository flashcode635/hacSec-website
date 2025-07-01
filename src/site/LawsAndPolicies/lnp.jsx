import './lnp.css';
const LawsAndPolicies=()=>{
    return(
        <>
        {/* hero section */}
            <section>
                <div className="lnp-hero-section">
                    <div  style={{color:'white', fontSize:'4.5rem'}}>Cyber Laws And Policies </div>

                    <span className='w-[75vw]'> 
                        Cyber security is the discipline of protecting computer systems, networks, devices, and data from malicious attacks. It covers identifying threats, isolating them, countering them with no or minimal data loss, and working towards threat prevention.
                     </span>
                </div>
            </section>
            {/* content section  */}
            <section>
                <div className="lnp-intro-section">
                    <details>
                        <summary className='drop-down-heading bg-[#191919] md:w-[60vw] w-[90vw] '  >Cyber Laws </summary>
                        <ul>
                            <li>Settings</li>
                            <li>Profile</li>
                            <li>Logout</li>
                        </ul>
                    </details>
                    
                </div>
            </section>
        </>
    )
}
export default LawsAndPolicies