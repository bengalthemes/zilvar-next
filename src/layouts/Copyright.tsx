import { siteSettings } from "@/settings/site-settings";

export default function Copyright() {
  const { name, author } = siteSettings;
  const currenYear = new Date().getFullYear();
  return (
    <div className="pt-8 border-t border-gray-light lg:pt-0 lg:border-t-0">
      <div className="container">
        <div className="text-xs font-medium leading-loose tracking-widest text-center text-white">
          © Copyright {currenYear} {name}. Template by{" "}
          <a href={author.websiteUrl} className="hover:opacity-80">
            {author.name}
          </a>
        </div>
      </div>
    </div>
  );
}
