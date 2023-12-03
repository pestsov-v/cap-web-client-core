import React from 'react'
import NextUI from '@nextui-org/react'

export namespace NextUI {
  export type Color = 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
  export type AutocompleteVariant = 'faded' | 'bordered' | 'flat'
  export type AutocompleteLabelPlacement = 'inside' | 'outside' | 'outside-left'
  export type Size = 'sm' | 'lg' | 'md'
  export type AutocompleteMenuTrigger = 'focus' | 'input' | 'manual'

  export type MenuTriggerAction = NextUI.MenuTriggerAction
  export type ListBoxProps = NextUI.ListboxProps
  export type InputProps = NextUI.InputProps
  export type ButtonProps = NextUI.ButtonProps
}

export namespace React {
  export type KeyboardEventHandler = React.KeyboardEventHandler
  export type FocusEventHandler = React.FocusEventHandler
  export type Key = React.Key
  export type ReactNode = React.ReactNode
}
