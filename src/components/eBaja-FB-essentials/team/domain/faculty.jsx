import FacultyCard from "../../memberCard/facultyCard";
import './domain.css'

function Faculty(d) {
    const data = d.data;
    // const d = data.domainHead;
    console.log(data.domainHead);

    return (
        <>
            {data.domain && (
                <h1 className='head text-5xl flex justify-center items-center pb-28 pt-36'>
                    {data.domain}
                </h1>
            )}

            <div className='domain m-auto'>
                <div className='m-auto domainMembers'>
                    <div className='resp mt-3 flex flex-wrap justify-evenly items-center'>
                        {data.domainHead.map((m, index) => (
                            <FacultyCard key={index} {...m} />
                        ))}
                    </div>
                </div>
                <div className='m-auto domainMembers'>
                    <div className='resp mt-5 mb-32 flex flex-wrap justify-evenly items-center'>
                        {data.members.map((m, index) => (
                            <FacultyCard key={index} {...m} />
                        ))}
                    </div>
                </div>
            </div>

        </>
    )
}

export default Faculty;