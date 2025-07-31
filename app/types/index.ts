import type { ReactNode } from "react"

// Data Types
export type Model = {
    id: number
    name: string
    description: string
    likes: number
    image: string
    category: string
    dateAdded: string
}

export type Category = {
    displayName: string
    slug: string
}

export type CategoriesData = {
    categories: Category[]
}

export type GetModelsParams = {
    category?: string
}


export type CategoryPageProps = {
  params: {
    categoryName: string
  }
}


export type RootLayoutProps = Readonly<{
    children: React.ReactNode;
}>

export type ModelsPageProps = {
    searchParams: {
        q?: string
    }
}

export type ModelDetailPageProps = {
  params: { id: string };
};

export type PageProps<T = {}> = {
  params: T
  searchParams?: { [key: string]: string | string[] | undefined }
}

// Components Types
export type ModelCardProps = {
    model: Model
}

export type ModelsGridProps = {
    title: string
    models: Model[]
}

export type PillProps = {
    children: ReactNode
    className?: string
}

export type NavLinkProps = {
    href: string
    children: ReactNode
    isActive?: boolean
}