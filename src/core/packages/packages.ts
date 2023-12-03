export {Autocomplete, AutocompleteItem} from '@nextui-org/react'
import { Container, ContainerModule, inject, injectable } from 'inversify';

export const inversify = {
  inject: inject,
  injectable: injectable,
  Container: Container,
  ContainerModule: ContainerModule
}

