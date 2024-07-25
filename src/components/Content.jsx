import profilePic from '../assets/Profile.png'
import fb from '../assets/icons/fb.png'
import ins from '../assets/icons/ins.png'
import tele from '../assets/icons/tele.png'
import lnk from '../assets/icons/lnk.png'
import ggl from '../assets/icons/ggl.png'

function Content () {

    const iconsLink = [
        {link:fb , path: "FB"},
        {link:ins , path: "Insta"},
        {link:tele , path: "Tele"},
        {link:lnk , path: "Linkend"},
        {link:ggl , path: "Google"},
    ]

    return (
        <>
        <body>
            
            <div className='flex relative'>
            <div className='absolute backPanel flex -z-15 content-end  bg-panel'></div>            
            <div className="relative card grid grid-cols-4 gap-4 mt-90 py-9 z-20 ">
                
                <div className='lex col-span-2 flex justify-end  p-4 relative'>
                    <div className='flex justify-center '>
                        <div className="backProfile absolute rounded-full -z-80 place-self-center"></div>
                        <img src={profilePic} className='relative profile z-20 ' alt="Gerry eyy" />                        
                    </div>
                </div>

                <div className='context border-spacing-1 p-4 col-span-2 mt-28'>
                    <p className='text-secondary text-3xl'>Hi, I'm</p> 

                    <div className='text-6xl'>
                        <span className='text-primary pb-8'>Gerry</span> <br />
                        <span className='text-secondary pt-8'> Estrojemo</span>
                    </div>

                     <br />
                    
                    <div className='mt-5'>
                        <p className='text-primary text-3xl'>Fresh new IT Graduates</p> <br />
                        <p>I’m into a lot of things like Full Stack Developer, Hardware trouble 
                            shooting, graphics editor slash layout artist, I’m also into a 
                            photojournalism.</p>
                    </div>

                    <div className='flex justify-center'>
                        <button className="contact bg-secondary text-panel py-2 px-4 rounded-full flex justify-center
                        hover:bg-primary hover:text-panel hover:font-black">
                            Contact Me!
                        </button>                      
                    </div>

                    <div className='flex justify-center'>
                        {iconsLink.map(({link, path}) => 
                            <a type="button" key={link} href={path} 
                                className="icons bg-secondary text-panel  mx-4 rounded-full flex justify-center
                                hover:bg-primary hover:text-panel hover:font-black">
                                <img src={link}  alt={path} />                                
                            </a>
                        )}
                                             
                    </div>

                </div>
            </div>
            </div>
            
                

            
        </body>
        
        </>
    );
}

export default Content