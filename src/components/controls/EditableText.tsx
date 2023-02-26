import {
  Editable,
  EditableInput,
  EditablePreview,
  Input,
} from '@chakra-ui/react'
import { useRef } from 'react'
import { useActivityContext } from '@/context'
import { EditableControls } from '@/components'

interface EditableTextProps {
  activityId: string
}

export const EditableText = ({ activityId }: EditableTextProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const { activity, setActivity, updateActivity } = useActivityContext()

  const handleInputChange = (newValue: string) => {
    setActivity({ id: activityId, title: newValue })
  }

  const handleSubmit = () => {
    updateActivity({
      ...activity,
      id: activityId,
      title: activity?.title,
    })
  }

  return (
    <Editable
      display="flex"
      alignItems="center"
      gap={3}
      fontWeight="700"
      textAlign="center"
      value={activity?.title}
      fontSize="3xl"
      selectAllOnFocus={false}
      onChange={handleInputChange}
      onSubmit={handleSubmit}>
      <EditablePreview as="h1" data-cy="todo-title" fontSize="4xl" />
      <Input
        as={EditableInput}
        ref={inputRef}
        focusBorderColor="brand.primary"
      />
      <EditableControls />
    </Editable>
  )
}
