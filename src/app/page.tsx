'use client'
import { useNextUIAutocomplete } from '@Core/agents/ui.nextui.agent';

export default function Home() {
  const {Autocomplete} = useNextUIAutocomplete('abstract')

  const s = [
    {
      label: 12
    },
    {
      label: 44
    }
  ]

  return (
      <div>
        <Autocomplete defaultItems={s} itemKey={'label'} itemValue={'label'} />
      </div>
  )
}
