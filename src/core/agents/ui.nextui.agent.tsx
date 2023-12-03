import React from 'react';
import { AbstractAutocomplete } from '@NextUI';

import { NUiNextUIAgent } from '@Core/Types';
import { AbstractAutocompleteProps } from '@NextUI/Types';

export const useNextUIAutocomplete = <T extends Record<string, unknown>[]>(props?: NUiNextUIAgent.AutocompleteKind): NUiNextUIAgent.Autocomplete => {
  let autocomplete: <T extends Record<string, unknown>[]>(props: AbstractAutocompleteProps<T>) => React.ReactElement
  switch (props) {
    case 'abstract':
      autocomplete = AbstractAutocomplete
      break
    case 'base':
      throw new Error('Not implemented')
    default:
      autocomplete = AbstractAutocomplete
  }

  return { Autocomplete: autocomplete }
}