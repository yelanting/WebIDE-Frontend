import * as modalActions from 'components/Modal/actions'

export function modalRegister (name, component, command) {
  modalActions.modalRegister(name, component, command)
}

export function showModal (modalConfig) {
  modalActions.showModal(modalConfig)
}

export const IModalPosition = {
  top: "top",
  bottom: "bottom",
  center: "center"
}