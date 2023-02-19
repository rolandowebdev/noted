import { Editable, EditablePreview, EditableInput } from '@chakra-ui/react'
import { EditableControls } from './EditableControls'

interface CustomControlsProps {
  title: string
}

export const CustomControls = ({ title }: CustomControlsProps) => {
  return (
    <Editable
      display="flex"
      alignItems="center"
      gap={3}
      fontWeight="semibold"
      textAlign="center"
      value={title}
      fontSize="3xl"
      selectAllOnFocus={false}>
      <EditablePreview />
      <EditableInput />
      <EditableControls />
    </Editable>
  )
}
