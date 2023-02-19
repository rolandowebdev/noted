import { Editable, EditablePreview, EditableInput } from '@chakra-ui/react'
import { EditableControls } from './EditableControls'

export const CustomControls = () => {
  return (
    <Editable
      display="flex"
      alignItems="center"
      gap={3}
      fontWeight="semibold"
      textAlign="center"
      defaultValue="Example Title"
      fontSize="3xl"
      selectAllOnFocus={false}>
      <EditablePreview />
      <EditableInput />
      <EditableControls />
    </Editable>
  )
}
