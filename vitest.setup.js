import { beforeAll, vi } from "vitest"

beforeAll(() => {
  vi.mock("next/navigation", () => {
    const actual = vi.importActual("next/navigation")
    return {
      ...actual,
      useRouter: () => ({
        push: vi.fn(),
      }),
    }
  })
})

global.jest = vi
