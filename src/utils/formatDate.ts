export const formatDate = (dateString: any) => {
  const date = new Date(dateString)
  const formattedDate = date.toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
  return formattedDate
}
