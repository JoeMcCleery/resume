export default async function fetchStories (routes: string[], cacheVersion: number, page = 1) {
  const token = process.env.STORYBLOK_ACCESS_TOKEN
  const version = process.env.NUXT_PUBLIC_STORYBLOK_VERSION
  const perPage = 100
  const toIgnore : string[] = ['/contact-links', '/navigation-config']

  try {
    const response = await fetch(
        `https://api.storyblok.com/v2/cdn/links?token=${token}&version=${version}&per_page=${perPage}&page=${page}&cv=${cacheVersion}`
    )
    const data = await response.json()

    // Add routes to the array
    Object.values(data.links).forEach((link : any) => {
      if (!toIgnore.includes(link.real_path) && link.published && !link.is_folder) {
        routes.push(link.real_path)
      }
    })

    // Check if there are more pages with links

    const total = response.headers.get('total')
    if (total) {
      const maxPage = Math.ceil(parseInt(total) / perPage)

      if (maxPage > page) {
        await fetchStories(routes, cacheVersion, ++page)
      }
    }
  } catch (error) {
    console.error(error)
  }
}
