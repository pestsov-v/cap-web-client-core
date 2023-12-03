import React from 'react';
import { AbstractAutocompleteProps } from '@NextUI/Types';

export namespace NUiNextUIAgent {
  export type Autocomplete = {
    Autocomplete: <T extends Record<string, unknown> = Record<string, unknown>>(props: AbstractAutocompleteProps<T>) => React.ReactElement
  }


  export type AutocompleteKind = 'abstract' | 'base'
}