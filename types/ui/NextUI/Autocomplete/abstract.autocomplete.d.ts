import {NextUI, React} from '@Packages/Types'
import { UnknownObject } from '@Utility/Types';

interface AutocompleteEventsProps {
  onSelectionChange?: (key: React.Key) => void
  onInputChange?: (value: string) => void
  onFocusChange?: (isFocused: boolean) => void
  onFocus?: React.FocusEventHandler
  onKeyDown?: React.KeyboardEventHandler
  onKeyUp?: React.KeyboardEventHandler
  onOpenChange?: (isOpen: boolean, menuTrigger?: NextUI.MenuTriggerAction) => void
  onClose?: () => void
}

interface AbstractAutocompleteFieldProps<T extends UnknownObject, IV extends keyof T = keyof T> {
  classNames?: string
  color?: NextUI.Color
  size?: NextUI.Size
  menuTrigger?: NextUI.AutocompleteMenuTrigger
  isRequired?: boolean
  isDisabled?: boolean
  defaultItems: T[]
  itemKey: keyof T
  itemValue: IV
  disableKeys?: 'all' | keyof T[IV][]
  label?: string
  labelPlacement?: NextUI.AutocompleteLabelPlacement
  variant?: NextUI.AutocompleteVariant
  description?: React.ReactNode
  placeholder?: string
  isInvalid?: boolean
  isReadOnly?: boolean
  errorMessage?: string
  autoFocus?: boolean
  fullWidth?: boolean
  showScrollIndicators?: boolean
  isClearable?: boolean
  listBoxProps?: NextUI.ListboxProps
  inputProps?: NextUI.InputProps
  selectorButtonProps?: NextUI.ButtonProps
}

export type AbstractAutocompleteProps<T extends UnknownObject> = AbstractAutocompleteFieldProps<T> & AutocompleteEventsProps