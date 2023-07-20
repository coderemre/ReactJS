'use client'
import { useGlobalContext } from '../context/global'

export default function ModalControl() {
  const { modalData, setContext } = useGlobalContext()

  return (
    <>
      <button
        className="btn secondary"
        onClick={() =>
          setContext('modalData', {
            name: 'global',
            title: 'selam',
            text: 'mer'
          })
        }
      >
        Open
      </button>
    </>
  )
}
