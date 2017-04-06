import { DialogButton } from './dialog.service';

export const MODAL_BUTTON_CANCEL: DialogButton = { choice: 0, label: 'Cancel', style: 'default' };
export const MODAL_BUTTON_CLOSE: DialogButton = { choice: 0, label: 'Close', style: 'default' };
export const MODAL_BUTTON_DELETE: DialogButton = { choice: 1, label: 'Delete', style: 'danger' };
export const MODAL_BUTTON_OK: DialogButton = { choice: 1, label: 'OK', style: 'primary' };
