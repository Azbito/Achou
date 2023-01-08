import axios from 'axios'

export default async function searchPostalCode(code: number) {
  try {
    const { data } = await axios.get(`https://viacep.com.br/ws/${code}/json/`)
    return data

  } catch (err) {
    alert("CEP inválido")
  }
}
