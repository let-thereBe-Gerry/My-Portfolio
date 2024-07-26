import bg2 from '../assets/background-images/bg2.png'

function ContentAbout() {

    return (
        <>
            <div className="grid grid-cols-3 gap-4 mt-90 py-9">
                <div className="about  ">
                    <img src={bg2} alt="Background" className='h-[40vw]'/>
                </div>

                <div className="about flex justify-center items-center ">
                    <div className='grid-cols-1 mx-5'>
                        <div className='flex mb-7 items-start justify-center'>
                            <span className='text-secondary text-3xl mr-4 '>Who is </span>
                            <span className='text-primary text-6xl'>Gerry<span>?</span></span>
                        </div>

                        <div className='w-[20vw]'>
                            <p>I’m into a lot of things like Web Development both front and
                                Back-End, Hardware trouble shooting, graphics editor for tarpaulin,
                                PubMat, and layout artist. I’m also into a photojournalism.</p>
                        </div>

                        <div>
                            <button className="contact bg-secondary text-panel py-2 px-4 rounded-full flex justify-center
                        hover:bg-primary hover:text-panel hover:font-black">
                                View Profile
                            </button>
                        </div>
                    </div>
                </div>
                <div className="about ">

                </div>
            </div>
        </>
    );
}

export default ContentAbout