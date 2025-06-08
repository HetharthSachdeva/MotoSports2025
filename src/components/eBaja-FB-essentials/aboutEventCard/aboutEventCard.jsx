import "./aboutEventCard.css"

const AboutEventCard = ({ heading, subHeading, description, imgSrc }) => {
    return (
        <div className="transition duration-300 ease-in-out transform hover:-translate-y-3 flex flex-col  sm:flex-row items-center sm:items-start w-full bg-dustyWhite rounded-lg">
            {/* Image Section */}
            <div
                style={{ backgroundImage: `url(${imgSrc})` }}
                className=" w-full sm:w-2/5 h-[300px] bg-no-repeat bg-cover bg-center"
            ></div>

            {/* Text Section */}
            <div className="w-full sm:w-3/5 p-4 flex flex-col justify-center items-center sm:items-start text-center sm:text-left">
                <div className="font-semibold text-2xl mb-2">{subHeading}</div>
                <div className="font-albulaMedium text-md text-gray-700">{description}</div>
            </div>
        </div>


    )
}

export default AboutEventCard;