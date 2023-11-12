import Category from './Category/Category';
import Featured from './Featured/Featured';

export default function Home() {
  return (
    <section className="flex flex-col gap-6">
      <Category />
      <Featured />
    </section>
  );
}
