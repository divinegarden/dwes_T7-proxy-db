// Icons
import { Info } from 'lucide-react';

function About() {
  return (
    <div className="flex flex-col gap-8 border-2 border-customPink bg-decoration h-max py-20 px-10 rounded-4xl">
            <div className="flex gap-3 justify-center items-center text-center text-6xl font-[Delius_Swash_Caps] font-extrabold text-hoverPink hover:text-customPink">
                <Info className="h-12 w-12"/>
                <h1> About </h1>
            </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>

      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis nam consectetur eius reprehenderit illum unde suscipit amet quos. Vitae at id dicta esse magnam nemo ipsam, nesciunt expedita sapiente ipsa?
        Commodi vero in alias ipsam praesentium iure assumenda impedit delectus, a minus excepturi sunt quia. Magnam voluptatum, voluptas iure cumque commodi minus quidem accusamus omnis quas aspernatur blanditiis obcaecati id!
      </p>
    </div>
  )
}

export default About