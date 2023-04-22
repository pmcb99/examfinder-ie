import splitbee from '@splitbee/web'
import StyledLink from './StyledLink'

export default function Footer() {
  return (
    <>
      <footer className="flex flex-col items-center">
        <div className="flex w-full flex-row flex-wrap items-center justify-center space-x-2 text-center">
          {/* SUPPORT */}
          <StyledLink
            href="https://www.buymeacoffee.com/thomasforbes"
            target="_blank"
            onClick={() => splitbee.track('buymeacoffee.com')}
            className="text-lg font-semibold text-sky-400 hover:text-sky-500"
          >
            Support me!
          </StyledLink>
          <p>&bull;</p>
          {/* SAMPLE PAPERS */}
          <StyledLink
            target="_blank"
            onClick={() => splitbee.track('buymeacoffee.com')}
            href="https://www.examinations.ie/?l=en&mc=ex&sc=sp"
            className="text-lg font-semibold text-orange-400 hover:text-orange-500"
          >
            Sample Papers
          </StyledLink>
          <p>&bull;</p>
          {/* BUGS */}
          <StyledLink
            href="https://tally.so/r/w76963"
            target="_blank"
            onClick={() => splitbee.track('feedback')}
            className="text-lg font-semibold text-red-500 hover:text-rose-500"
          >
            Bugs/Features
          </StyledLink>
          <p>&bull;</p>
          <StyledLink
            href="https://github.com/thomas-forbes/examfinder"
            className="text-lg font-semibold text-slate-100 hover:text-slate-300"
          >
            GitHub
          </StyledLink>
        </div>
      </footer>
    </>
  )
}
