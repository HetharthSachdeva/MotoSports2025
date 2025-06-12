import React from 'react'
import DomainComp from '../domain/domain';
import frames from "./ebFrames.json"
import powertrain from "./ebPowertrain.json"
import suspen from "./ebSuspension.json"
import steer from "./ebSteering.json"
import brake from "./ebBrakes.json"
import advisors from "./ebAdvisor.json"



function Team() {
    return (
        <>
            <div>
                <h1 className='ebaja2 font-albulaHeavy text-amber-900 text-4xl sm:text-5xl  flex justify-center items-center mt-20 text-center'>FRAMES</h1>
                <DomainComp data={frames} />

                <h1 className='ebaja2 font-albulaHeavy text-amber-900 text-4xl sm:text-5xl  flex justify-center items-center mt-20 text-center'>POWERTRAIN</h1>
                <DomainComp data={powertrain} />

                <h1 className='ebaja2 font-albulaHeavy text-amber-900 text-4xl sm:text-5xl  flex justify-center items-center mt-20 text-center'>VEHICLE DYNAMICS</h1>

                <h1 className='ebaja2 font-albulaHeavy text-amber-900 text-3xl flex justify-center items-center mt-20 text-center'>SUSPENSION</h1>
                <DomainComp data={suspen} />

                <h1 className='ebaja2 font-albulaHeavy text-amber-900 text-3xl flex justify-center items-center mt-20 text-center'>STEERING</h1>
                <DomainComp data={steer} />

                <h1 className='ebaja2 font-albulaHeavy text-amber-900 text-3xl flex justify-center items-center mt-20 text-center'>BRAKES</h1>
                <DomainComp data={brake} />

                <h1 className='ebaja2 font-albulaHeavy text-amber-900 text-3xl flex justify-center items-center mt-20 text-center'>ADVISORS</h1>
                <DomainComp data={advisors} />


            </div>
        </>
    )
}

export default Team;
