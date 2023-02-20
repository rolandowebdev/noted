import { CheckIcon, CloseIcon, EditIcon } from '@chakra-ui/icons'
import {
  ButtonGroup,
  Flex,
  IconButton,
  useEditableControls,
} from '@chakra-ui/react'

export const EditableControls = () => {
  const {
    isEditing,
    getSubmitButtonProps,
    getCancelButtonProps,
    getEditButtonProps,
  } = useEditableControls()

  return isEditing ? (
    <ButtonGroup justifyContent="center" alignItems="center" size="sm">
      <IconButton
        aria-label="check icon"
        icon={<CheckIcon />}
        {...getSubmitButtonProps()}
      />
      <IconButton
        aria-label="close icon"
        icon={<CloseIcon />}
        {...getCancelButtonProps()}
      />
    </ButtonGroup>
  ) : (
    <Flex justifyContent="center" alignItems="center">
      <IconButton
        aria-label="edit icon"
        icon={<EditIcon />}
        {...getEditButtonProps()}
      />
    </Flex>
  )
}
