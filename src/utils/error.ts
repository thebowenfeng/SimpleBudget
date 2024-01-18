export class UnifiedError extends Error {
  public code: string
  constructor (code: string, message: string) {
    super(message)
    this.name = "Error"
    this.code = code
  }
}
