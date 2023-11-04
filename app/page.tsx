// import { Button } from "@/components/ui";
import { Button } from '@/base/components/ui/button';
// import FetchGraphQL from "@/src/components/"

const test = process.env.SPACE_ID;
console.log('test:', test);

export default function Home() {
  return (
    <main>
      <Button>Click me, please</Button>
      <div>test in</div>
      <div>try without ui library</div>
    </main>
  );
}
