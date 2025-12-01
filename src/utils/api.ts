const API_URL = import.meta.env.PUBLIC_API_URL || 'https://backend-maria-alicia-cabrera-production.up.railway.app'

export async function fetchAPI(endpoint: string) {
  try {
    const response = await fetch(`${API_URL}${endpoint}`)
    
    if (!response.ok) {
      console.error(`API Error: ${response.status} ${response.statusText}`)
      return { data: null, error: true }
    }
    
    const json = await response.json()
    
    // Asegurar que data siempre sea un array si se espera uno
    if (json.data === null || json.data === undefined) {
      return { data: [], error: false }
    }
    
    return { data: Array.isArray(json.data) ? json.data : [json.data], error: false }
  } catch (error) {
    console.error('Fetch error:', error)
    return { data: [], error: true }
  }
}

export { API_URL }
