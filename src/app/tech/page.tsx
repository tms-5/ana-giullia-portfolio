import { profileContent } from '@/data/profile'
import { TechPageTemplate } from '@/components/tech/TechPageTemplate'

export default function TechPage() {
  return <TechPageTemplate content={profileContent.tech} />
}
