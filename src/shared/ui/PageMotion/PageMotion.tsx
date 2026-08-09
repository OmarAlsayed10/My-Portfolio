import { useLayoutEffect, useRef } from 'react'

export const PageMotion = ({ children }: { children: React.ReactNode }) => {
  const motionRoot = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const sections = [...motionRoot.current!.querySelectorAll<HTMLElement>('main > :is(a, header, nav, div, section)')]
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (!entry.isIntersecting) return
      entry.target.classList.add('is-visible')
      observer.unobserve(entry.target)
    }), { threshold: .1, rootMargin: '0px 0px -8%' })

    sections.forEach((section) => {
      section.dataset.reveal = ''
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return <div className="page-motion" ref={motionRoot}>{children}</div>
}
