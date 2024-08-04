import React, {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';

const teamMembers = [
  {
    name:'Sarah Marshell',
    role:'Founder and CEO',
    img:'T-Image.png',
    department:'Management Team'
},
  {
    name:'Emily Thompson',
    role:'Cheif Operating Officer',
    img:'T-Image-1.png',
    department:'Technology and Development'||'Management Team'

},
  {
    name:'John Davis',
    role:'Cheif Financial Officer',
    img:'T-Image-2.png',
    department:'Finance and Others'||'Management Team'

},
  {
    name:'Rachel Adams',
    role:'Cheif Marketing Officer',
    img:'T-Image-3.png',
    department:'Marketing and Communications'||'Management Team'
},
]
function Team() {
  const [selectedRole, setSelectedRole] = useState('Management Team');

  const handleRoleClick = (role) => {
    setSelectedRole(role);
  };

  const filteredTeamMembers = selectedRole === 'Management Team' ?
    teamMembers :
    teamMembers.filter(member => member.department === selectedRole);

    useEffect(() => {
      window.scrollTo(0, 0);
  
      const scrollToHash = () => {
        if (window.location.hash) {
          const element = document.getElementById(window.location.hash.substring(1));
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      };
  
      scrollToHash();
  
      window.addEventListener('hashchange', scrollToHash);
  
      return () => {
        window.removeEventListener('hashchange', scrollToHash);
      };
    }, []);


  return (
    <>
      <div id='top' className='container mx-auto px-5 py-8'>
      <div className='bg-indigo-10 flex flex-col gap-8 items-center py-10 px-8 sm:px-20 relative'>
      <div className="absolute inset-0 top-0 flex items-start justify-center">
        <img className='h-auto max-w-full' src="Abstrac-bg.png" alt="" />
    </div>
                <div className=' z-[1]'><img src="T-logo.png" alt="" /></div>
                <div className='flex flex-col gap-4 items-center  z-[1]'>
                <div><h1 className='text-2xl font-semibold'>Meet Our Team of Experts</h1> </div>
                <div> <p>Our team at Nutritionist is composed of highly skilled professionals who are passionate about helping you achieve your health and wellness goals. With a diverse range of expertise in nutrition, coaching, and support, our team is dedicated to providing you with the guidance and personalized care you need. Get to know the experts behind our success and discover how they can make a positive impact on your journey to better health.</p> </div>
                </div>
            </div>
        <div className='bg-indigo-300 text-white flex flex-wrap gap-4 md:gap-8 items-center justify-between px-20 py-6'>
          <button className={`${selectedRole=='Management Team'? 'bg-indigo-50 p-3':''}`} onClick={()=>handleRoleClick('Management Team')}>Management Team</button>
          <button className={`${selectedRole==='Finance and Others'? 'bg-indigo-50 p-3':''}`} onClick={()=>handleRoleClick('Finance and Others')} >Finance and Others</button>
          <button className={`${selectedRole==='Marketing and Communications'? 'bg-indigo-50 p-3':''}`} onClick={()=>handleRoleClick('Marketing and Communications')} >Marketing and Communications</button>
          <button className={`${selectedRole==='Technology and Development'? 'bg-indigo-50 p-3':''}`} onClick={()=>handleRoleClick('Technology and Development')} >Technology and Development</button>
        </div>
        <div className='flex flex-col gap-20 sm:flex-row sm:items-center justify-between sm:gap-1 py-8'>
        {filteredTeamMembers.map((item,index)=>(
            <div key={index} className='relative'>
            <img src={item.img} alt="" className='w-full' />
            <div className='bg-indigo-10 p-5 rounded-r-lg absolute z-1 left-0 top-72'>
              <h3 className='font-semibold'>{item.name}</h3>
              <h4 className='opacity-50'>{item.role}</h4>
            </div>
          </div>
        ))}
        </div>
      </div>
      <div className="container px-5 py-4 mx-auto max-w-screen-xl">
        <div className="bg-indigo-10 flex flex-col md:flex-row items-center justify-between py-10 px-8 sm:px-20 relative">
          <img src='Abstract Design-1.png' alt='' className="absolute left-0 top-0"/>
          <img src='Abstract Design.png' alt='' className="absolute right-0 bottom-0" />
          <div className="md:w-[80%] z-[1]">
            <h1 className="text-xl font-semibold mb-2 text-gray-900 text-center md:text-left">Join Our Team</h1>
            <p className="w-full text-center md:text-left">We are always on the lookout for talented individuals who are enthusiastic about making a difference. Explore our career opportunities and join us in our mission to help people achieve their health and wellness goals.</p>
          </div>
          <div className="mt-4 md:mt-0 z-[1]">
          <Link to='/contact'>    <button className="inline-flex items-center bg-indigo-200 text-indigo-400 border-0 py-2 px-3 focus:outline-none hover:bg-indigo-200 rounded text-base">Apply now</button></Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
