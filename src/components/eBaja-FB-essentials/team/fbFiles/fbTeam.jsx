import React from 'react'
import DomainComp from '../domain/domain';
import teammang from "./teamManagement.json"
import frames from "./fbFrames.json"
import powertrain from "./fbPowertrain.json"
import vehicledyna from "./fbVehicleDyna.json"
import steering from "./fbSteering.json"
import suspension from "./fbSuspension.json"
import brakes from "./fbBrakes.json"
import advisor from "./fbAdvisor.json"


function Team() {
    return (
        <>
            <div>
                <h1 className='ebaja2 font-albulaHeavy text-amber-900 text-4xl sm:text-5xl flex justify-center items-center mt-20 text-center '>TEAM MANAGEMENT</h1>
                <DomainComp data={teammang} />

                <h1 className='ebaja2 font-albulaHeavy text-amber-900 text-5xl flex justify-center items-center mt-20 '>FRAMES</h1>
                <DomainComp data={frames} />

                <h1 className='ebaja2 font-albulaHeavy text-amber-900 text-5xl flex justify-center items-center mt-20 '>POWERTRAIN</h1>
                <DomainComp data={powertrain} />

                <h1 className='ebaja2 font-albulaHeavy text-amber-900 text-5xl flex justify-center items-center mt-20 text-center '>VEHICLE DYNAMICS</h1>
                <DomainComp data={vehicledyna} />

                <h1 className='ebaja2 font-albulaHeavy text-amber-900 text-5xl flex justify-center items-center mt-20 '>STEERING</h1>
                <DomainComp data={steering} />

                <h1 className='ebaja2 font-albulaHeavy text-amber-900 text-5xl flex justify-center items-center mt-20 '>SUSPENSION</h1>
                <DomainComp data={suspension} />

                <h1 className='ebaja2 font-albulaHeavy text-amber-900 text-5xl flex justify-center items-center mt-20 '>SUSPENSION</h1>
                <DomainComp data={brakes} />

                <h1 className='ebaja2 font-albulaHeavy text-amber-900 text-5xl flex justify-center items-center mt-20 '>ADVISORS</h1>
                <DomainComp data={advisor} />
            </div>
        </>
    )
}

export default Team;
