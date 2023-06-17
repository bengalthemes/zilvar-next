import Copyright from '@/layouts/components/copyright';
import Widget from '@/layouts/components/widget';

export default function Footer() {
  return (
    <footer className="w-full pt-20 pb-10 bg-black lg:sticky lg:z-0 lg:bottom-0 lg:left-0 lg:pb-20">
      <Widget />
      <Copyright />
    </footer>
  );
}
