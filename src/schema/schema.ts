export const validade = (value: string, code: number ,message: string):
any | Error => {
  if (value.length === 0 || !value.trim()) {
    return { code: 400, message }
  }
}
