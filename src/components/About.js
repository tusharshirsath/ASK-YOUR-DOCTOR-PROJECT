import React from 'react'

const About = () => {
    return (
        <>
            <div className="container">
                <h3 className="py-3">About Us</h3>
                <p>
                    Ask Your Doctor is a platform for booking medical consultations with specialist doctors in your city online. Patient can book an
                    appointment by selecting any of the time slot given by doctor.</p>
                <p> Some additional functionalities are - user can search
                    doctor by specialization and city, both user and doctor can manage their booked appointments, both can manage
                    their appointment history, verification of doctor's credentials by admin and users can get information about blood donors in their city.
                </p>
                <p className="text-muted">Regards, from creators:
                    <ul>
                        <li>Tushar Shirsath</li>
                        <li>Mayur</li>
                        <li>shekhar</li>
                        <li>sudhanshu</li>
                        <li>tanaya</li>
                    </ul>
                </p>
            </div>
        </>
    )
}

export default About
