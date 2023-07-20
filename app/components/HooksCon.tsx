'use client'

import { useCountdown } from '@/hooks/useCoutdown'
import { useScrollPos } from '@/hooks/useScrollPos'
import { useWindowSize } from '@/hooks/useWindowSize'

export default function HooksCon() {
  const startTimeStamp = 1689158809293
  const finishTimeStamp = 1699158809293

  const scrollPos = useScrollPos()
  const size = useWindowSize()
  const [days, hours, minutes, seconds, progressCount] = useCountdown(
    startTimeStamp,
    finishTimeStamp
  )

  return (
    <>
      <h2 className="m-bottom-5">useScrollPos</h2>
      <div>
        <b>Scroll Pos:</b> {scrollPos}
      </div>
      <br />
      <h2 className="m-bottom-5">useWindowSize</h2>
      <div>
        <b>Width:</b> {size.width}
      </div>
      <div>
        <b>Height:</b> {size.height}
      </div>
      <br />
      <h2 className="m-bottom-5">useCountdown</h2>
      <div suppressHydrationWarning={true}>
        <b>Left Time:</b>{' '}
        {days + ' Days ' + hours + ':' + minutes + ':' + seconds}
      </div>
      <div suppressHydrationWarning={true}>
        <b>%</b>
        {progressCount + ' completed'}
      </div>
    </>
  )
}
