'use client'
import { FC, useEffect } from 'react'
import { useGlobalContext } from '../context/global'

type Props = {
  type?: string
  name: string
  confirm?: string
  cancel?: string
  children?: any
  resConfirm?: any
  position?: string
  width?: number
}
var countdown: any
const Modal: FC<Props> = ({
  type = 'light',
  name,
  confirm,
  cancel = 'Cancel',
  resConfirm,
  children,
  position = 'center',
  width = 560
}: Props) => {
  const { modalData, setContext } = useGlobalContext()

  useEffect(() => {
    clearTimeout(countdown)
    if (modalData.timeout != 0) {
      countdown = setTimeout(
        () => {
          setContext({ modalData: {} })
        },
        modalData.timeout ? modalData.timeout : 2000
      )
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modalData.timeout])

  useEffect(() => {
    if (modalData.name != name || !resConfirm) {
      return
    }
    function handleKeyUp(event: any) {
      switch (event.key) {
        case 'Enter':
          resConfirm(true)
          break
        case 'Escape':
          setContext('modalData', {})
          break
      }
    }

    window.addEventListener('keyup', handleKeyUp)
    return () => window.removeEventListener('keyup', handleKeyUp)
  }, [confirm, modalData.name, name, resConfirm, setContext])

  return (
    <>
      {modalData.name == name && (
        <div
          id="modal"
          className={
            modalData.type
              ? 'modal global ' + modalData.type
              : 'modal global ' + type
          }
        >
          <div
            className={modalData.backBlackout ? 'back' : ''}
            // onClick={() => {
            //   setContext("modalData", {});
            // }}
          ></div>
          <div
            //onMouseEnter={() => setContext('modalMouseEnter', true)}
            //onMouseLeave={() => setContext('modalMouseEnter', false)}
            className={'modal_inner ' + position}
            style={{ maxWidth: width }}
          >
            {modalData.type != 'alert' && (
              <button
                className="close"
                onClick={() => {
                  setContext('modalData', {})
                }}
              >
                ✕
              </button>
            )}

            <div className="flex gap-10">
              {modalData.title && <h2>{modalData.title}</h2>}
              {modalData.type == 'alert' && (
                <div className="process_effect"></div>
              )}
            </div>
            {modalData.text ? (
              <p className="p-0">{modalData.text}</p>
            ) : (
              children
            )}
            {confirm && !modalData.text && (
              <button
                onClick={() => {
                  resConfirm(false)
                }}
                className="btn-medium light f-left m-0 "
              >
                {cancel}
              </button>
            )}
            {confirm && !modalData.text && (
              <button
                onClick={() => {
                  resConfirm(true)
                }}
                className={
                  type == 'light'
                    ? 'btn-medium primary m-0 f-right m-right-10'
                    : 'btn-medium m-0 f-right m-right-10'
                }
              >
                {confirm}
              </button>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
