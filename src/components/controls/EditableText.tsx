import {
  Editable,
  EditableInput,
  EditablePreview,
  Input,
} from '@chakra-ui/react'
import { KeyboardEvent, useRef } from 'react'
import { useActivityContext } from '@/context'
import { EditableControls } from '@/components'
import { useCustomToast } from '@/hooks'

interface EditableTextProps {
  activityId: string
}

export const EditableText = ({ activityId }: EditableTextProps) => {
  const showToast = useCustomToast()
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
    }).then(() => showToast('Activity berhasil diupdate', 'success'))
  }

  const handleEnterKey = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      if (inputRef.current) {
        handleInputChange(inputRef.current.value)
        inputRef.current.blur()
      }
    }
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
      <Input as={EditableInput} ref={inputRef} onKeyDown={handleEnterKey} />
      <EditableControls />
    </Editable>
  )
}
