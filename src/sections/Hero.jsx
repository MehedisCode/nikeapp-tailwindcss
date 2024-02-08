import Button from "../components/Button"
import { useState } from 'react'
import ShoeCard from "../components/ShoeCard"
import { arrowRight } from "../assets/icons"
import { statistics, shoes } from "../constants"
import { bigShoe1 } from "../assets/images/"

const Hero = () => {
  const [bigshoeImg, setBigShoeImg] = useState(bigShoe1)

  return (
    <section id="home" className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">

      <div className="relative flex flex-col justify-center items-start w-full pt-28 xl:w-2/5 padding-x">
        <p className="text-xl font-[montserrat] text-orange-600">Our Summer Collection</p>
        <h1 className="mt-10 font-[palanquin] text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className=" xl:bg-white xl:whitespace-nowrap relative pr-10 z-10">The New Arrival</span>
          <br />
          <span className="text-orange-600 inline-block mt-5">Nike </span> Shoes
        </h1>
        <p className="font-[montserrat] text-gray-500 mt-6 mb-14">discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>
        <Button label="Show now" iconURL={arrowRight} />

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="font-[palanquin] text-4xl font-bold">{stat.value}</p>
              <p className="font-[montserrat]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* shoes section  */}
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img width={610} height={500} className="object-contain relative z-10" src={bigshoeImg} alt="bigshoes1" />

        <div className="flex flex-1 sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe) => (
            <div key={shoe}>
              <ShoeCard imageUrl={shoe} changeBigShoeImage={(shoe) => setBigShoeImg(shoe)} bigShoeImage={bigshoeImg} />
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

export default Hero