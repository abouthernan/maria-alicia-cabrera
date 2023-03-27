export const formatDate = (date: Date): string => {
  const options = {
    year: 'numeric',
    month: 'long',
    day: '2-digit'
  }

  return new Date(date).toLocaleDateString('es-CO', options)
}
