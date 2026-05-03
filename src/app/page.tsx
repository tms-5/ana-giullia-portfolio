import { profileContent } from '@/data/profile'
import { OdontoPageTemplate } from '@/components/odonto/OdontoPageTemplate'

export default function Home() {
  return <OdontoPageTemplate content={profileContent.odonto} />
}
