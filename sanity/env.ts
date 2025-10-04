export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-10-04'

export const dataset = 'production'

export const projectId = '9rcwh0i2'

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
