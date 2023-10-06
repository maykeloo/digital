import type { ParsedContent } from '@nuxt/content/dist/runtime/types'
import { Tag } from './Tags'

export type DetailedCard = {
    description: string
    title: string
    date: string
    cover: string
    tags: Tag[]
} & ParsedContent