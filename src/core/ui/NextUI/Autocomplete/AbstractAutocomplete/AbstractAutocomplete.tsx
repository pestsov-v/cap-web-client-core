import React from 'react'
import { Autocomplete, AutocompleteItem } from '@Packages';
import { AbstractAutocompleteProps } from '@NextUI/Types';

export const AbstractAutocomplete = <T extends Record<string, unknown>[]>(props: AbstractAutocompleteProps<T>): React.ReactElement => {
  return (
    <div className="flex w-full flex-col">
      <Autocomplete
        size={props.size}
        label={props.label}
        labelPlacement={props.labelPlacement}
        variant={props.variant}
        defaultItems={props.defaultItems}
        disabledKeys={props.disableKeys}
        className="max-w-xs"
        allowsCustomValue={true}
        color={props.color ? props.color : 'default'}
        description={props.description}
        placeholder={props.placeholder}
        isRequired={props.isRequired}
        isInvalid={props.isInvalid}
        isDisabled={props.isDisabled}
        errorMessage={props.errorMessage}
        autoFocus={props.autoFocus}
        menuTrigger={props.menuTrigger}
        isReadOnly={props.isReadOnly}
        fullWidth={props.fullWidth}
        showScrollIndicators={props.showScrollIndicators}
        isClearable={props.isClearable}
        listBoxProps={props.listBoxProps}
        inputProps={props.inputProps}
        selectorButtonProps={props.selectorButtonProps}
        onSelectionChange={props.onSelectionChange}
        onInputChange={props.onInputChange}
        onFocusChange={props.onFocusChange}
        onFocus={props.onFocus}
        onKeyDown={props.onKeyDown}
        onKeyUp={props.onKeyUp}
        onOpenChange={props.onOpenChange}
        onClose={props.onClose}
      >
        {
          (item: T) =>
            <AutocompleteItem
              key={item[props.itemKey]}
            >
              {item[props.itemValue]}
            </AutocompleteItem>}
      </Autocomplete>
    </div>
  )
}