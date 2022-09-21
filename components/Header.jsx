import Image from "next/image";
import Iconitem from './Iconitem';
import { BeakerIcon,  HomeIcon ,CheckbadgeIcon
  ,
  CollectionIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon, 
  AcademicCapIcon,
  BoltIcon} from '@heroicons/react/24/solid'


function Header() { 
  return (
    <div className="flex flex-col text-center  m-5 h-auto  sm:flex-row justify-between  ">
      <div className="flex  flex-grow justify-evenly mt-4 mb-6 sm:max-w-2xl">
        <Iconitem title="Home" Icon={HomeIcon}/>
        <Iconitem title="Verify" Icon={AcademicCapIcon}/>
        <Iconitem title="Account" Icon={UserIcon}/>
        <Iconitem title="Search" Icon={BeakerIcon}/> 
        <Iconitem title="Flash" Icon={BoltIcon}/>        
      </div>

      <div className="h-6 relative sm:w-32 sm:h-20	">
  <Image
    src="https://brandslogos.com/wp-content/uploads/images/large/hulu-logo.png"
    alt="Picture of the author"
    layout="fill" // required 
    objectFit="contain" // change to suit your needs
  />
</div>
    
    </div>
  );
}

export default Header;
