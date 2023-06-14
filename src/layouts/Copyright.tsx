import AnchorLink from '@/components/ui/anchor-link';
import { siteSettings } from '@/settings/site-settings';

export default function Copyright() {
  const { name, author } = siteSettings;
  const currenYear = new Date().getFullYear();
  return (
    <div className="pt-8 border-t border-gray-light lg:pt-0 lg:border-t-0">
      <div className="container">
        <div className="text-xs font-normal leading-loose tracking-widest text-center text-white">
          © Copyright {currenYear} {name}. Template by{' '}
          <AnchorLink
            href={author.websiteUrl}
            className="font-semibold hover:opacity-80"
            target="_blank"
          >
            {author.name}
          </AnchorLink>
        </div>
      </div>
    </div>
  );
}
