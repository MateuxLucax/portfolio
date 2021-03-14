import { SvgContainers, Hero, Rocket, Plume } from "@/styles/pages/home/Hero";

export default function HomeHero() {
  return (
    <Hero>
      <h1>Hi, I’m<br/><span>Mateux Lucax</span></h1>
      <h2>My passion is to create<br/> astonishing experiences<br/>for the web.</h2>
      <SvgContainers>
        <Rocket>
          <svg width="90" height="119" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 118.86L45 0l45 118.86-45-48.286L0 118.86z" fill="#F9F9F9"/>
            <path d="M0 118.86l45-48.286 45 48.286-45-29.717L0 118.86z" fill="#DDD"/>
          </svg>
          <Plume width="31" height="34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 8.002L15.001.572l15.002 7.43L15 34 0 8.002z" fill="url(#paint0_linear)"/>
            <defs>
              <linearGradient id="paint0_linear" x1="14.999" y1=".577" x2="15" y2="34.003" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFA200"/>
                <stop offset="1" stop-color="#FC6"/>
                <stop offset="1" stop-color="#FC6"/>
              </linearGradient>
              </defs>
            </Plume>
        </Rocket>
        <svg viewBox="0 0 375 156" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M213 110H161L187 0L213 110Z" fill="#BFBFBF"/>
          <path d="M284 138H91L187 37L284 138Z" fill="#D5D5D5"/>
          <path d="M354 152H21L187 68L354 152Z" fill="#E5E5E5"/>
          <path d="M375 156H0L187 108L375 156Z" fill="#F9F9F9"/>
        </svg>
      </SvgContainers>
    </Hero>
  )
}